# MongoDB 소개 및 실습

## MongoDB에 대하여

### MongoDB란 

MongoDB는 오픈소스, 크로스플랫폼, 도큐먼트 지향 데이터베이스 시스템이다.  
NoSQL 데이터베이스로 분류되는 MongoDB는 JSON과 같은 동적 스키마형 도큐먼트들 선호함에 따라 전통적인 테이블 기반 관계형 데이터베이스 구조의 사용을 삼간다.  
이로써 특정한 종류의 애플리케이션을 더 쉽고 더 빠르게 데이터 통합을 가능케 한다.

<br>


### NoSQL(Non Relational Operation Database SQL) 이란

단어의 정의 그대로 관계형 데이터베이스가 아닌 SQL로 직역할 수 있습니다.  

일반적인 RDBMS(관계형 데이터베이스)에서는 데이터의 중복을 제거하고 무결성을 보장하기 위해 테이블 정규화를 진행하게 됩니다.
정규화를 진행하면 자연스럽게 여러게의 테이블로 나누어지게 되고 이는 과도한 Join으로 이어져 성능 저하를 일으킬 수 있습니다.  
그래서 RDBMS의 경우는 성능 저하를 극복하기위해 Scale Up의 형태로 업그레이드를 진행합니다.   

하지만 NoSQL은 RDBMS의 테이블과 같은 정규화된 테이터 대신 유연성 있는 데이터 형태를 이용하여 데이터를 관리 합니다.  
NoSQL의 경우도 대량의 데이터의 읽기/쓰기는 성능 저하를 읽으킬수 있고 NoSQL은 Scale Out의 형태로 업그레이드를 진행합니다.  

여러 NoSQL 중 MongoDB는 Document라는 이름으로 데이터를 관리합니다.  

<br>

### MongoDB의 Document 란

먼저 익숙한 RDBMS에서는 Tuple, Row와 비슷한 개념입니다.   
MongoDB에서는 JSON이라는 형태의 데이터 오브젝트 형태로 데이터를 관리하고 이를 Document라고 부릅니다.  
JSON이란 간단하게 말하면 key : value 형태의 데이터 오브젝트를 의미 합니다.  
아래는 실제 MongoDB의 Document의 예 입니다.


```json
{
    _id: <ObjectId>,     //숫자문자의 결합 자체부여되는 PK와 같은 존재
    username: "user1",
    name: "홍길동",
    contact: {
        phone: "010-1234-1234",
        email: "abc@gmail.com"
    },
    age: 20
}
```

위에서 보는 JSON 형태처럼 username, contact, age, phone 등과 같은 키와 그에 해당하는 value로 이루어진 데이터를 관리하게 됩니다.   
contact에는 또다른 Document인 phone, email 키로 구성되는 중첩되는 Embedded Document로도 구성이 가능 합니다.  
RDBMS에서는 테이블에 컬럼이라는 단위로 정의된 컬럼에 해당하는 데이터만 저장할수 있지만  Document는 Dynamic Schema로 서로 다른 Document들은 꼭 같은 key(컬럼)을 가지고 있지 않아도 유여하게 저장이 가능합니다.  

<br>

### MongoDB의 Document이외 개념 비교

MongoDB에는 RDBMS와 비슷한 개념이지만 다른용어로 사용되는 개념들이 많이 있습니다.

|RDBMS|MongoDB|
|-----|-------|
|Database|Database|
|Table|Collection|
|Row|Document|
|Column|Key:Value|
|TableJoin|Embedded Document|
|Primary Key|_id|

예를 들어 위 Document 형태가 user를 의미한다면 User Collection이라는 것이 MongoDB에 존재하게 됩니다.
그리고 기존 RDBMS에서 정규화되어 별도의 테이블에 구성되었을 contact 정보는 하나의 document 내 Embedded Document 형태로 존재하게 됩니다.  


## MongoDB 설치하기

MongoDB를 어떤 OS 및 버전에 설치하는지에 따라 설치 방법이 조금씩 다릅니다.  
아래의 설치방법은 리눅스 환경의 **Debian 10 (buster)** 에서 설치하는 방법 입니다.  

<br>

먼저 설치에 필요한 패키지들을 설치 합니다.  

```bash
sudo apt install dirmngr gnupg apt-transport-https software-properties-common ca-certificates curl
```

<br>

MongoDB에서 설치파일을 다운 받기 위해 MongoDB에서 제공하는 GPG 공개키를 apt 패키지 매니저에 등록합니다.  
```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```

<br>

키 등록후 패키지 매니저의 repository에 mongodb 영역을 추가 합니다
```bash
sudo add-apt-repository 'deb https://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main'
```

<br>

apt 패키지 매니저 명령어를 통해 mongodb-org 를 설치 합니다.  

```bash
sudo apt update
sudo apt install mongodb-org
```

<br>

설치 후 MongoDB 서비스를 시작하고 시스템 Boot시 자동으로 시작되도록 등록 합니다.  
```bash
sudo systemctl enable mongod --now
```
<br>


MongoDB가 제대로 설치되고 서비스가 시작 되었는지 확인하기 위해 아래의 코드를 입력 합니다.  
```bash
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```
<br>


설치 및 서비스가 정상적으로 진행되었으면 아래와 같은 출력을 확인할 수 있습니다.  
"ok"라는 키에 1 값이 출력 된다면 정상적으로 설치 및 서비스가 시작 된 것입니다. 
```bash
MongoDB shell version v4.2.1
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("09f11c53-605f-44ad-abec-ec5801bb6b06") }
MongoDB server version: 4.2.1
{
	"authInfo" : {
		"authenticatedUsers" : [ ],
		"authenticatedUserRoles" : [ ]
	},
	"ok" : 1
}
```

<br>

## MongoDB 실습

MongoDB 실습은 Node.js의 mongodb 라는 모듈을 이용하여 간단하게 데이터의 CRUD를 진행해 보겠습니다.  
Node.js는 설치되어 있다고 가정하고 진행합니다.  

<br>

먼저 node의 새로운 프로젝트를 만들 빈 디렉토리를 생성합니다. 

```bash
mkdir mongodb-tutorial
cd mongodb-tutorial
```
<br>

원하는 디렉토리에 접근 후 init 명령어를 통해 새로운 프로젝트를 생성합니다.  

```bash
npm init
```
<br>

다음은 실습에 필요한 mongodb 모듈 의존성을 추가 하겠습니다. (설치)
```bash
npm install mongodb --save
```
<br>

실습 전 mongodb의 data파일이 저장된 경로를 지정후 mongodb 서비스를 시작합니다.
```bash
mongod --dbpath=data
```
<br>

### MongoDB Dababase 생성

RDBMS 에서 테이블 생성전 database 영역을 생성하는것과 마찬가지로 실습을 위한 database를 먼저 만들겠습니다. 


**createDatabase.js**
```javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// 접속할 mongodb URL 정보
const url = 'mongodb://localhost:27017';
 
// Database 이름
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});
```

<br>

js 파일을 만들고 아래의 명령어로 실행 하겠습니다.  
"Connected successfully to server" 메시지가 출력 된다면 정상적으로 database를 생성한 것입니다. 

```bash 
node createDatabase.js
```
<br>


### MongoDB Document Insert

Document를 insert할 database를 만들었으면 Document를 Insert 해보겠습니다.

**documentInsert.js**
```javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
 
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Document를 Insert 할 Collection 지정
  const collection = db.collection('users');

  collection.insert(
    {   username: "user1",
    name: "Mr Hong",
    contact: {
        phone: "010-1234-1234",
        email: "abc@gmail.com"
    },
    age: 20
    }
    , function(err, result) {
    assert.equal(err, null);
    console.log("Inserted");
    callback(result);
  });
}
```

<br>

### MongoDB Collection 내 모든 Document 및 필터링 후 조회

RDBMS의 select * from table; 에 해당하는 Collection 내 모든 document를 조회 하겠습니다.  

```javascript
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
 
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  const db = client.db(dbName);
 
  findDocuments(db, function() {
      client.close();
  });
});

const findDocuments = function(db, callback) {
  
  const collection = db.collection('users');
  
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log(docs)
    callback(docs);
  });
}
```
<br>

위의 findDocuments 함수는 collection 내 모든 document를 조회하는 함수이고 특정 조건을 이용하여 검색하고 싶은 경우는 find메소드의 파라미터에 검색하고자 하는 key: value를 아래와 같이 입력하면 됩니다.  

```javascript
const findDocuments = function(db, callback) {
  
  const collection = db.collection('users');
  
  collection.find({username: user1}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log(docs)
    callback(docs);
  });
}
```
<br>

### MongoDB Document 업데이트

RDBMS에서 update 구문에서 where 절로 업데이트 할 row를 찾는 것처럼 MongoDB는 updateOne 메서드를 이용하여 { 조건문, 업데이트문 } 을 통해 document를 업데이트 할 수 있습니다.

**documentUpdate.js**
```javascript
const updateDocument = function(db, callback) {
  
  const collection = db.collection('users');
  
  collection.updateOne({ age : 20 }
    , { $set: { username : "user" } }, function(err, result) {
    assert.equal(err, null);
    console.log("Updated");
    callback(result);
  });
}
```
<br>

### MongoDB Document 삭제

RDBMS에서 delete 구문에서 where 절로 업데이트 할 row를 찾는 것처럼 MongoDB는 deleteOne 메서드를 이용하여 { 조건문 } 을 통해 document를 업데이트 할 수 있습니다.

**documentUpdate.js**
```javascript
const removeDocument = function(db, callback) {
  
  const collection = db.collection('documents');
  
  collection.deleteOne({ username : "user" }, function(err, result) {
    assert.equal(err, null);
   
    console.log("Removed");
    callback(result);
  });
}
```
<br>







