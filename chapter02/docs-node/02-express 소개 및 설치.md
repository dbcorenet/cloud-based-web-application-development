# Ch02 - Express.js 소개 및 설치

## Express.js 소개

Express.js는 **Node.js 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹프레임워크**입니다.

> 웹프레임워크?
>
> 웹 애플리케이션 개발에 필요한 기능을 구축하고 만들 수 있도록 해주는 프로그램, 웹 페이지를 개발하는 과정에서 겪는 어려움을 줄이는 것이 목적

Node.js로 웹 서버에 필요한 기능(라우팅, 세션관리 등)을 하나하나 만들 수도 있지만 Express.js 웹프레임워크를 사용하면 패키지를 설치하고 미들웨어를 통해 간편하게 웹서버를 구축할 수 있습니다.

Express.js 웹프레임워크를 사용하더라도 웹 서버에 필요한 패키지를 하나하나 설치하거나 프로젝트 구조를 정의해줘야 합니다. 

그러나 Express-generator 이라는 패키지를 사용하면 Express.js 웹프레임워크에 필요한 package.json과 기본 구조가 정의되어 있기 때문에 쉽게 사용할 수 있습니다. 




## Notes 애플리케이션 생성

Express-generator을 사용하기 위해 `Express-generator 패키지`를 설치하고 Express-generator으로 간단한 Notes 애플리케이션을 생성해보겠습니다. 

먼저 notes 디렉토리를 생성한다음 notes 디렉토리로 이동합니다. 

```
$ mkdir notes
$ cd notes
```

notes디렉토리에서 Express-generator 패키지를 설치하고 express 명령어를 통해 애플리케이션을 생성합니다. 여기서 --view=hbs은 view 템플릿 엔진을 설정하는 옵션을 의미합니다. 

```
$ npm install express-generator@4.x
$ ./node_modules/.bin/express --view=hbs --git .
destination is not empty, continue? [y/N] y
```

애플리케이션 생성 후 디렉토리를 살펴보겠습니다. 

```
cloud-based-web-application-development/chapter02/examples/notes$ ls -al
total 60
drwxrwxr-x  7 ubuntu ubuntu  4096 Jan 12 08:01 .
drwxrwxr-x  3 ubuntu ubuntu  4096 Jan 12 08:00 ..
-rw-rw-r--  1 ubuntu ubuntu   914 Jan 12 08:01 .gitignore
-rw-rw-r--  1 ubuntu ubuntu  1074 Jan 12 08:01 app.js
drwxr-xr-x  2 ubuntu ubuntu  4096 Jan 12 08:01 bin
drwxrwxr-x 65 ubuntu ubuntu  4096 Jan 12 08:01 node_modules
-rw-rw-r--  1 ubuntu ubuntu 17658 Jan 12 08:01 package-lock.json
-rw-rw-r--  1 ubuntu ubuntu   291 Jan 12 08:01 package.json
drwxr-xr-x  5 ubuntu ubuntu  4096 Jan 12 08:01 public
drwxr-xr-x  2 ubuntu ubuntu  4096 Jan 12 08:01 routes
drwxr-xr-x  2 ubuntu ubuntu  4096 Jan 12 08:01 views
```

package.json에 정의되어 있는 프로젝트의 필요한 의존 패키지들을 설치해줍니다.

```
$npm install
```



## Express 구조 살펴보기

Express-generator 으로 생성된 프로젝트의 구조에 대해 간단하게 살펴보겠습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch2-express.png)

* Bin/www
  * http모듈에 express 모듈을 연결하며, 포트를 지정할 수 있는 파일로 서버를 실행하는 스크립트를 의미합니다. 

* public
  * 리소스 파일을 모아놓은 폴더로, 리소스에는 images, javascripts, stylesheets 등이 있습니다.
* routes
  * 라우터를 관리하는 폴더로, 사용자가 브라우저에서 url로 요청하게 되면 서버에서 어떤 작업을 처리해서 응답할지 라우터를 통하여 설정해주게 됩니다.  

routes/index.js 파일을 살펴보게 되면, 기본적으로 사용자가 브라우저를 통해 / 경로로 접근하게 되는경우, views 경로에 있는 index.hbs 파일을 브라우저로 렌더링되게 작업이 설정되어 있는 것을 확인 할 수 있습니다. 

```
var express = require('express'); // express 패키지 호출
var router = express.Router(); // router 객체 생성

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

```

* views
  * view파일들을 관리하는 폴더로, 사용자들이 url로 요청하게 되면 해당 디렉토리에 이는 파일을 사용해서 보여주게 됩니다. 
* App.js
  * 실질적인 서버 역할을 하는 파일로, 여러가지 미들웨어를 관리할 수 있습니다. 
* Package.json
  * 프로젝트 이름, 버전, 의존 패키지 리스트등의 정보를 담고 있는 파일입니다. 

Package.json 파일을 열어보면, scripts 부분에 start속성이 있는 것을 확인할 수 있습니다. 속성 값으로 "node ./bin/www"가 적혀있는데 이는 npm start 명령어로 서버를 구동시키는 스크립트인 www를 실행시켜준다는 것을 의미합니다. 

```
"scripts": {
    "start": "node ./bin/www"
  },
```

서버를 실행시키기 위해 프로젝트 루트 디렉토리에서 npm start 명령어를 실행합니다. 

```
$npm start
```

http://localhost:3000/에 접속했을때 아래 페이지가 나타나면 정상적으로 애플리케이션이 실행된 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch2-start.png)



## 코드 수정 시 자동 서버 재시작 설정

Express 로 만든 웹 프로젝트를 수정 할 때마다 서버를 재시작하는 것은 불편하고 생산성을 떨어지게 만듭니다. 그래서 코드 수정이 일어나면 자동으로 서버를 재시작하기 위해서 [Nodemon]() 을 이용하여 파일이 변경되는 이벤트를 감지하여 자동으로 서버를 재시작할 수 있도록 설정합니다.

### Nodemon 설치

`npm`을 사용하여 `nodemon`을 설치합니다. 이 때 `--save-dev` 옵션을 추가합니다. 이 옵션은 프로덕트 패키지에는 포함되지 않고 개발할 때의 의존성 패키지에 포함이 됩니다. 배포시 설치가 되지 않습니다.

```
npm install --save-dev nodemon
```

설치 후 `package.json` 파일을 확인하면 `devDependencies` 에 `nodemon` 이 설치된 것을 확인할 수 있습니다.

```
{
  "name": "notes",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "hbs": "~4.0.4",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
```



### Nodemon 으로 서버시작

`npm` 으로 설치한 Nodemon 을 사용하여 애플리케이션을 시작하려면 다음과 같이 `package.json` 파일의 scripts 에 `dev` 스크립트를 추가합니다.

```
{
  ...
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  ...
}

```

`npn` 명령어로 서버를 시작합니다. 이 때 `script` 중에 `dev` 를 이용합니다.

```
npm run dev
```

서버가 시작하면 브라우저에서  http://localhost:3000/ 주소로 웹 사이트를 확인할 수 있습니다.



콘솔 확인 결과, Nodemon 으로 어플리케이션을 실행한 것을 확인할 수 있습니다. 그리고 Nodemon 데몬이 `js`, `mjs`, `json` 파일의 변경 이벤트를 모니터링 하고 있는 것을 확인할 수 있습니다.

```
> notes@0.0.0 dev /home/ubuntu/cloud-based-web-application-development/chapter02/examples/notes
> nodemon ./bin/www

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./bin/www`
GET / 200 143.658 ms - 204
GET /stylesheets/style.css 200 4.964 ms - 111
GET /favicon.ico 404 4.156 ms - 1627
```

`./routes/index.js` 파일을 열어서 다음과 같이 수정합니다.

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express with Nodemon' });
});

module.exports = router;

```

코드를 수정하면 Nodemon 이 파일이 변경된 것을 감지하고 서버를 재시작합니다. 다시 브라우저를 열어서 http://localhost:3000/ 을 주소를 입력하면 수정된 코드가 반영된 것을 확인할 수 있습니다.

![](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch2-nodemon.png) 

### Nodemon 설정

Nodemon 은 기본적으로 `js`, `mjs`, `json` 파일의 변경을 감지해서 변경이 일어나면 서버를 재시작합니다. `notes` 어플리케이션은 뷰 템플릿을 [Handlebars.js](https://handlebarsjs.com/)를 사용하고 있기 때문에 `.hbs` 파일이 수정되더라도 Nodemon은 변경을 감지하지 못합니다. 그래서 Nodemon 에 설정파일을 추가하여 Nodemon 이 시작할 때 정의한 설정이 적용될 수 있도록 합니다.

워크스페이스 디렉토리에 `nodemon.json` 파일을 추가합니다. 이 파일은 Nodemon 이 실행될 때 참조하는 설정파일 입니다.

- node_modules 디렉토리는 무시
- javascript, handelbars, sass 파일은 변경 감지

```
{
  "verbose": true,
  "ignore": ["node_modules/*", "data/*"],
  "ext": "js, hbs, html, css, scss, json, mjs",
  "watch": ["app.js", "package.json", "public/*", "routes/*", "model/*", "view/*", "bin/*"]
}

```

`nodemon.json` 파일을 추가 후 `npm` 명령어로 서버를 재시작합니다.

```
npm run dev
```

Nodemon 이 실행될 때 `nodemon.json` 에 설정한 정보가 적용되어 시작된 것을 확인할 수 있습니다. 

```
ubuntu@ip-172-26-9-91:~/cloud-based-web-application-development/chapter02/examples/notes$ npm run dev 
> notes@0.0.0 dev /home/ubuntu/cloud-based-web-application-development/chapter02/examples/notes
> nodemon ./bin/www

[nodemon] 2.0.7
[nodemon] reading config ./nodemon.json
[nodemon] to restart at any time, enter `rs`
[nodemon] or send SIGHUP to 21484 to restart
[nodemon] ignoring: node_modules/**/* data/**/*
[nodemon] watching path(s): app.js package.json public/**/* routes/**/* model/**/* view/**/* bin/**/*
[nodemon] watching extensions: js,hbs,html,css,scss,json,mjs
[nodemon] starting `node ./bin/www`
[nodemon] forking
[nodemon] child pid: 21497
[nodemon] watching 6 files
```

`views/index.hbs` 파일을 열어서 다음과 같이 수정합니다.

```handlebars
<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>
with Nodemon

```

 브라우저를 열어 http://loclahost:3000/ 주소를 입력하면 서버를 다시 실행시키지 않아도  `.hbs` 코드가 수정된 것이 적용된 것을 확인할 수 있습니다.

![](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch2-nodemon-2.png)

