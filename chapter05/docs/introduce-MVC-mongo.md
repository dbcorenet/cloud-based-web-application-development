# MVC 디자인 패턴, Model 변경하기

MVC 디자인 패턴에서 Model 부분을 기존 in-memory 데이터베이스에서 MongoDB로 변경해보도록 하겠습니다. 

## 사전 준비

**mongodb 모듈 설치**

먼저 mongoDB 데이터베이스 액세스를 위해 express 프로젝트에 mongodb 모듈의 의존성을 추가 합니다  

```bash
npm install mongodb --save
```

<br>

**Note.js 수정**

mongoDB는 JSON 형태로 데이터를 주고 받습니다.   
**Note.js** 파일에 아래 내용을 추가 합니다.  

```javascript
module.exports = class Note {
  ...
  ...
  ...
  set body(newBody) { this[_note_body] = newBody; }

  //-------추가할 부분------
  toJSON() {
    return {
      key: this[_note_key],
      title:  this[_note_title],
      body:   this[_note_body]
    };
  }
  //-----------------------

};
```

<br>

**MongoDB 구동 확인**

Lightsail에서 아래의 명령어를 통해 mongoDB의 구동 상태를 확인 합니다.  

```bash
systemctl status mognod
```

<br>

아래의 화면 같이 Active 항목에 active(running) 이라는 메시지가 출력 되면 mongoDB가 정상적으로 작동 중입니다. 

![query-selector](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mongo-status.png)

<br>


## mongoDB Model 파일 생성 및 라우터에 추가

기존 in-memory 대신 mongoDB를 사용하므로 models 디렉토리에 mongoDB를 위한 파일을 생성 합니다.
생성 후 필요한 모듈 및 변수를 아래와 같이 작성합니다.    

**notes-mongo.js**

```javascript
const Note = require('./Note');
const MongoClient = require('mongodb').MongoClient;

const MongoUrl = 'mongodb://127.0.0.1:27017';
const DataBaseName = 'mongoTutorial';
const CollectionName = 'Notes'

var notes = [];
...
...
...
```
<br>

mongoDB model 파일 생성 후 라우터에 해당 모듈을 추가 합니다.  


**routes/index.js**

```javascript
var express = require('express');
var router = express.Router();
const notes = require('../models/notes-memory');
//추가되는 부분
const notesMongo = require('../models/notes-mongo');
//-----------
```

### 메인 화면의 keylist 수정

메인 화면에서는 저장되어 있는 Note의 리스트를 read 해 뷰 화면에 출력하는 것이 모델의 역할 입니다.  
그래서 아래와 같이 keylist 함수를 mongoDB에서 read 해서 return 하도록 notes-mongo.js에 아래 코드를 추가 합니다.

**notes-mongo.js**
```javascript
exports.keylist = async function() { 
  let client = await MongoClient.connect(MongoUrl)
  .catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.find({}).toArray();
  return result;
};
```

<br>

추가 한 notes-mongo의 keylist를 적용하기 위해 index.js의 라우터 파일을 아래와 같이 수정 합니다.  

```javascript
router.get('/', async (req, res, next) => {
  let keylist = await notesMongo.keylist();
  res.render('index', { title: 'Notes', notelist: keylist });
});
```

<br>

### Note add 과정 수정

메인 하면에서 ADD Note 버턴을 누르면 노트 입력을 위한 Form 화면으로 바뀌고 입력 후 Submit 버튼을 누르면 노트가 추가 됩니다.   
추가 된 후 화면은 추가된 노트위 상세보기 화면으로 이동합니다.  

노트가 추가 되는 행위에서는 Model에서 두가지 역할을 진행합니다.  
- 노트를 데이터베이스에 create
- 저장된 노트를 화면에 출력하기 위한 read (저장되는 노트의 key를 이용한 조회)

그래서 위 두가지 작업을 model에 추가 하도록 하겠습니다. 

**notes-mongo.js**

```javascript
exports.update = exports.create = async function(key, title, body) {
  
  notes[key] = new Note(key, title, body);

  let noteJSON = notes[key].toJSON();

  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });

  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.insertOne(noteJSON);
  return result;
};


exports.read = async function(key) {


  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.findOne({"key": key});
  console.log(result);
  return result;

};
```

<br>

추가한 model을 사용하는 라우터에 변경사항을 적용합니다.  


**index.js**
```javascript
router.post('/notes/save', async (req, res, next) => {
  var note;
  console.log(req.body);
  if (req.body.docreate === "create") {
    note = await notesMongo.create(req.body.notekey,
      req.body.title, req.body.body);
  } else {
    note = await notes.update(req.body.notekey,
      req.body.title, req.body.body);
  }
  res.redirect('/notes/view?key='+ req.body.notekey);
});

router.get('/notes/view', async (req, res, next) => {
  var note = await notesMongo.read(req.query.key);
  res.render('noteview', {
    title: note ? note.title : "",
    notekey: req.query.key, note: note
  });
});
```

<br>


### Note delete 과정 수정

메인 화면에서는 저장된 노트의 리스트가 보이고 특정 노트를 클릭하면 해당 노트의 상세화면으로 이동합니다.  
여기서 상세화면은 노트를 추가한 후 노트를 확인하는 뷰와 모델과 동일하기 때문에 위에서 노트를 추가하는 과정에서 수정으로 이미 반영 되어 있습니다.  

상세화면에서 delete 클릭 시 해당 노트를 지우겠냐는 확인 페이지로 전환 됩니다.
해당 화면에서 모델의 역할은 조회(read)로 동일하므로 노트 생성에 사용했던 read를 그대로 사용합니다.  
하지만 이전의 상세화면과는 다른 뷰, 컨트롤러를 사용하므로 컨트롤러 부분을 아래와 같이 수정 합니다. 

<br> 

**index.js**
```javascript
router.get('/notes/destroy', async (req, res, next) => {
  var note = await notesMongo.read(req.query.key);
  res.render('notedestroy', {
    title: note ? note.title : "",
    notekey: req.query.key, note: note
  });
});
```

<br>

delete를 확인하는 뷰에서 한번더 delete 버튼을 클릭 시 노트가 삭제되고 메인화면으로 리다이렉트 됩니다.
여기서는 모델에서 delete 작업이 진행되므로 아래의 코드를 추가 합니다.  


**notes-mongo.js**
```javascript
exports.destroy = async function(key) {
  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.deleteOne({"key": key});
  return;
};
```

<br>

모델 수정 후 해당 모델을 사용하는 컨트롤러, 라우터를 수정 합니다.

**index.js**
```javascript
router.post('/notes/destroy/confirm', async (req, res, next) => {
  await notesMongo.destroy(req.body.notekey);
  res.redirect('/');
});
```

<br>

위의 작업을 완료 후 페이지를 처음 부터 실행하면 in memory 대신 mongoDB를 이용하여 동작하는 페이지들을 확인할 수 있습니다.  


