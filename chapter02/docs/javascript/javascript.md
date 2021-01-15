# **JavaScript에 대하여**

## **웹 표준 기술**

웹 구현하기 위한 표준 기술에는 3가지 언어가 있습니다.  

<br>

![web language](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/html-css-js.png)

- **HTML**은 제공할 웹 컨텐츠의 구조와 의미를 문단, 제목, 표, 삽입 이미지, 동영상 등으로 정의하고 부여하는 마크업 언어입니다.  
- **CSS**는 제공할 웹 컨텐츠의 폰트, 배경색, 컬러, 레이아웃등을 지정하여 HTML 컨텐츠를 꾸며주는 스타일 규칙 언어입니다.
- **JavaScript**는 동적으로 컨텐츠를 바꾸고, 멀티미디어를 다루고, 움직이는 이미지 등 정적인 HTML에 동적인 시각효과를 제공하고 클라이언트와 상호작용 을 가능하게 하는 스크립트 언어입니다.

<br>

## **HTML, CSS, JavaScript의 동작**

아래의 그림처럼 브라우저가 웹 페이지를 열때 위에서 설명한 웹 표준 기술 HTML, CSS, JavaScript가 함께 열리게 됩니다.  

기본적으로 브라우저가 열릴 때 먼저 HTML과 CSS가 결합하여 정의된 컨텐츠와 스타일이 정해집니다.  

HTML과 CSS에 의해 컨텐츠가 정의 된 후 정의된 내/외부 JavaScript가 브라우저 자바스크립트 엔진에의 해 동작하게 됩니다.



![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/web-page.png)

<br>

## **브라우저에서 자바스크립트의 예**

<br>

**브라우저에서 곱셈 결과 출력하기**

아래의 자바스크립트 코드는 브라우저에서 곱셈 결과를 출력하게 하는 동작을 합니다.
자바스크립트의 for문을 통해 

```html
<html>
    <head>
        <title>곱셈 출력하기</title>
    </head>
    <body>
        <h2>곱셈 출력하기</h2>
        <script>
            let fact = 2;
            for(i = 1; i < 9; i ++) {
                document.write(fact + " x " + i + " = " + i*fact + "<br>");
            }
        </script>
    </body>
</html>
```
<br>
위의 스크립트 결과를 아래와 같이 확인할 수 있습니다.

![js in browser](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/js-in-browser1.png)

<br>

**브라우저에서 버튼클릭시 동작 추가하기**

```html
<html>
    <head>
        <title>버튼 클릭</title>
    </head>
    <body>
        <button onclick="alert('버튼이 클릭되었습니다')">
            Click here
        </button>
    </body>
</html>
```
위의 스크립트 결과 화면에서 Click here 이라는 버튼 클릭시 onclick 이벤트가 발생하여 alert 창이 나타나는 것을 확인할 수 있습니다.

![js in browser2](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/js-in-browser2.png)

## **HTML에 JavaScript 추가하기**

HTML에 JavaScript를 추가하는 방법에는 크게 두 가지가 존재합니다.

첫번째는 HTML문서 자체에 JavaScript를 포함하는 방법입니다.  
두번째는 HTML문서에 외부에 있는 별도의 JS 파일을 등록하는 방법입니다.

<br>


### **HTML문서에 JavaScript를 포함하기**

아래의 코드는 HTML 문서에 script 라는 태그를 이용해 JavaScript를 내장시키는 코드 입니다.
포함시킬 JavaScript를 script 태그로 감싸 포함시키고자 하는 JavaScript를 사용할 수 있습니다.

```html
<html>
 <head>
 <title>My title</title>
 <script type="text/javascript">
      document.write("<h1>JS Embedded</h1>");
 </script>
 </head> 
 <body> 
 </body>
</html>
```

**결과화면**

![js in browser2](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/embedded-js.png)

<br>

### **HTML문서에 외부 JavaScript를 포함하기**

아래의 코드는 HTML 문서에 외부 JavaScript를 연결하는 코드 입니다.  
외부 js 파일을 연결하기 위해서는 script태그의 src 속성에 js 파일의 경로를 입력하여 외부 js 파일을 포함시킬수 있습니다.

```html
<html>
 <head>
 <title>My title</title>
 <script src="external-js.js"></script>
 </head>
 <body>
 </body>
</html>
```

**결과화면**

![js in browser2](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/external-js.png)

<br>

## **JavaScript의 변수와 데이터 타입**

### 변수
아래는 일반적인 프로그래밍 언어 컨텍스트에서 변수의 몇 가지 기본 정의입니다.  
- 변수는 프로그램이 조작 할 수 있는 명명 된 저장소 를 제공합니다. 프로그램의 기본 저장 단위입니다.
- 변수는 컴퓨터 프로그램에서 참조 및 조작 할 정보를 저장하는 데 사용됩니다.
- 프로그래밍에서 변수는 프로그램에 전달되는 조건이나 정보에 따라 변경 될 수있는 값입니다.

### 데이터 타입
데이터 유형은 기본적으로 프로그램에서 사용하고 조작 할 수있는 데이터 유형입니다.  
아래 그림은 JavaScript에서 사용하는 데이터 유형입니다.

![js datatype](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/data-type.png)

**Primitive Types(기본형 타입)**

기본형 타입에는 숫자 numbers, 문자열 strings, 불린 boolean, null, undefined 가 존재 합니다.  

<br>

**Composite Types(참조형 타입)**

참조형 타입에는 object와 arrays가 존재합니다

<br>

### 기본형 타입과 참조형 타입의 차이

기본형과 참조형 타입의 변수 모두 선언과 할당의 과정을 거치게 됩니다.  

- 선언 : 변수의 주소값을 매칭
- 할당 : 변수의 주소값에 값을 매칭

두 타입의 차이점은 할당과정에 있습니다.  
기본형 타입은 값을 그대로 할당하고, 참조형 타입은 값이 저장된 주소값(참조위치)을 할당합니다.

<br>

### 기본형 타입의 선언과 할당

```javascript
var a = 10;
```

위 코드는 아래의 과정으로 나눌수 있습니다.  

```javascript
var a;      // 선언
a = 10;     // 할당
```

위 코도의 변수 a의 선언과 할당을 그림으로 나타내면 아래와 같습니다.


![js primitive type](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/primitive-type.png)

<br>


### 참조형 타입의 선언과 할당

아래와 같은 object를 선언하고 할당하는 과정을 살펴보겠습니다.  

```javascript
var obj = {
    a: 1,
    b: 'abc'
}
```

object의 데이터 값은 한번에 담을 수 없으므로 우선 해당 주소값에 여로 공간을 주소 값으로 확보해두고 (참조형)  
확보된 공간에 데이터를 담게 됩니다.  


![js reference type](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/reference-type.png)

<br>


### 동적 타이핑

JavaScript의 느슷한 타입(loosely type) 언어이며, 동적(dynamic) 언어 입니다.  
이 말은 변수의 타입을 미리 선언할 필요가 없다는 것을 의미 합니다.  
타입은 프로그램이 처리되는 과정에서 자동으로 파악될 됩니다.  
그리고 이 말은 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이 됩니다.

```javascript
var value = 42;     // value의 타입은 number
var value = 'string';       //value의 타입은 string
var bool = true;     // value의 타입은 boolean
```

<br>

### 문자열

위에서 설명한대로 JavaScript는 동적 타이핑 이므로 변수의 값을 보고 타입을 지정하게 됩니다.  
그래서 문자열은 따옴표 (홑/쌍 따옴표) 를 통해 문자열이라는 것을 알리게 됩니다.

```javascript
var carName = "Mercedes"; 
var carName = 'BMW'; 
```

<br>

### 숫자

숫타 타입은 따옴표 없이 숫자만을 입력한 경우 숫자로 인식하게 됩니다.  

```javascript
var x1 = 34.00;
var x2 = 34; 
```

<br>

### boolean 타입

boolean 타입은 true와 false 두 값만 가질수 있고 주로 조건부 테스트에 사용 됩니다.  

```javascript
var flag1 = true;
var flag2 = false;
```

<br>

## 연산자

다른 프로그래밍 언의의 연산자와 비슷하게 Javascript도 아래와 같은 연산자를 가집니다.  

|연산자|내용|
|--------|--------|
|+|더하기|
|-|빼기|
|/|나누기|
|%|나머지|
|++|증가|
|--|감소|


## JavaScript로 제어할 태그 선택하기

간단한 예제를 통해서 HTML의 버튼에 JavaScript의 동적인 동작을 추가하는 방법을 살펴 보겠습니다.

먼저 아래와 같은 HTML 코드와 화면이 존재합니다.

그리고 아래의 화면에서 웹페이지를 라이트 / 다크 모드 화면 스타일을 변환하는 버튼을 통해 화면 스타일을 변환하는 예제를 살펴 보겠습니다.  



```html
<html>
    <title>example</title>
    <meta charset="utf-8">
    <body>
        <h1>라이트/다크모드 만들기</h1>

        <input type="button" value="night" 
        onclick="
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                ">
        <input type="button" value="day" 
        onclick="
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                ">
        <ol>
            <li><a href='https://www.naver.com'>NAVER</a></li>
            <li><a href='https://www.daum.net'>DAUM</a></li>
            <li><a href='https://www.google.com'>GOOGLE</a></li>
        </ol>

        <h2> 자바스크립트 </h2>
        <p>
                자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
                ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를 부분 지원하게 되었다. 자바스크립트는 브라우저마다 지원되는 버전이 다르다.
        </p>
    </body>
</html>
```

![query-selector](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/query-selector2.png)


위 코드 중 input 태그의 onclick 이벤트 발생시 document.querySelector ....가 동작하게 됩니다.  
여기서 document는 웹 페이지의 HTML 문서 전체를 가르키게 됩니다.  
document에 접근 후 querySelector를 사용하여 body 라는 태그에 접속 할 수 있습니다. 
(https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)   
body 태그에 접근 후 body의 backgroudColor와 color(텍스트 컬러)를 반전 시켜 night / day 모드 버튼을 만들수 있습니다.  

<br>


## JavaScript 조건문 및 활용

아래의 코드는 JavaScript에서  if 조건문 입니다.  
C, Java 등의 언어와 같은 형태를 가지고 있습니다.  
if, else if문에 조건 (condition)을 걸고 상위 조건에 해당되지 않을 경우 최종적으로 else를 실행 합니다. 

```javascript
if(condition) {
    code
} else if(condition) {
    code
} else {
    code
}
```

위에서 만들었던 라이트 / 다크 모드 버튼에 JavaScript if문을 아래와 같이 활용할 수 있습니다.  
아래와 같이 두개의 nighy day 버튼을 if문을 활용해서 하나의 버튼으로 만들수 있습니다.

```html
<html>
    <title>example</title>
    <meta charset="utf-8">
    <body>
        <h1>라이트/다크모드 만들기</h1>

        <!-- <input type="button" value="night" 
        onclick="
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                ">
        <input type="button" value="day" 
        onclick="
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                "> -->

        <input id="day-night-button" type="button" value="night"  onclick="
            if(document.querySelector('#day-night-button').value === 'night') {
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                document.querySelector('#day-night-button').value = 'day';
            } else {
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                document.querySelector('#day-night-button').value = 'night';
            }
        ">       
        <ol>
            <li><a href='https://www.naver.com'>NAVER</a></li>
            <li><a href='https://www.daum.net'>DAUM</a></li>
            <li><a href='https://www.google.com'>GOOGLE</a></li>
        </ol>

        <h2> 자바스크립트 </h2>
        <p>
                자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
                ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를 부분 지원하게 되었다. 자바스크립트는 브라우저마다 지원되는 버전이 다르다.
        </p>
    </body>
</html>
```

<br>

## JavaScript 배열과 반복문

아래의 코드는 JavaScript에서  배열을 선언 후 사용하는 코드 입니다.
C, Java 등의 언어와 같은 형태를 가지고 있습니다.  

```javascript
var arr = [1,2,3,4,5]
console.log(arr.length) // 5 출력
console.log(arr[0])     // 1 출력
```

아래의 코드는 JavaScript에서 for, while의 반복문 입니다.

```javascript
for(var i = 1; i <= 5; i++) {
    console.log(i);
}       // 1 ~ 5 까지 반복적으로 출력 후 종료
```

```javascript
var i = 0;

while(i<=5) {
    console.log(i);
    i++
}
```


위에서 설명한 JavaScript의 배열과 반복문을 위에서 만들었던 night day 버튼을 가진 HTML에 적용해보겠습니다.  
적용할 부분은 문서의 3개의 a 태그가 존재하는데 3개의 a 태그를 배열로 받아온 후 반복문을 통해 스타일을 바꾸어 보겠습니다.  

```html
<html>
    <title>example</title>
    <meta charset="utf-8">
    <body>
        <h1>라이트/다크모드 만들기</h1>

        <input id="day-night-button" type="button" value="night"  onclick="
            if(document.querySelector('#day-night-button').value === 'night') {
                var aList = document.querySelectorAll('a');
                var i = 0;
                while(i < aList.length) {
                    aList[i].style.color = 'yellow'
                    i++;
                }
                document.querySelector('body').style.backgroundColor = 'black';
                document.querySelector('body').style.color = 'white';
                document.querySelector('#day-night-button').value = 'day';
            } else {
                var aList = document.querySelectorAll('a');
                var i = 0;
                while(i < aList.length) {
                    aList[i].style.color = 'red'
                    i++;
                }
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('body').style.color = 'black';
                document.querySelector('#day-night-button').value = 'night';
            }
        ">       
        <ol>
            <li><a href='https://www.naver.com'>NAVER</a></li>
            <li><a href='https://www.daum.net'>DAUM</a></li>
            <li><a href='https://www.google.com'>GOOGLE</a></li>
        </ol>

        <h2> 자바스크립트 </h2>
        <p>
                자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
                ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를 부분 지원하게 되었다. 자바스크립트는 브라우저마다 지원되는 버전이 다르다.
        </p>
    </body>
</html>
```

<br>

## JavaScript 함수 및 활용

대부분의 프로그램에서는 반복적인 코드나, 코드의 재활용, 모듈화 등 여러가지 이유로 함수를 사용합니다.

아래의 코드는 JavaScript에서 함수의 정의 후 사용하는 코드 입니다.  
function 키워드를 통해 함수 선언임을 알립니다.  
이후 함수명, 필요한 파라미터르르 입력하여 함수를 선언 할 수 있습니다.  

```javascript
function functionName(parameter) {
    ...
}

function add(num1, num2) {
    console.log(num1 + num2);
}

add(1,2);       //3 출력
```

위에서 설명한 JavaScript의 함수를 위에서 만들었던 night day 버튼을 가진 HTML에 적용해보겠습니다.   
지금까지 만들었던 코드에는 input태그의 onclick 속성에 많은 javascript 코드가 삽입되어 있습니다.  
하지만 해당 코드가 여러 태그에서 사용된다면 사용되는 모든 태그에 해당 javascript를 삽입해야 합니다.  
그래서 이 부분을 javascript 함수로 만들어 보겠습니다.  

```html
<html>
    <head>
            <title>example</title>
            <meta charset="utf-8">
            <script>
                function dayLightHandler(){
                    if(document.querySelector('#day-night-button').value === 'night') {
                        var aList = document.querySelectorAll('a');
                        var i = 0;
                        while(i < aList.length) {
                            aList[i].style.color = 'yellow'
                            i++;
                        }
                        document.querySelector('body').style.backgroundColor = 'black';
                        document.querySelector('body').style.color = 'white';
                        document.querySelector('#day-night-button').value = 'day';
                    } else {
                        var aList = document.querySelectorAll('a');
                        var i = 0;
                        while(i < aList.length) {
                            aList[i].style.color = 'red'
                            i++;
                        }
                        document.querySelector('body').style.backgroundColor = 'white';
                        document.querySelector('body').style.color = 'black';
                        document.querySelector('#day-night-button').value = 'night';
                    }
                }
            </script>
    </head>
    
    <body>
        <h1>라이트/다크모드 만들기</h1>

        <input id="day-night-button" type="button" value="night"  onclick="dayLightHandler()">       
        <ol>
            <li><a href='https://www.naver.com'>NAVER</a></li>
            <li><a href='https://www.daum.net'>DAUM</a></li>
            <li><a href='https://www.google.com'>GOOGLE</a></li>
        </ol>

        <h2> 자바스크립트 </h2>
        <p>
                자바스크립트(영어: JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다. 자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
                ECMA스크립트는 쉽게 말해 자바스크립트의 표준화된 버전이다. 모질라 1.8 베타 1이 나오면서 XML에 대응하는 확장 언어인 E4X(ECMA-357)를 부분 지원하게 되었다. 자바스크립트는 브라우저마다 지원되는 버전이 다르다.
        </p>
    </body>
</html>
```





