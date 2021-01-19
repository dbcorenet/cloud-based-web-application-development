# SASS 소개

## CSS
CSS는 HTML로 만든 웹페이지를 보기 좋게 디자인 하는 역할을 하는 언어입니다.
`<h1>SASS 란?</h1>` 와 같이 정보를 전달하는 코드는 HTML입니다.
이러한 HTML을 보기 좋게 디자인 하기위해서 style안에 정의된 언어가 CSS입니다.

아래 예제는 h1 태그의 텍스트를 폰트크기를 20px로 지정하고 색깔을 빨간색으로 꾸며주고 있습니다.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
        <style type="text/css">
            h1 {
                color: red;
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <h1>SASS 란?</h1>
        <p>sass는 css의 확장 언어입니다.</p>
    </body>
</html>
```





## CSS의 확장 언어 SASS

웹페이지의 구조가 복잡할수록 CSS 파일도 복잡해집니다.
CSS 파일이 복잡해지면 코드의 유지보수가 어렵고 가독성이 떨어지며 중복되는 코드가 많아집니다.

CSS 코드를 효율적으로 관리할 수 있도록 CSS의 기능을 확장 언어가 SASS입니다.
SASS는 CSS에서는 지원하지 않는 변수, 상속, 함수 등을 사용할 수 있습니다.


## SASS와 SCSS
SASS의 기본 문법은 들여쓰기로 중첩을 표현하며 세미콜론을 사용하지 않는 형태였습니다.

*SASS*
```sass
h1
    color: red
    font-size: 20px
```

위와 같은 문법을 사용하다보니 기존의 CSS를 사용하던 개발자들이 혼란스러움을 겪게 됩니다.
또한 기존에 개발되었던 CSS를 SASS로 바꾸는데 어려움을 겪었습니다.

*기존의 CSS*
```css
h1 {
    color: red;
    font-size: 20px;
}
```

SASS의 불편함을 보완하기 위해서 이후의 SASS 버전은 SCSS로 기본 문법이 변경됩니다.

### SCSS
2010년 5월 버전 3으로 업그레이드 하면서 갖춰진 문법 체계입니다.
Sassy CSS를 함축하여 나타낸 표현으로 SCSS를 영어 그대로 번역하면 '멋진 CSS' 라는 의미를 가집니다.
SCSS는 CSS와 동일한 문법으로 SASS에서 지원하는 특별한 기능들을 사용할 수 있게 된 언어입니다.

*SCSS*
```sass
$color: red;
h1 {
    color: $color;
    font-size: 20px;
}
```

해당 문서에서는 CSS와 호환이 가능한 **SCSS문법**을 기준으로 실습을 진행합니다.


# SASS 설치

express로 생성된 프로젝트는 css로 작성된 스타일 파일을 확인 할 수 있습니다.

## node-sass
nodeJS 환경에서는 node-sass를 사용하여 sass 파일을 컴파일 할 수 있습니다.
npm 명령어를 사용하여 node-sass를 설치 할 수 있습니다.

```
$ sudo npm install -g node-sass
```

우분투 환경에서 실습할 때 보안문제로 node-sass가 설치되지 않는 경우가 있습니다.
이러한 경우 아래처럼 보안을 무시하는 옵션을 추가하여 설치를 진행합니다.

```
$ sudo npm install --unsafe-perm -g node-sass
```

node-sass 버전을 확인하여 정상적으로 설치되었는지 확인합니다.
**설치가 정상적으로 된 후 확인이 되지 않으면 lightsail을 재시작 합니다.**

```
$ node-sass -v
```


### 컴파일

SASS로 작성된 파일을 HTML에 삽입하기 전 CSS파일로 변환하는 컴파일 작업이 필요합니다.
설치한 SASS로 컴파일 작업이 가능합니다.
컴파일을 하는 과정에서 아래의 4가지 옵션을 선택할 수 있습니다.

- nested : sass 형식과 유사하에 중첩된 css 파일이 생성. 기본값.
- expanded : 표준 스타일의 css 파일이 생성.
- compact : 여러 선택자를 한 줄로 나타내는 스타일의 css 파일이 생성.
- compressed : 빈 공간이 없는 압축된 스타일의 css파일이 생성.


```
$ node-sass --output-style [nested/expanded/compact/compressed] scss파일path --output 변환된css파일path
```

SASS의 --watch 옵션을 사용하면 하나의 파일이 변경될 때마다 CSS파일을 자동으로 변환하도록 동작합니다.

```
$ node-sass --wath scss파일path --output 변환된css파일path
```


### 컴파일 실습

우분투에서 scss파일을 생성하여 스타일 코드를 작성해봅니다.

```
$ sudo vi compile.scss
```

*compile.scss*
```sass
$color: red;
h1 {
  color: $color;
  font-size: 20px;
}
```

파일을 작성한 후 옵션을 사용하여 컴파일을 해봅니다.

```
$ sudo node-sass --output-style nested ./compile.scss ./compile_nested.css
```

컴파일 한 compile_nested.css 파일을 열어보면 아래처럼 CSS 문법으로 변환된 것을 확인 할 수 있습니다.

```css
h1 {
    color: red;
    font-size: 20px; }
```

이번엔 압축된 형태인 compressed 옵션을 사용하여 compile.scss 파일을 컴파일 해봅니다.

```
$  sudo node-sass --output-style compressed ./compile.scss ./compile_compressed.css

```

컴파일 한 compile_compressed.css 파일을 열어보면 아래처럼 CSS 코드가 빈 칸 없이 압축된 형태로 변환된 것을 확인 할 수 있습니다.

```css
h1{color:red;font-size:20px}
```

node-sass의 --watch 옵션을 사용하면 파일이 변경될 때마다 자동으로 감지하여 컴파일됩니다.

```
$ sudo node-sass --watch --output-style compressed ./compile.scss ./compile_compressed.css

```

--watch 옵션을 추가하여 명령어를 실행하면 커맨드가 완료되지 않고 실행이 유지됩니다.
node-sass 를 실행한 상태에서 compile.scss를 변경하면 이를 감지하여 컴파일 됩니다.
변경을 감지하여 컴파일이 수행 될 때마다 로그를 출력합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter03/images/sass-compile-watch-example.png" style="max-width:350px;max-height:400px">


# 변수

## 기본사용법
`$변수명: 값;` 형태로 변수를 선언할 수 있습니다.
```sass
$main-width: 100%;
```

## 전역변수와 지역변수
선택자의 내부가 아닌 외부에 분리하여 선언한 변수는 전역변수로 사용 할 수 있습니다.
선택자의 내부에 선언한 변수는 해당 블럭 안에서만 사용할 수 있는 지역변수입니다.
하지만 선택자 내부에 선언된 변수도 `!global`을 지정하여 전역변수로 사용할 수 있습니다.

아래의 예제를 직접 실행하여 전역변수와 지역변수 처리를 확인합니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/variables/variables.scss

$main-width:100%;
#main {
  $width: 10px !global;
  border: $width solid red;
  $main_color:#fff;
  background-color:$main-color;
  width: $main-width;
}
#sidebar {
  width: $width*50;
}
#content {
  $width:500px;
  width: $width;
}
#sidebar2 {
   width: ($main_width/10);
}
```

*CSS*
```css
#main {
  border: 10px solid red;
  background-color: #fff;
  width: 100%;
}

#sidebar {
  width: 500px;
}

#content {
  width: 500px;
}

#sidebar2 {
  width: 10%;
}
```


`$main-width` : 선택자 외부에 선언. 전역변수.
`$width: 10px !global;` : 내부에 선언된 변수를 전역번수로 지정.


### 데이터 타입

- 숫자 : 1, 2, 13, 10px
- 문자열 : "foo", 'bar', baz
- 색상값 : blue, #04a3f9, rgba(255, 0, 0, 0.5)
- boolean : true, false
- 널값 : nulls
- 수치값 : 1.5em 1em 0 2em, Helvetica, Arial, sans-serif
- 맵스 : value1, key2: value2

변수로 다양한 데이터 타입을 선언하여 속성을 정의하는데 사용할 수 있습니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/datatype/datatype.scss

$name: foo;
$attr: border;
$color:#ff0000;
$value :10px 2px 5px 10px;
$font:"lucida Grande", sans-serif;

p.#{$name} {
  #{$attr}-color: $color;
  margin:$value;
  font-family: $font;
}
```

*CSS*
```css
p.foo {
  border-color: #ff0000;
  margin: 10px 2px 5px 10px;
  font-family: "lucida Grande", sans-serif;
}
```



# 연산
다른 프로그래밍 언어에서 사용하는 모든 연산자들을 사용할 수 있습니다.
동일하거나 동일하지 않거나를 의미하는 `==`와 `!=`기호도 사용가능합니다.

## 숫자 연산
연산에서는 사칙연산 기호를 전부 사용할 수 있는데, 가장 주의해야 할 점은 나눗셈을 의미하는 '/' 기호입니다.

```sass
font: 10px/8px;
```

위의 코드는 얼핏 보기에는 10px 나누기 8px로 보이지만 SCSS에서의 의미를 아래와 같습니다.
```sass
font-size : 10px
line-height : 8px
```

font 속성을 제외하고 일반적인 숫자 단위가 들어가는 부분에 사용할 때 일반적인 나눗셈을 의미합니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/operations/operation.scss

.box1 {
  width: 100px/2;
  height: (500px/2);
  margin-left: 5px + 8px/2px;
}
```

*CSS*
```css
.box1 {
    width : 50px;
    height : 250px;
    margin-left : 9px;
}
```

## 문자열 연산
문자열 연산은 두 개의 문자열을 결합하는 것을 의미합니다. `+` 를 사용하여 여러 개의 문자열을 결합하는 연산을 할 수 있습니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/operations/operations.scss

p:before {
    content : "FOO" + Bar;
    font-family : sans- + "serif";
}
```

*CSS*
```css
p:before {
    content : "FOO Bar";
    font-family : sans-serif;
}
```


## 변수 삽입

SCSS에서 선언한 변수를 속성의 스타일 지정 값 일부에 삽입 시키고 싶은 경우가 있습니다.
변수를 중간에 삽입할 때는 `#{변수명}` 을 사용합니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/operations/operations.scss

p {
    $font-size : 12px;
    $line-heigt : 30px;
    font : #{$font-size}/#{$line-height};
}
```

*CSS*
```css
p {
    font : 12px/30px;
}
```


# 중첩
HTML의 요소들은 중첩되고 계층적인 구조가 명확합니다. 반면에 CSS는 그렇지 않습니다.
SCSS를 사용하면 HTML과 동일하게 계층적 구조를 만들어서 CSS 선택자를 중첩시켜서 사용할 수 있습니다.
지나치게 중첩시켜서 스타일을 선언하는 경우 어려울 수 있으므로 주의합니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/nested/nested.scss

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```


*CSS*
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

*참조 : [examples/nested/nested.scss](https://git.dbcore.net/hibrainnet/tutorial-nodejs-web-development/tree/master/ch03/sass/examples/nested/nested.scss)


# @규칙
SCSS는 CSS3에서 사용할 수 있는 모든 `@` 문법을 지원합니다.
기존의 CSS3에서 지원하던 것과 추가적으로 `@`를 이용하여 상속을 지원합니다.

## @import
SASS는 SCSS과 SASS 파일을 가져와 사용할 수 있는 `@import`를 지원합니다.
`@import`를 시용하여 다른 SASS 파일을 불러오게 되는데 단일 CSS 파일로 컴파일 됩니다.
`@import`한 파일 안의 스타일은 물론 변수, Mixin을 모두 사용 할 수 있습니다.

### 기본 사용법

`@import`를 선언한 후 `""` 사이에 주입할 파일의 경로를 입력합니다.

```sass
@import "foo.scss";

@import "foo";
```

파일 뿐만 아니라 url 도 `@import`에 선언하여 주입할 수 있습니다.

*SCSS*
```sass
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```

*CSS*
```css
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

### 중첩 @import

`@import`는 파일 전체를 불러오는 방법도 있지만, 중첩을 이용해서 해당 선택자 부분에만 해당 속성을 불러오는 경우에도 사용할 수 있습니다.


*SCSS*
```sass
// filename: /chapter03/examples/sass/import/_box.scss

.box1 {
    margin: 0;
    padding: 0;
}
```

*SCSS*
```sass
// filename: /chapter03/examples/sass/import/import.scss

.boxmodel1 {
    @import "box";
    font-size: 12px;
}
```


*CSS*
```css
.boxmodel {
    font-size: 12px;
}
.boxmodel .box {
    margin: 0;
    padding: 0;
}
```


`@import`를 위의 방법처럼 중첩하여 속성을 상속하는 방식으로도 사용할 수 있지만 `@mixin` 구문에서는 사용할 수가 없습니다.
`@import`문의 경우 외부 파일을 불러오는 용도로 가장 많이 사용한다는 점을 참고합니다.

*참조 : [examples/import/import.scss](https://git.dbcore.net/hibrainnet/tutorial-nodejs-web-development/tree/master/ch03/sass/examples/import/import.scss)


## @extend
`@extend`는 확장을 의미하며 기존에 설정되어 있는 속성을 재사용하면서 다른 선택자의 기능을 확장해줍니다.

아래의 이미지는 하나의 페이지안에서 3개의 다른 스타일을 가지도록 구성되어 있습니다.
각 구역의 배경이미지는 모두 다르며 제목 부분과 글자 부분도 조금씩 구성이 변경되어 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter03/images/sass-extend-example.png" style="max-width:350px;max-height:400px">

`@extend`를 이용하여 중복되는 CSS를 재사용하는 예제를 보도록 합니다.

```html
// filename: /chapter03/examples/sass/mixin/mixin.scss

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Extend sample</title>
  <link href="extend.css" rel="stylesheet">
</head>
<body>
<div class="box1">
  <h1>sample</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed ante dictum, scelerisque felis mattis, hendrerit mauris. Duis luctus felis ac lacus ultrices, in placerat lorem gravida. Vivamus tempus nisl sit amet justo bibendum egestas. </p>
</div>
<div class="box2">
  <h1>sample</h1>
  <p>Donec aliquet, magna quis lobortis lacinia, nunc justo molestie dui, luctus interdum ex nibh ut ex. Duis fermentum sapien aliquam commodo iaculis. </p>
</div>
<div class="box3">
  <h1>sample</h1>
  <p>Etiam sapien dolor, cursus ac scelerisque sed, ornare eu elit. Ut ex urna, tincidunt in lectus nec, finibus aliquet felis. Nunc et ante vel erat pharetra fringilla.</p>
</div>

</body>
</html>

```

```scss
body {
  margin:0;
  padding:0;
}
.box1 {
  height: 300px;
  text-align: center;
  padding-top: 50px;
  color:#fff;
  background: {
    image:url('images/pic1.jpg');
    repeat:no-repeat;
    size:cover;
    position: center;
  }
  h1 {
    font-size: 65px;
    text-transform: capitalize;
  }
  p{
    width: 800px;
    margin:20px auto;
  }
}

.box2 {
  @extend .box1;
  padding-top:70px;
  h1 {
    font-size: 45px;
  }
  background-image:url('images/pic2.jpg');
  p {
    width: 500px;
  }
}

.box3 {
  @extend .box2;
  h1 {
    font-size: 80px;
  }
  background-image:url('images/pic3.jpg');
  text-shadow: 2px 2px 5px #000;
}
```



# Mixin
Mixin은 SASS에서 가장 중요한 기능 중 하나입니다. extend와 비슷하지만 변수를 받아서 함수와 비슷한 모양으로 선언하여 사용이 가능합니다.

## 변수를 선언하지 않은 Mixin

Mixin은 `@mixin`을 이용하여 정의하며 mixin으로 정의한 부분을 CSS 선택자 내부에 `@include`를 이용하여 호출 할 수 있습니다.
아래 예제에서 SCSS 코드를 보면 선택자 `.boxsample`에서 `@mixin`에서 정의한 fontbold를 `@include`를 이용하여 호출하여 반복되는 구분을 최소화한 것을 볼 수 있습니다.

*SCSS*
```sass

// filename: /chapter03/examples/sass/mixin/mixin.scss

@mixin boldtext {
    font: {
        family: 'Malgun Gothic', sans-serif;
        weight: bold;
        size: 42px;
    }
    color: red;
}

.boxsample {
    @include boldtext;
}
```

*CSS*
```css
.boxsample {
    font-family: 'Malgun Gothic', sans-serif;
    font-weight: bold;
    font-size: 42px;
    color: red;
}
```

## 변수를 선언한 Mixin

위에서 본 동일한 예제를 변수를 사용해서 처리한 예제를 아래와 같습니다.
변수를 처리하기 위해서는 Mixin으로 정의한 부분에 변수명을 설정한 후 해당 변수를 CSS 속성에 적용해주면 됩니다.
Mixin을 사용할 떄 중요한 점은 `@include` 부분에 적용한 변수값의 위치를 변경해서는 안된다는 것입니다.
변수값의 위치를 변경하게 되면, 위치를 기준으로 변수를 식별하는 mixin에서 잘못된 값이 전달될 수 있기 때문에 주의해야 합니다.

*SCSS*
```sass
// filename: /chapter03/examples/sass/mixin/mixin.scss

@mixin boldtext($size, $color) {
    font: {
        family: 'Malgun Gothic', sans-serif;
        weight: bold;
        size: $size;
    }
    color: $color;
}

.boxsample3 {
    @include boldtext(24px, #000);
}
```

*CSS*
```css
.boxsample3 {
    font-family: 'Malgun Gothic', sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: #000;
}
```


# SASS 컴파일
SASS문법으로 작성된 파일은 CSS 파일로 컴파일 한 후 웹페이지에 삽입하여 사용할 수 있습니다.
단일 SASS 파일로 스타일을 정의할 경우 컴파일은 문제가 되지 않습니다.
하지만 대부분의 프로젝트 구조는 여러 개의 스타일 파일을 정의하여 사용합니다.

프로젝트 안에 여러 개로 분리된 파일을 한 번에 컴파일하거나 자동으로 컴파일하여 사용할 수 있는 방법에 대해서 학습합니다.

## node-sass-middleware
> 여태까지 실습에서는 sass를 설치하여 커맨드 라인에서 cli로 직접 sass파일을 컴파일하여 사용했습니다.
> express 프로젝트에서는 웹페이지에 접속 할 때마다 저절로 sass파일을 css로 컴파일 할 수 있습니다.

### node-sass-middleware 설정
> nodeJS에서는 express라는 프레임워크를 사용할 수 있는데 그 안에서 middleware로 sass를 컴파일 하도록 설정이 가능합니다.

[node-sass-middleware](https://www.npmjs.com/package/node-sass-middleware)는 express 기반의 http 서버가 동작할 때 자동으로 scss나 sass파일을 css로 컴파일 해줍니다.

*설치*
```
$ npm install node-sass-middleware

```

express 프로젝트를 생성한 후, app.js에서 아래의 설정을 확인합니다.
프로젝트 안의 public 디렉토리에 있는 sass파일을 같은 디렉토리에 컴파일 하여 사용하겠다는 설정입니다.

*app.js*
```javascript

var sassMiddleware = require('node-sass-middleware'); // 제일 상단에 추가

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// sass 관련 설정 추가
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));

```

CSS 파일을 삭제 한 후 SCSS 파일로 바꿔줍니다.

*/Projects/Repositories/express/notes/public/stylesheets/style.scss*
```
$all-font:14px;

body {
  padding: 50px;
  font: $all-font "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}

```

express 서버를 재시작 한 후 웹에 접속하면 SCSS 파일이 CSS 파일로 변환되어 웹에 삽입 된 것을 확인 할 수 있습니다.



