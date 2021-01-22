# MVC 디자인 패턴 개념 소개

## 디자인 패턴
디자인 패턴은 건축으로치면 공법에 해당하는 것으로 소프트웨어의 개발 방법을 공식화 한 것입니다.
<br>소수의 뛰어난 엔지니어가 해결한 문제를 다수의 엔지니어들이 처리 할 수 있도록 한 규칙이면서, 구현자들 간의 커뮤니케이션의 효율성을 높이는 기법입니다.
([위키피디아 참고](https://ko.wikipedia.org/wiki/%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4))

## MVC
MVC란 Model View Controller 의 약자로 애플리케이션을 세 가지의 역할로 구분한 개발 방법론입니다.
<br> 아래 그림처럼 사용자가 Controller 를 조작하면 Controller는 Model 을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달하게 됩니다.

<img src="https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/327/1262.png">

## Model
M은 Model을 의미합니다.
<br>프로그램에 사용되는 데이터를 의미하며 데이터베이스, 상수, 문자열과 같은 변수들 등이 해당됩니다.
<br>모델에는 뷰나 컨트롤러의 정보가 전혀 없습니다.
<br>정보만 반환하거나 설정 할 수 있습니다.
<br>예를 들어, 메모를 저장하는 애플리케이션이 있다고 가졍하면 Model은 메모를 저장하는 데이터베이스 테이블에 접속하여 데이터를 반환하는 역할을 합니다.

## View
V는 View를 의미합니다.
<br>텍스트박스, 라벨, 버튼 등 사용자 인터페이스 요소들을 의미합니다.
<br>뷰에서는 별도의 데이터를 보관히지 않습니다. 뷰에서 입력받고 출력해주는 모든 데이터는 모델을 거칩니다.

## Controller
모델과 뷰를 이어주는 브릿지 역할을 수행합니다.
<br>사용자가 버튼을 클릭하면 이벤트는 뷰에서 발생하지만 내부 처리는 컨트롤러에서 관리하는 것입니다.
<br>또한, 입력이 발생하면 이에 대한 알림을 담당합니다.

## Web과 MVC
위의 개념을 웹에 적용해보면 아래와 같습니다.

1. 사용자가 웹사이트에 접속합니다. (Uses)
2. Controller는 사용자가 요청한 웹페이지를 서비스하기 위해서 모델을 호출한다. (Manipulates)
3. 모델은 데이터베이스나 파일과 같은 데이터 소소를 제어한 후에 그 결과를 리턴한다.
4. Controller는 Model이 리턴한 결과를 View에 반영한다. (Updates)
5. 데이터가 반영된 View는 사용자에게 보여진다. (Sees)

## Notes 애플리케이션

메모를 조회하고 추가하는 애플리케이션을 express를 기반으로 MVC 패턴을 적용하여 구현하고자 합니다.
<br>기본적인 기능을 구현하기 위해서 View를 먼저 구현하여 in-memory를 기반으로 동작하는 애플리케이션을 구현합니다.
<br>아래는 구현된 전체 디렉토리 구조입니다.
<br>views 디렉토리 아래에 partials가 추가되었고, 메모 애플케이션에 필요한 뷰 파일들이 구현된 것을 확인 할 수 있습니다.

```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.scss
├── models
│   ├── Notes.js
│   └── notes-memory.js
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── partials
    │   └── header.hbs
    ├── error.hbs
    ├── index.hbs
    ├── layout.hbs
    ├── notedestroy.hbs
    ├── noteedit.hbs
    └── noteview.hbs

```

## express 라우팅

프로젝트를 생성하면 기본적으로 라우팅에 필요한 파일과 코드들이 구현되어 있습니다.
<br>라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결장하는 것을 말합니다.
<br>예를 들어 네이버에 접속했을 때 뉴스 메뉴를 누르면 "news.naver.com" 으로 페이지가 이동하는 것을 볼 수 있습니다.
<br>이것은 네이버에서 "news.naver.com" 이라는 URL을 사용자가 클릭하여 요청하게 되면 뉴스 뷰파일을 보여주도록 응답하라고 라우팅을 정한 것입니다.

<br>express의 기본 라우팅 문법은 아래와 같습니다.
- app은 express 인스턴스입니다.
- METHOD는 HTTP 요청 메소드입니다. (get)
- PATH는 서버에서의 경로 입니다. ('/')
- HANDLER는 라우트가 일치 할 때 실행되는 함수입니다. (function ...)

```javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

프로젝트를 생성하면 rountes/index.hbs 에 메인에 대한 라우팅이 정의되어 있습니다.
- '/' : path. 아무것도 없이 '/'만 정의된 경우 메인을 의미.
- res.render('index', { title: 'Express' }); : index.hbs 뷰 파일을 표시하며 title 이라는 이름으로 'Express' 값을 전달.

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

```

서버를 시작한 뒤 메인에 접속하면 title로 전달된 Express 가 출력되는 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-start-express.png" style="max-width:400px;max-height:400px">

### 라우팅 설정

**app.js** 파일에서 라우터와 관련된 설정을 해주는 부분입니다.
**routes/index**와 **routes/users**파일을 import 시켜서 app.use를 사용하여 라우터를 설정해주고 있습니다.

- app.use('/', indexRouter); : '/'로 시작하는 path를 요청하면 index 파일에 있는 라우터 정의를 사용.
- app.use('/users', usersRouter); : '/users'로 시작하는 path를 요청하면 users 파일에 있는 라우터 정의를 사용.

*app.js*
```javascript
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);
```

페이지가 많아지는 경우 라우터를 구분해주고 싶을 때 위처럼 설정에 추가하여 라우터 파일을 구분하여 관리가 가능합니다.


## Views 디렉토리
Views 디렉토리는 프로젝트에서 사용하는 모든 뷰 파일을 관리하는 디렉토리입니다.
<br>뷰 파일은 기본적으로 error.hbs, index.hbs, layout.hbs 파일이 있습니다.
- error.hbs : 웹페이지에 에러가 발생했을 때 렌더링 되는 파일.
- index.hbs : 메인 뷰 파일.
- layout.hbs : 전체 페이지에 공통적으로 들어가는 레이아웃을 정의 한 파일.

```
└── views
    ├── error.hbs
    ├── index.hbs
    └── layout.hbs
```


### layout.hbs

전체 웹페이지에 공통적으로 들어가는 코드를 정의합니다.
head, 스타일 파일 주입 등이 정의되어 있습니다.
```{{{body}}}``` 에 라우터에서 정의한 뷰 파일이 삽입되어 표시됩니다.

```javascript

<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    {{{body}}}
  </body>
</html>

```

### index.hbs

메인 뷰 파일입니다.
layout의 {{{body}}} 부분에 코드가 주입됩니다.

```javascript
<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>

```

메인에 접속하면 아래처럼 layout의 {{{body}}}에 index가 삽입되어 웹페이지에 표시되는 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-handlebar-rendering.png" style="max-width:400px;max-height:400px">

## 비동기 작업의 이해

웹 애플리케이션을 만들다 보면 처리할 때 시간이 걸리는 작업이 있습니다.
<br>예를 들어 웹 애플리케이션에서 서버 쪽 데이터가 필요할 때는 Ajax 기법을 사용하여 서버의 API를 호출함으로써 데이터를 수신합니다.
<br>이렇게 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리합니다.
<br>이 과정에서 해당 작업을 비동기적으로 처리하게 됩니다.

<img src="https://thebook.io/img/080203/355.jpg">

<br>
<br>만약 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다.
<br>그리고 요청이 끝나야 비로소 그다음 예정된 작업을 할 수 있습니다.
<br>하지만 이를 비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러 가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.
<br>
<br>자바스크립트는 이러한 비동기 작업 때문에 여러 개의 함수를 선언하여 호출하였을 때 순서에 대한 보장이 없습니다.
<br>예를 들어 A 함수가 실행된 후 B 함수가 실행되어야 하는경우 A, B 순서로 호출했다고 해서 반드시 A가 B 함수보더 먼저 호출된다는 보장이 없습니다.
<br>
<br>이러한 경우 사용하는 것이 콜백 함수입니다.

### 콜백 함수

파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수가 있다고 가정합니다.
<br>그리고 해당 함수(A)가 처리 된 직후 추가적인 작업(B)을 하고 싶다면 다음과 같이 콜백 함수를 활용해서 작업합니다.

```javascript
function increase(number, callback) {
setTimeout(() => {
    const result = number + 10;
  if (callback) {
    callback(result);
  }
}, 1000)
}


increase(0, result => {
  console.log(result);
});

```

1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러 번 순차적으로 처리하고 싶다면 콜백 함수를 중첩하여 구현할 수 있습니다


```javascript
function increase(number, callback) {
setTimeout(() => {
  const result = number + 10;
  if (callback) {
    callback(result);
  }
}, 1000);
}

console.log('작업 시작');
increase(0, result => {
console.log(result);
increase(result, result => {
  console.log(result);
  increase(result, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      console.log('작업 완료');
    });
  });
});
});
```

```
작업  시작
Hello World!
10
20
30
40
작업 완료
```

이렇게 콜백 함수 안에 또다른 콜백을 넣어서 구현하게되면 여러 번 중첩되어 나타나 코드의 가독성이 떨어지게 됩니다.
<br>이러한 형태의 코드를 콜백 지옥이라고 부르며 지양해야 할 형태의 코드입니다.

### Promise

Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6 에 도입된 기능입니다.
<br>앞에서 본 코드를 Promise를 사용하여 구현해보면 아래와 같습니다.

```javascript
function increase(number) {
const promise = new Promise((resolve, reject) => {
  // resolve는 성공, reject는 실패
  setTimeout(() => {
    const result = number + 10;
    if (result > 50) {
      // 50보다 높으면 에러 발생시키기
      const e = new Error('NumberTooBig');
      return reject(e);
    }
    resolve(result); // number 값에 +10 후 성공 처리
  }, 1000);
});
return promise;
}

increase(0)
.then(number => {
  // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
  console.log(number);
  return increase(number); // Promise를 리턴하면
})
.then(number => {
  // 또 .then으로 처리 가능
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.catch(e => {
  // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
  console.log(e);
});
```

여러 작업을 연달아 처리하지만, 중첩으로 함수를 감싸는 것이 아니라 .then을 사용하여 같은 레벨에서 처리 할 수 있게 됩니다.

### async/await

async/await는 Promise는 더욱 쉽게 사용할 수 있도록 해주는 ES8 문법입니다.
<br>이 문법을 사용하여면 함수 앞부분에 키워드 **async** 를 추가하고, 해당 함수 내부에서 Promise 의 앞부분을 **await** 키워드를 사용합니다.
<br>async/await 를 사용하면 비동기로 동작하는 자바스크립트를 마지 자바처럼 코드를 구현하여 사용할 수 있게 됩니다.

```javascript
function increase(number) {
const promise = new Promise((resolve, reject) => {
  // resolve는 성공, reject는 실패
  setTimeout(() => {
    const result = number + 10;
    if (result > 50) { // 50보다 높으면 에러 발생시키기
      const e = new Error(‘NumberTooBig‘);
              return reject(e);
    }
          resolve(result); // number 값에 +10 후 성공 처리
  }, 1000)
});
return promise;
}


async function runTasks() {
try { // try/catch 구문을 사용하여 에러를 처리합니다.
  let result = await increment(0);
  console.log(result);
  result = await increment(result);
  console.log(result);
  result = await increment(result);
  console.log(result);
  result = await increment(result);
  console.log(result);
  result = await increment(result);
  console.log(result);
  result = await increment(result);
  console.log(result);
} catch (e) {
  console.log(e);
}
}
```

## Notes 조회, 추가, 삭제 구현

### 테스트를 위한 in-memory 코드 구현

추가한 노트를 저장하기 위해서는 데이터베이스가 필요합니다.
<br>실제 데이터베이스를 연결하기 전 테스트를 위해서 in-memory 를 기반으로 동작하는 애플리케이션을 구현합니다.
<br>
<br>in-memory 데이터베이스는 따로 서버가 구축되어 영구적으로 저장되는 것이 아니라 임시적으로 데이터를 저장하는 방식입니다.
<br>임시로 데이터베이스를 저장하기 떄문에 웹 애플리케이션 서버를 재시작하면 데이터가 사라집니다.

**models/Note.js**
노트의 스키마를 구현하는 파일입니다.
노트의 정보를 저장하는 key, 제목, 내용에 대한 스키마를 정의하며 생성자, getter, setter를 정의합니다.

```javascript
const _note_key = Symbol('key');
const _note_title = Symbol('title');
const _note_body = Symbol('body');

module.exports = class Note {
  constructor(key, title, body) {
    this[_note_key] = key;
    this[_note_title] = title;
    this[_note_body] = body;
  }
  get key() { return this[_note_key]; }
  get title() { return this[_note_title]; }
  set title(newTitle) { this[_note_title] = newTitle; }
  get body() { return this[_note_body]; }
  set body(newBody) { this[_note_body] = newBody; }
};
```

**models/notes-memory.js**

in-memory 데이터베이스의 기능을 정의해줍니다.

- create : 새로운 Note 를 저장
- read : key를 가지는 Note 를 조회
- destroy : key를 가지는 Note 를 삭제
- keylist : 모든 Note 의 key 목록을 조회
- count : 모든 Note 의 갯수 조회
- close : 데이터베이스 연결 닫기

```javascript
const Note = require('./Note');

var notes = [];

exports.update = exports.create = async function(key, title, body) {
    notes[key] = new Note(key, title, body);
    return notes[key];
};

exports.read = async function(key) {
    if (notes[key]) return notes[key];
    else throw new Error(`Note ${key} does not exist`);
};

exports.destroy = async function(key) {
    if (notes[key]) {
        delete notes[key];
    } else throw new Error(`Note ${key} does not exist`);
};

exports.keylist = async function() { return Object.keys(notes); };
exports.count = async function() { return notes.length; };
exports.close = async function() { }
```

### Notes 애플리케이션 메인 구현

'/' path로 접속하면 보여줄 메인페이지를 구현합니다.

<br>routes/index.js 에서 메인 라우터의 정의를 수정해줍니다.
<br>메인에 keylist 메소드를 호출하여 저장된 모든 메모 데이터를 가지고 옵니다.
<br>그리고 index 뷰 파일을 렌더링 하도록 하며 title은 Notes 값을 전달하고 notelist로 조회한 메모 데이터를 전달합니다.

```javascript
const express = require('express');
const router = express.Router();
const notes = require('../models/notes-memory');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let keylist = await notes.keylist();
  let keyPromises = keylist.map(key => {
    return notes.read(key)
  });
  let notelist = await Promise.all(keyPromises);
  res.render('index', { title: 'Notes', notelist: notelist });
});

module.exports = router;
```

모든 페이지에 기본적으로 보여줄 타이틀을 표시하는 header를 추가하고자 합니다.

#### 메인 뷰 파일 수정

메인 뷰 파일에 메모 목록이 보일 수 있도록 전달받은 notelist를 출력하는 코드를 추가합니다.
hadlebar의 each 문을 사용하여 notelist 배열을 반복문으로 순회하며 메모를 출력합니다.

```html
{{#each notelist}}
  <ul>
    <li>{{ key }}:
      <a href="/notes/view?key={{ key }}">{{ title }}</a>
    </li>
  </ul>
{{/each}}
```

#### partials 설정 추가
header 는 하나의 컴포넌트로 여러 곳에서 사용될 수 있기 때문에 partials로 구현하여 여러 페이지에 삽입 될 수 있도록 합니다.
<br>
<br>partials의 설정은 아래와 같습니다.
<br>app.js 파일에서 hbs.registerPartials(path.join(__dirname, 'partials')); 을 추가해줍니다.
<br>partials 하는 디렉토리에 있는 뷰 파일들을 다른 hbs 파일에 삽입할 수 있는 파셜로 지정하겠다는 의미입니다.
```javascript
const hbs = require('hbs');
...
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

```

header 파셜을 추가합니다.

**views/partials/header.hbs**
```html
<header>
  <h1>{{ title }}</h1>
  <div class='navbar'>
    <p><a href='/'>Home</a> | <a href='/notes/add'>ADD Note</a></p>
  </div>
</header>
```

추가된 header를 layout에 삽입합니다.

**views/layout.hbs**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
{{> header }} {{!-- 파셜은 '>'을 사용해서 삽입합니다. --}}
{{{body}}}

</body>
</html>
```


<br>
메인을 수정한 결과 실행하면 아래와 같은 화면이 출력됩니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-notes-main.png" style="max-width:400px;max-height:400px">


### Notes 추가

메모를 추가하는 라우터를 정의합니다.

**routes/index.js**
```javascript

// Add Note.
router.get('/notes/add', (req, res, next) => {
    res.render('noteedit', {
        title: "Add a Note",
        docreate: true,
        notekey: "", note: undefined
    });
});

module.exports = router;
```

메모를 추가하는 뷰 파일을 정의합니다.
<br>메모 추가 버튼을 클릭하면 '/notes/save'로 데이터를 전송합니다.
- notekey : 메모 key
- title : 제목
- body : 내용

**views/noteedit.hbs**
```html
<form method='POST' action='/notes/save'>
<input type='hidden' name='docreate' value='<%=
                  docreate ? "create" : "update"%>'>
<p>Key:
{{#if docreate }}
    <input type='text' name='notekey' value=''/>
{{else}}
    {{#if note }}{{notekey}}{{/if}}
    <input type='hidden' name='notekey'
         value='{{#if note }}{{notekey}}{{/if}}'/>
{{/if}}
</p>
<p>Title: <input type='text' name='title'
        value='{{#if note }}{{note.title}}{{/if}}' /></p>
<br/><textarea rows=5 cols=40 name='body' >
    {{#if note }}{{note.body}}{{/if}}
    </textarea>
<br/><input type='submit' value='Submit' />
</form>
```

메모 저장 요청을 받는 라우터를 정의합니다.

```javascript
// Save Note (update)
router.post('/notes/save', async (req, res, next) => {
    var note;
    if (req.body.docreate === "create") {
        note = await notes.create(req.body.notekey,
                req.body.title, req.body.body);
    } else {
        note = await notes.update(req.body.notekey,
                req.body.title, req.body.body);
    }
    res.redirect('/notes/view?key='+ req.body.notekey);
});
```

메모를 추가하는 화면입니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-add-memo.png" style="max-width:400px;max-height:400px">


### Notes view 화면

메모가 추가 된 후 메모 상세보기 화면으로 페이지가 전환됩니다.
<br>res.redirect는 요청 된 라우터에서 전환될 페이지의 path를 지정합니다.
<br>
<br>'/notes/view' 로 지정되었기 때문에 추가된 메모의 상세보기 페이지로 전환되도록 정의하였습니다.
<br>
<br>상세보기 페이지 라우터를 정의합니다.
```javascript
// Read Note (read)
router.get('/notes/view', async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('noteview', {
        title: note ? note.title : "",
        notekey: req.query.key, note: note
    });
});
```


상세보기 페이지 뷰를 정의합니다.
<br>
**views/noteview.hbs**
```html
{{#if note}}<h3>{{ note.title }}</h3>{{/if}}
{{#if note}}<p>{{ note.body }}</p>{{/if}}
<p>Key: {{ notekey }}</p>
{{#if notekey }}
    <hr/>
    <p><a href="/notes/destroy?key={{notekey}}">Delete</a></p>
{{/if}}

```

메모를 추가한 후 상세보기 파일로 전환되는 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-memo-view.png" style="max-width:400px;max-height:400px">


### Notes 삭제

메모를 삭제하기 전 정말도 삭제 할 것인지 묻는 페이지로 이동합니다.
<br>삭제 버튼을 누르면 삭제할 메모의 key 값과 제목을 notedestroy 뷰 파일로 전달합니다.

```javascript
// Ask to Delete note (destroy)
router.get('/notes/destroy', async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('notedestroy', {
        title: note ? note.title : "",
        notekey: req.query.key, note: note
    });
});
```

notedestroy 파일을 정의합니다.
<br>메모를 삭제할 것인지 한 번 더 묻는 화면입니다.
<br>삭제 버튼을 클릭하면 '/notes/destroy/confirm'로 post를 요청합니다.

```html
<form method='POST' action='/notes/destroy/confirm'>
<input type='hidden' name='notekey' value='{{#if note}}{{notekey}}{{/if}}'>
<p>Delete {{note.title}}?</p>
<br/><input type='submit' value='DELETE' />
<a href="/notes/view?key={{#if note}}{{notekey}}{{/if}}">Cancel</a>
</form>
```


<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-delete-confirm-view.png" style="max-width:400px;max-height:400px">

삭제 라우터를 정의합니다.
<br>메모가 삭제 된 후에는 '/' 메인으로 리다이렉트 됩니다.

```javascript
// Really destroy note (destroy)
router.post('/notes/destroy/confirm', async (req, res, next) => {
    await notes.destroy(req.body.notekey);
    res.redirect('/');
});
```

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter05/images/mvc-redirect-main.png" style="max-width:400px;max-height:400px">