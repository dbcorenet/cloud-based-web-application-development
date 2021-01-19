# Ch06 - HTML5 주요태그

이번 시간에는 HTML5의 주요태그(table, form)에 대해 알아보겠습니다. 

### Table

html 문서에 테이블을 표현하는 태그로,  표를 만들거나 웹 사이트의 구조를 잡을때도 사용합니다.

Table 태그와 사용 될 수 있는 태그들은 다음과 같습니다. 

- `<table>` : table을 생성하는데 사용되는 가장 상위의 태그
- `<tr>` : 새로운 `행`을 시작하는 태그
- `<td>` : 새로운 `열`을 시작하는 태그



Table 태그를 브라우저에 렌더링해보기 위해 notes/views 디렉토리에 htmlTag.hbs 파일을 생성합니다. 

테이블의 행과 열은 `<table></table>` 안에 정의합니다. 

행을 정의하기 위해 `<tr>`태그를 사용하며, 열을 정의하기 위해 `<td> `태그를 사용합니다. 

```handlebars
<table border="2px">
        <tr>
            <td>과목</td>   <!-- 1행 1열-->
            <td>학생 1</td> <!-- 1행 2열-->
            <td>학생 2</td> <!-- 1행 3열-->
        </tr>
        <tr>
            <td>수학</td>   <!-- 2행 1열-->
            <td>80</td>     <!-- 2행 2열-->
            <td>70</td>    <!-- 2행 3열-->
        </tr>
        <tr>
            <td>과학</td>   <!-- 3행 1열-->
            <td>50</td>     <!-- 3행 2열-->
            <td>30</td>    <!-- 3행 3열-->
        </tr>
</table>
```

htmlTag.hbs 페이지를 브라우저에서 렌더링하기 위해 notes/routes/index.js 파일에 아래 코드를 추가해줍니다.

```javascript
var express = require('express');
var router = express.Router();

router.get('/htmlTag', function(req, res, next) {
    res.render('htmlTag');
});
module.exports = router;
```

/htmlTag 경로로 브라우저에서 확인 결과, 3x3 테이블이 생성 된 것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-table.png)

행 또는 열을 합치기 위해서는 `colspan`과 `rowspan` 속성을 사용할 수 있습니다. 

먼저, 열을 합치기 위해 colspan을 사용해보겠습니다. 

예를 들어, colspan="3"은 3개의 열을 합치는 것을 의미합니다.  htmlTag.hbs 파일을 아래와 같이 수정해줍니다.

```handlebars

    <table border="2px">
        <tr>
            <td>과목</td>   
            <td>학생 1</td> 
            <td>학생 2</td> 
        </tr>
        <tr>
            <td colspan="3">열 합치기</td>
        </tr>
        <tr>
            <td colspan="2">2열 합치기</td>
            <td>20</td>
        </tr>
    </table>

```

/htmlTag 경로로 브라우저에서 확인 결과, 2행과 3행의 열이 합쳐진것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-colspan.png)

다음으로 행을 합치기 위해 rowspan을 사용해보겠습니다. 

예를 들어, rowspan="3"은 3개의 행을 합치는 것을 의미합니다.  htmlTag.hbs 파일을 아래와 같이 수정해줍니다.

```handlebars
<table border="2px">
    <tr>
        <td rowspan="3">과목</td>
        <td>학생 1</td>
        <td>학생 2</td>
    </tr>
    <tr>
        <td>80</td>
        <td>70</td>
    </tr>
    <tr>
        <td>50</td>
        <td>30</td>   
    </tr>
</table>
```

/htmlTag 경로로 브라우저에서 확인 결과, 1행이 통합된 것을 확인 할 수 있습니다. 

 행 통합시, 3x3 크기를 맞춰주기 위해 나머지 행의 1열을 삭제해주었습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-rowspan.png)

Table 태그와 함께 사용할 수 있는 `속성`들은 다음과 같습니다. 

속성을 사용하면 테이블의 테두리 두께, 색깔, 테두리 넓이 등을 설정 할 수 있습니다. 

* border : 테이블의 테두리 두께 설정
* Bordercolor : 테이블의 테두리 색 설정
* Width : 테두리의 넓이 설정
* Height: 테두리의 높이 설정

아래는 테두리 두께는 2px, 테두리 색은 빨간색, 테두리의 넓이와 높이를 200px으로 설정한 예제입니다.  htmlTag.hbs 파일을 아래와 같이 수정해줍니다.

```handlebars
<table border="2px" bordercolor = "red" width = "200" height = "200">
    <tr>
        <td rowspan="3">과목</td>
        <td>학생 1</td>
        <td>학생 2</td>
    </tr>
    <tr>
        <td>80</td>
        <td>70</td>
    </tr>
    <tr>
        <td>50</td>
        <td>30</td>
    </tr>
</table>
```

/htmlTag 경로로 브라우저에서 확인 결과,  다음과 같이 출력되는 것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-border.png)

### Form

form태그는 웹페이지의 내용을 다른 웹페이지 또는 웹 서버에 전송할 때 사용됩니다. 

예를 들어, 사용자들이 회원가입을 하는 웹 페이지인경우 회원 가입을 위해 사용자가 form태그로 입력했던 정보를 웹 서버로 전송해서 데이터베이스에 저장하는 작업을 처리하게 됩니다. 

Form 태그의 중요 속성들에 대해 알아보겠습니다. 

* Action : form 내부의 데이터를 보내는 url 경로를 지정

* method : 데이터를 보내는 방식을 지정, post, get 방식

* > get방식은 서버로 부터 정보를 조회하기 위해 설계된 메소드로, 전송해야 할 데이터를 HTTP 메세지의 Body에 담지 않고 Url의 쿼리스트링을 통해 전송
  >
  > post방식은 리소스를 생성하거나 변경하기 위해 설계된 메소드로, 전송해야 할 데이터를 HTTP 메세지의 Body에 담아서 전송

* name : form을 식별하기 위한 이름 지정



htmlTag.hbs 파일에 이어서 하단에 다음과 같이 Form 태그를 추가해보겠습니다. 

```handlebars
<form action ="/login" method = "post">
    <h1>로그인</h1>
    <label>아이디</label> <input type = "text" name = "id"> <br/>
    <label>비밀번호</label> <input type = "password" name = "password"> <br/>
    <input type = "radio" name = "gender" value = "남">남
    <input type = "radio" name = "gender" value = "여">여
    <input type = "checkbox" name = "lan" value = "eng" checked = "checked"> 영국
    <input type = "checkbox" name = "lan" value = "kor"> 한국
    <input type = "checkbox" name = "lan" value = "jap" checked = "checked"> 일본
    <input type = "file" name = "프로필파일">
    <input type = "submit" value = "회원가입">
</form>
```

`<body></body>` 내부에 form 태그를 정의합니다. post전송 방식으로 /login 경로에 form 태그 내부의 데이터를 전송하게 됩니다. 

form태그 내부에는 여러개의 input 태그가 사용되었는데 type이 다른걸 확인 할 수 있습니다. 

* text : 텍스트입력시 사용
* Password : password 입력시 사용하는 형식으로 inputbox에 입력한 텍스트가 *으로 표시
* Radio : 같은 name을 가지고 있는 요소들 중 하나만 선택 가능
* Checkbox : 같은 name을 가지고 있는 요소들 중 다중 선택 가능, checked 속성으로 check 여부 결정 할 수 있음
* File : 로컬의 파일을 선택, 파일 첨부 기능
* submit : action에 정의한 경로로 input의 value 데이터를 전송

브라우저에서 확인 결과,  다음과 같이 출력되는 것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-form.png)

실제로, 서버로 input의 value값들이 전송되는지 확인하기 위해 아이디, 비밀번호, 남여 구분, 파일을 첨부하고 회원가입을 클릭해보겠습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-form-insert.png)

현재 폼이 전송되면 /login경로로 데이터를 전송하지만,  /login 경로에 대해 라우팅 설정이 되어있지 않기 때문에 `Not Found 페이지`가 출력됩니다.



 폼 제출 후 id를 보여줄수 있도록  notes/routes/index.js 파일에 아래를 추가해줍니다.  /login 경로로 post 요청이 들어오는경우, req.body를 출력하고 htmlTagLogin.hbs를 렌더링하게 됩니다. 

사용자가 form input에 입력한 값은  req.body에 담겨져서 전송됩니다.  htmlTagLogin.hbs 파일에서 입력한 id값을 출력해주기 위해 usename 이름으로 렌더링시 전달해줍니다. 

```javascript
router.post('/login', function(req, res, next) {
    console.log(req.body);
    res.render('htmlTagLogin', { "usename" : req.body.id });
});

```

notes/views 디렉토리에  htmlTagLogin.hbs을 다음과 같이 생성합니다.

```handlebars
<h1>{{usename}}님 환영합니다! </h1>
```

다시 브라우저에서 /htmlTag 로 접근하여, 아이디, 비밀번호 등 폼을 입력한 다음 회원가입 버튼을 클릭해줍니다.

클릭후, /login 경로로 아래의 화면이 출력되는 것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-post.png)

서버 콘솔창을 확인해보면 폼에 입력했던 데이터가 출력되는 것을 확인 할 수 있습니다.

```json
{ id: 'hibrain',
  password: 'hibrain',
  gender: '여',
  lan: [ 'eng', 'jap' ],
  '프로필파일': '' }

```



이번에는 form의 method를 GET으로 지정해보겠습니다. htmlTag.hbs의 form의 method를 GET으로 수정해줍니다.

```handlebars
<form action ="/login" method = "GET">
    <h1>로그인</h1>
    <label>아이디</label> <input type = "text" name = "id"> <br/>
    <label>비밀번호</label> <input type = "password" name = "password"> <br/>
    <input type = "radio" name = "gender" value = "남">남
    <input type = "radio" name = "gender" value = "여">여
    <input type = "checkbox" name = "lan" value = "eng" checked = "checked"> 영국
    <input type = "checkbox" name = "lan" value = "kor"> 한국
    <input type = "checkbox" name = "lan" value = "jap" checked = "checked"> 일본
    <input type = "file" name = "프로필파일">
    <input type = "submit" value = "회원가입">
</form>
```

 /login 경로로 POST 요청이 들어오는 경우는 정의되어있지만, GET 요청이 들어오는경우는 정의되어 있지 않기 때문에  마찬가지로 GET 요청이 들어오는 경우, req.query를 출력하고 htmlTagLogin.hbs를 렌더링하도록   notes/routes/index.js 파일에 아래를 추가해줍니다. 

GET으로 요청한경우, 사용자가 form input에 입력한 값은  req.query에 담겨져서 전송됩니다.  htmlTagLogin.hbs 파일에서 입력한 id값을 출력해주기 위해 usename 이름으로 렌더링시 전달해줍니다. 

```
router.get('/login', function(req, res, next) {
    console.log(req.query);
    res.render('htmlTagLogin', { "usename" : req.query.id });
});
```

다시 브라우저에서 /htmlTag 로 접근하여, 아이디, 비밀번호 등 폼을 입력한 다음 회원가입 버튼을 클릭해줍니다.

클릭후, /login 경로로 아래의 화면이 출력되는 것을 확인 할 수 있습니다.

url에 사용자 id, password 등의 정보가 그대로 노출되기 때문에 GET은 주로 서버에서 데이터를 가지고 오는 경우 사용합니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-get.png)

### viewport

요즘은 컴퓨터, 노트북, 태블릿, 스마트폰 등 웹 브라우저에 접근 할 수 있는 디바이스가 많습니다. 이 디바이스 별로 해상도는 다르기 때문에 화면이 작은 스마트폰에서 PC와 동일하게 표현되면 글자가 매우 작게 보이기 때문에 사용하기가 매우 불편하게 됩니다. 

이처럼 디바이스 해상도에 따라서 적절하게 대응하는 화면을 보여주기 위해 사용하는 것이 viewport 입니다. 

사용방법은 html의  `<head></head>` 태그 사이에 작성하며, 기본 형식은 다음과 같습니다.

```
<meta name="viewport" content="속성=값,..."/>
```

Content 내에 사용하는 속성은 다음과 같습니다. 

* Width: 뷰포트 너비 (값 : device-width)
* Height: 뷰포트 높이 (값 : device-height)
* User-scalable: 확대/축소 가능 여부 (값 : yes(기본값), or)
* initial-scale : 초기 확대/축소 값 (값 : 1(기본값)~10)
* minimum-scale : 최소 확대/축소 값 (값 : 0~10 / 기본값(0.25))
* maximum-scale : 최대 확대/축소 값 (값 : 0~10 / 기본값(1.6))



현재, /htmlTag 페이지를 크롬 브라우저의 개발자도구를 통해 확인해보면 다음과 같이 출력됩니다.  

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-viewport1.png)

viewport를 적용해주기 위해 notes/views/layout.hbs 파일의 `<head></head>` 에 다음을 추가해줍니다.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```



viewport를 적용하지 않았을때보다 디바이스 크기에 맞게 잘 출력되는 것을 확인 할 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch06-viewport2.png)