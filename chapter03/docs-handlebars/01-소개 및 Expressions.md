# Handlebars.js 소개 및 설치

#### Handlebars.js 소개

Handlebars.js는 간단한 **템플릿 엔진**입니다. 

> 템플릿 엔진은 서버로부터 받아온 데이터를 미리 정의된 템플릿에 넣어 클라이언트에게 html 웹 페이지를 보여주게 됩니다. 
>
> 조건문, 변수, 반복문 등을 통해 효과적으로 데이터를 가공하여 html 웹 페이지를 보여줄 수 있습니다.
>
> 템플릿 엔진에는 Handlebars.js 이외에도 EJS, Jade(Pug) 등이 있습니다.
>
> ![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/templete-engine.png)



만약 템플릿 엔진을 사용하지 않고 단순히 텍스트로만 웹 페이지를 보여주게 되면 어떻게 될까요?

예를 들어, 성춘향 학생 이름을 출력해주는 user1.html은 다음과 같습니다. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h2>이름 : 성춘향</h2>
</body>
</html>
```

성춘향 뿐만 아니라 홍길동 학생 이름을 출력하고자 한다면 user1.html은 다음과 같습니다. 

학생 수가 증가하게 되면 증가되는 학생 만큼 `<h2></h2>` 태그를 추가해주어야 합니다. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h2>이름 : 성춘향</h2>
<h2>이름 : 홍길동</h2>
</body>
</html>
```

템플릿 엔진을 사용하면 서버로부터 학생 데이터를 받아 반복문을 통해 효과적으로 보여줄 수 있게 됩니다. 학생 수가 증가하더라도 `<h2></h2>` 태그를 추가해질 필요가 없습니다. 

```handlebars
{{#each student}}
    <h2>이름 : {{name}}</h2>
{{/each}}
```

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/ch03-templete.png)



Handlebars.js의 가장 기본적인 표현식은 아래와 같습니다. 

```handlebars
<p>{{title}}</p>
```

지난시간에 생성했던 notes 프로젝트에 이어서 Handlebars.js템플릿 엔진에 대한 테스트를 진행해보겠습니다. 

 notes 프로젝트는 Express-generator을 사용하여 프로젝트를 생성할 때, --view 욥션을 사용하여 handlebars.js 템플릿 엔진을 선택했기 때문에 생성시 관련 패키지 및 모듈이 설치되어 있습니다. 그래서  별도의 설치가 필요없습니다. 

```
 ./node_modules/.bin/express --view=hbs --git .
```



# Handlebars.js Expressions

Handlebars 표현식은 템플릿의 **기본 단위**로 사용되기 때문에 Handlebars.js를 사용하기 위해 반드시 숙지하고 있어야 합니다.

##### 1)기본 사용방법

표현식의 기본 사용방법은 이중 중괄호로 변수를 묶어 사용합니다. 

nodes/views/index.hbs 파일에 firstname과 lastname을 출력하는 표현식으로 수정합니다. 

```handlebars
<p>{{firstname}} {{lastname}}</p>
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 수정합니다. 

/ GET url 요청이 들어오게 되면, index.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/', function(req, res, next) {

  let data = {
      firstname: "Yehuda",
      lastname: "Katz"
  };

  res.render('index', data);

});

```

브라우저에서 http://localhost:3000/ 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

```html
<p>Yehuda Katz</p>
```



##### 2)경로 표현식

데이터 객체가 깊이가 있는 경우  .으로 구분된 경로 표현식을 사용합니다.

nodes/views/index-path.hbs 파일에  person 객체 안에서 firstname, lastname을 찾아 출력하는 표현식을 작성합니다. 

```handlebars
<h1>{{title}}</h1>
<p>{{person.firstname}} {{person.lastname}}</p>
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일에 다음을 추가해줍니다. 

/path GET url 요청이 들어오게 되면, index-path.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/path', function(req, res, next) {

    let data = {
        title : "Hello, Handlebars",
        person: {
            firstname: "Yehuda",
            lastname: "Katz"
        }
    };


    res.render('index-path', data);
});
```

 브라우저에서 http://localhost:3000/path 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

```
Hello, Handlebars
Yehuda Katz
```



##### 3)배열 표현식

데이터 객체가 배열의 형태인경우 []가 포함된 표현식을 사용합니다. 

nodes/views/index-arr.hbs 파일에  array 배열에서 첫번째의 item과 두번째의 item을 찾아 출력하는  표현식을 작성합니다. 

```handlebars
correct: array.[0].item: {{array.[0].item}}
correct: array.[1].item: {{array.[1].item}}
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일에 다음을 추가해줍니다. 

/arr GET url 요청이 들어오게 되면, index-arr.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/arr', function(req, res, next) {

    let data = {
        array: [
            {
                item: "item1"
            },
            {
                item: "item2"
            }
        ]
    };


    res.render('index-arr', data);
});
```

  브라우저에서 http://localhost:3000/arr 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

```
correct: array.[0].item: item1 correct: array.[1].item: item2
```



##### 4)이스케이프

데이터 객체가 & < > \" ' ` =을 포함하는 경우 기본표현식을 사용하게 되면 이스케이프됩니다. 

예를 들어, 출력하는 텍스트 데이터에 `<h1>`태그가 포함되어 있는 경우 태그로 인식하는 것이 아니라 문자열로 인식하여 문자로 출력됩니다. 

이스케이프 되는 것을 원하지 않는다면 {{{ }}} 표현식을 사용하면 됩니다. 

nodes/views/index-escaping.hbs 파일에 raw 및 escaped를 출력하는 표현식을 작성합니다. 

```handlebars
raw: {{{specialChars}}} 
<br>
html-escaped: {{specialChars}}
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일에 다음을 추가해줍니다. 

/escaping GET url 요청이 들어오게 되면, index-escaping.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/escaping', function(req, res, next) {

    let data = {
        specialChars: "& < > \" ' ` = <h1>escaping</h1>"
    };


    res.render('index-escaping', data);
});
```

 브라우저에서 http://localhost:3000/escaping 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

```html
    raw: & < > " ' ` = <h1>escaping</h1> 
    <br>
   html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D; &lt;h1&gt;escaping&lt;/h1&gt;
```

![img](http://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/escaping-result.png)

##### 5)주석

Handlebars.js에서 주석을 사용하는 방법은 다음과 같습니다.  표현식을 포함한 구문을 주석처리하기 위해서는  {{!-- }} 구문을 사용해야 합니다.  의견을 html에 출력하기 위해서는 `<!--  -->` 구문을 사용해야 합니다. 

notes/views/index-comments.hbs 파일에 주석을 출력하는 표현식을 작성합니다. 

```handlebars
{{! This comment will not show up in the output}}
<!-- This comment will show up as HTML-comment -->
{{!-- This comment may contain mustaches like }} --}}
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일에 다음을 추가해줍니다. 

/comments GET url 요청이 들어오게 되면, index-comments.hbs 파일을 렌더링해줍니다. 

```js
router.get('/comments', function(req, res, next) {

    let data = {
    };


    res.render('index-comments', data);
});
```

브라우저에서 http://localhost:3000/comments 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

> 주석은 브라우저에서 출력이 안되기 때문에 개발자도구를 통해 확인 할 수 있습니다. 

```html
  <!-- This comment will show up as HTML-comment -->
```




