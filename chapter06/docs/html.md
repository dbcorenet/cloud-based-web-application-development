# **HTML5 (HyperText Markup Language)**

## **HTML이란**

HTML5는 출시된 HTML의 버전 중 하나 입니다.  
**HTML이란** HyperText Markup Language로 웹페이지를 위한 마크업 언어입니다.

각 단어의 뜻을 살펴보면 아래와 같습니다.

- 하이퍼텍스트 - 사용자가 하이퍼링크를 통해 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트
- 마크업 - 태그 등을 이용하여 문서나 데이터 구조를 명시하는 언어 중 하나

그래서 HTML은 사용자가 하이퍼링크를 통해 한 문서에서 다른 문서로 이동가능한 텍스트를 태그를 이용하여 구조화 한 언어입니다.  
HTML을 이용하여 텍스트나 이미지, 동영상, 미디어 등을 브라우저에 렌더링 하여 사용자에게 제공할 수 있습니다.

### **HTML 마크업**

아래는 화면에 Hello World! 를 출력하는 간단한 HTML5의 예제입니다.  
아래 태그를 보면 html 태그의 자식으로 head, body 태그가 존재하고 body 태그에는 p 태그라는 하위 태그를 가진 구조화 된 언어를 확인 할 수 있습니다.  

<br>

`<doctype html>` 은 문서의 형식을 정의하는 구문이고 브라우저에서 렌더링 방식을 결정합니다.  
html5는 `<doctype html>` 으로 정의 합니다    
모든 HTML은 `<html></html>`태그 안에 정의 되어야 합니다.  
`<head></head>` 태그는 html의 메타데이터를 정의 합니다.  
`<body></body>` 태그는 브라우저에 렌더링 될 요소들을 정의 합니다. 
`<title></title>` 태그는 문서의 제목을 정의 합니다.

태그에 대한 자세한 내용은 아래에서 설명 하겠습니다. 


``` html
<!doctype html>
<html>
  <head>
    <title>Hello HTML</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

### **HTML 기본적인 형태**

거의 모든 HTML은 아래와 같은 간단한 형태를 가집니다.

```html
<tag> 렌더링할 내용 </tag>

<tag attribute1="value" attribute2="value"> 렌더링할 내용 </tag>
```

- 기본적으로 태그들은 **<>(꺽쇠)** 를 이용하여 표현합니다 (한쌍의 태그를 Element, 엘리먼트라고도 합니다).  

- `<tag>`**시작태그 (Start tag)**와  <br> `</tag>` 태그명 슬래쉬로 표현한 **종료 태그 (End tag)**로 태그의 시작과 끝을 표현합니다.

- 모든 태그의 공통 attribute나 해당 태그만 가지는 특정 attribute의 정의는 위 예제 코드처럼 시작 태그 위에 **attribue = "value"** 형식으로 정의 하고 각 attribute 들은 공백으로 구분합니다.

위와 같이 html은 매우 간단한 문법을 가지고 있습니다.  
그래서 문법은 누구나 하루안에 익힐수 있고 필요한 태그만 찾아보면 쉽게 사용할 수 있습니다.


## **HTML5 태그들**

여기서 부터는 위에서 설명한 HTML에서 자주 쓰이는 태그들에 대해서 소개합니다.

(태그들을 직접 코딩하여 보고 싶은 경우 메모장을 열어 확장자를 `.html` 로 변경하여 저장 후 파일을 열면 기본 브라우저로 열리며  
태그가 렌더링된 결과를 확인할 수 있습니다.)

### **텍스트 관련 태그들**

먼저 가장 기본적인 텍스트를 표현하는 태그들에 대해 알아보겠습니다.


#### **Heading 태그** ####
HTML에 `<h1>`, `<h2>` , , , `<h6>` 까지의 태그들이 존재 합니다.  
이 태그는 h태그라고 불리며 html 태그내에 본문들의 제목을 정의할 때 주로 사용합니다.  
h태그에는 기본적으로 정의된 텍스트의 사이즈와 굵기가 존재하여 태그만 입력 하면 1 부터 6 단계 까지 텍스트가 달라집니다.  
( 검색엔진이 문서를 크롤링 해갈때 h 태그를 기준으로 문서를 인덱싱 하므로 해당 문서나 단락에 가장 중요한 부분을 표현하는 것을 추천 합니다.)  

태그 사용법과 브라우저에서의 렌더링 결과는 아래와 같습니다.
``` html
<!doctype html>
<html>
  <body>
    <h1>제목 1</h1>
    <h2>제목 2</h2>
    <h3>제목 3</h3>
    <h4>제목 4</h4>
    <h5>제목 5</h5>
    <h6>제목 6</h6>
  </body>
</html>
```

![install file list](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/heading-tag.png)

위의 렌더링 결과 처럼 h1이 가장 굵고 크게 h6가 h태그 중 가장 작고 얇게 렌더링 됨을 알수 있습니다.  
(html을 실행하는 디바이스의 OS나 브라우저에 따라 스타일이 조금씩 다를수 있습니다.)

<br>

#### **Text Formating 태그** ####

아래 태그들은 텍스트의 포맷팅과 관련된 태그들 입니다.

```html
<!DOCTYPE html>
<html>
<body>
	<!-- 텍스트를 굵게 표현 -->
    <b> - 볼드 태그 </b>
    <br>

	<!-- 텍스트를 굵게 표현하고 강조하고 싶은 부분 -->
    <strong> - Important 태그 </strong>
    <br>
    
	<!-- 이탤릭체로 표현 -->
    <i> - Italic 태그 </i>
    <br>

	<!-- 기울임체로 표현 -->
    <em> - Emphasized 태그 </em>
    <br>

	<!-- 작은 텍스트로 -->
    <small> - Small 태그 </small>
    <br>

	<!-- 텍스트 중간에 지웠다는 의미의 라인을 넣는 태그 -->
    <del> - Deleted 태그 </del>
    <br>

	<!-- 텍스트에 밑줄을 표현 -->
    <ins> - Inserted 태그 </ins>
    <br>

    <!-- 하나의 문단을 만들고 싶은 경우 사용하는 태그 -->
    <p> 첫번째 문단입니다.</p>
    <p> 두번째 문단입니다.</p>

</body>
</html>
```

아래 사진은 위 태그들을 브라우저에서 렌더링 한 결과 입니다.
각 텍스트들이 태그에 맞는 스타일이 적용되서 렌더링 된것을 확인할 수 있습니다.

그 중 p 태그는 다른 태그나 스타일을 적용하지 않아도 "첫번째 문단입니다" 와 "두번째 문단입니다" 사이에 개행과 여백이 생긴것을 확인할 수 있습니다.

![text](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/text-formating.png)


<br>

#### **style 속성** ####

모든 태그들에는 태그의 style을 정의할 수 있는 style 속성이 존재 합니다.  
스타일은 말그대로 렌더링 될 부분의 스타일을 정의할 수 있는 부분입니다. (컬러, 크기, 정렬 등)  

style 속성 정의 방법은 아래와 같습니다.

```html

<tag style="color: black; font-size: 20px;"> 스타일 정의하기 </tag>

```

<br>

스타일 속성의 정의는 css 문법을 따릅니다.  
css 문법은 `속성명: 속성값` 으로 정의하며 각 속성은 `;` 으로 구분 합니다.  
아래 코드는 style 속성을 이용하여 위에서 설명한 text 관련 태그를 style 한 코드 입니다.  
간단한 스타일에 대한 속성 몇가지를 사용하여 태그를 정의 해보겠습니다.


```html
<!-- 텍스트 color에 대한 정의 -->
<h1 style="color:blue;">color blue h1 태그</h1>
<p style="color:red;">color red p 태그</p>


<!-- 텍스트 글씨체에 대한 정의 -->
<h1 style="font-family:verdana;">verdana style h1 태그</h1>
<p style="font-family:courier;">courier style p 태그</p>


<!-- 텍스트 크기에 대한 정의 -->
<h1 style="font-size:40px">font size 40px h1 태그</h1>
<p style="font-size:10px">font size 10px p 태그</p>


<!-- 텍스트 정렬에 대한 정의 -->
<h1 style="text-align:center;">중앙 정렬된 h1 태그</h1>
<p style="text-align:center;">중앙 정렬된 p 태그</p>
```

<br>

아래 사진은 위 코드가 브라우저에 렌더링 된 결과 입니다.


![install file list](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-style.png)

<br>


#### **Color 스타일 속성 정의 방법** ####

위에서 스타일 속성 중 color에 대해 정의하는 방법이 몇가지 있어 소개하겠습니다.

**Color Name으로 정의 하는 방법**

black, blud, red 처럼 색상에 대한 영문명으로 color를 정의한 방법 입니다.  
색상은 HTML에서 지원하는 140여가지 색상에 대한 영문명만 지원 합니다.
해당 색상에 대한 자세한 내용은 [Color Name 참고](https://www.w3schools.com/colors/colors_names.asp) 에서 확인 할 수 있습니다.

```html

<h1 style="color:blue;">color blue h1 태그</h1>
<p style="color:red;">color red p 태그</p>

<h1 style="color:darkblue;">color blue h1 태그</h1>
<p style="color:dodgerblue;">color red p 태그</p>

<h1 style="color:gold;">color blue h1 태그</h1>
<p style="color:midnightblue;">color red p 태그</p>

```

![install file list](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-color-name.png)

<br>

**RGB, RGBA 값으로 정의 하는 방법**
RGB는 삼원색 Red Green Blue의 색상 조합으로 color를 정의하는 방법입니다.  
빨강, 초록, 파랑 각각의 수치를 0 부터 255 까지로 보고 세 가지 색상을 섞었을때 나타나는 색상입니다.  

RGBA는 RGB에서 확장하여 Alpha(투명도) 값을 더해 색상에 투명도 까지 정의 하는 방법 입니다.
Alpha는 0 부터 1 까지로 투명도를 나타냅니다.
사용방법은 아래와 같습니다.  

```html

<h1 style="color:rgb(255, 255, 0);">rgb(255, 255, 0) 색상</h1>
<p style="color:rgb(0, 0, 255);">rgb(0, 0, 255) 색상</p>

<h1 style="color:rgb(238, 130, 238);">rgb(238, 130, 238) 색상</h1>
<p style="color:rgb(255, 165, 0);">rgb(255, 165, 0) 색상</p>

<h1 style="color:rgba(255, 255, 0, 0.4);">rgb(255, 255, 0) 색상</h1>
<p style="color:rgba(0, 0, 255, 0.9);">rgb(0, 0, 255) 색상</p>

<h1 style="color:rgba(238, 130, 238, 0);">rgb(238, 130, 238) 색상</h1>
<p style="color:rgba(255, 165, 0, 1);">rgb(255, 165, 0) 색상</p>

```

![install file list](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-rgb-rgba.png)

결과 사진 중 alpha 값은 투명도가 0이라 색상이 없어진것을 확인할 수 있습니다. 

<br>

**HEX 값으로 정의 하는 방법**

HEX는 10진수로 정의된 0부터 255의 값들을 16진수로 변환한 값이다.  
사용 방법은 아래와 같습니다.

```html

<h1 style="color:#ff0000;">#ff0000</h1>
<h1 style="color:#0000ff;">#0000ff</h1>
<h1 style="color:#3cb371;">#3cb371</h1>
<h1 style="color:#ee82ee;">#ee82ee</h1>
<h1 style="color:#ffa500;">#ffa500</h1>
<h1 style="color:#6a5acd;">#6a5acd</h1>

```

![install file list](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-hex.png)


### **CSS ( Cascading Style Sheets )**

CSS는 Cascading Style Sheets 로 HTML 엘리먼트를 어떻게 표현할 것인지를 정의 하는 언어 입니다.  
위에서는 각 엘리먼트의 style 속성으 이용하여 엘리먼트 하나하나 마다 스타일의 정의 했습니다.  
이렇게 정의하면 같은 스타일이라도 필요한 엘리먼트에 반복적으로 정의해야 합니다.  
하지만 css를 따로 정의해두면 한번의 정의로 필요한 모든 엘리먼트에 적용할 수 있습니다.  

CSS를 정의하는 방법에 따라 3가지로 나눌수 있습니다.

- Inline 정의 - 위에서 처럼 태그의 style 속성으로 직접 정의
- Internal 정의 - 메타정보를 정의 하는 head 태그 안에 style 태그를 통해 정의
- External 정의 - html 외부에 별도의 css 파일을 만들어 정의


#### **Inline 정의 방법**
Inline 정의 방법은 텍스트 관련 태그에서 사용했던 방법이므로 사용방법설명은 생략합니다.


#### **Internal 정의 방법**
Internal 정의 방법은 메타정보를 정의 하는 head 태그 안에 style 태그를 통해 정의합니다.  
css를 head 태그 내에 정의하였으므로 해당 head 태그를 자식으로 가지는 html 내에서만 스타일이 적용됩니다. 

```html
<html>
    <head>
        <style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
        </style>
    </head>

    <body>
        <h1>스타일이 적용된 h1 태그</h1>
        <p>스타일이 적용된 p 태그</p>
    </body>
</html>
```

위 코드 처럼 스타일이 적용될  `태그명  { 속성명: 속성값}` 으로 정의 합니다.
html이 렌더링된 결과 화면은 아래와 같습니다

![internal css](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-css.png)

<br>

#### **External 정의 방법**
External 정의 방법은 정의한 스타일을 여러 html 페이지에 적용할 때 자주 사용됩니다.  
정의 방법은 html내에 css를 정의하지 않고 html 외부에 별도 `.css` 파일을 정의하여 html 내에서 import 합니다.

Internal 정의 방법에서 사용한 css 코드를 styles.css 라는 파일을 만들어 따로 정의 하겠습니다

```css
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
```
<br>

위 처럼 정의한 css 파일을 html에서 import 하겠습니다.  
import는 link 태그를 이용해서 정의 합니다.  
link태그에 rel 속성을 이용하여 import 되는 파일이 스타일시트 인것을 알려 줍니다.  
그리고 href 속성을 이용하여 스타일시트 파일명 및 경로를 작성합니다.   

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <h1>스타일이 적용된 h1 태그</h1>
        <p>스타일이 적용된 p 태그</p>
    </body>
</html>
```

<br>

위 html 코드의 렌더링 결과는 아래와 같습니다.  
Internal 정의방법에서 사용한 css를 외부에서 주입 하도록 바꾼것 외에는 동일하므로  
렌더링 결과도 동일한 것을 확인 할 수 있습니다.  

![internal css](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-css.png)

<br>

### **HTML Link**

웹 페이지 거의 모든 곳에서 링크가 존재 합니다.  
HTML에서 이 링크를 정의한 태그가 a 태그 입니다.  
HTML에서 링크는 하이퍼링크로 사용자가 클릭 시 다른 페이지로 이동할 수 있습니다.

#### a 태그 문법

a 태그의 문법은 아래와 같습니다.  
href 속성을 통해 링크 될 경로를 지정합니다.  
url에는 full url, 상대경로, 절대경로 모두 사용 가능합니다.

```html
<a herf="url"> 링크명 </a>
```

**a 태그의 target 속성**  

a 태그에 자주 사용되는 속성 중 target 속성이 있습니다.
target은 링크를 클릭 했을 때 이동하는 방식을 정의 합니다.

- _blank - 새로운 창을 통해 링크를 엽니다
- _self - 새로운 창을 열지 않고 현재 창에서 링크를 엽니다.

``` html

<a href="https://www.naver.com" target="_blank"> 네이버 _blank 링크 </a>

<a href="https://www.naver.com" target="_self"> 네이버 _self 링크 </a>

```

위 코드를 실행하면 _blank링크는 새로운 브라우저 창을 열어 naver가 열리고  
_self링크는 새로운 브라우저 창을 열지 않고 현재 창에서 naver로 바뀌는것을 확인할 수 있습니다.


### **HTML Image**

웹 페이지에서 링크 만큼이나 많이 사용되는 태그가 이미지 태그 입니다.  
디자인, 정보 정달을 위해서도 자주 사용 됩니다.  

이미지를 사용하기 위한 태그의 문법은 아래와 같습니다.  


```html

<img src="image 주소" alt="대체 속성">

```

img 태그는 다른 태그와 다르게 종료 태그가 없는 것이 특징입니다.  
src 속성에는 imgae의 url을 입력하게 됩니다.  
alt 속성은 이미지가 없거나 네트워크 상의 에러로 이미지가 제대로 출력 되지 않은 경우 이미지 대신 출력 되는 텍스트 입니다.

```html

<img src="http://w3.changwon.ac.kr/kor/img/common/logo.gif" alt="창원대학교 로고">

<img src="http://w3.changwon.ac.kr/kor/img/common/logo2.gif" alt="창원대학교 로고">

```

위 html 코드를 렌더링 하면 두번째 이미지 태그는 이미지 대신 창원대학교 로고라는 텍스트가 출력 되는 것을 확인할 수 있습니다.  
(http://w3.changwon.ac.kr/kor/img/common/logo2.gif 라는 이미지는 존재 하지 않음)

<br>

### **HTML Lists**

HTML에는 리스트를 표현할 수 있는 두 가지 태그가 존재합니다.

- Unordered List - 순서 없이 리스트를 표현
- Ordered List - 순서가 있는 리스트 표현

<br>


**Unordered List**

먼저 Unordered List 를 살펴보겠습니다.  
Unordered List는 ul태그와 List Item인 li 태그로 구성됩니다.  
디폴트로 리스트의 스타일은 검은색 원으로 스타일 됩니다. (ul tag의 list-style-type 스타일 속성으로 변경 가능)

```html
<ul style="list-style-type:circle">
    <li> 아이템1 </li>
    <li> 아이템2 </li>
    <li> 아이템3 </li>
</ul>

<ul style="list-style-type:square">
    <li> 아이템1 </li>
    <li> 아이템2 </li>
    <li> 아이템3 </li>
</ul>
```

<br>

**Ordered List**

Ordered List는 순서가 존재하는 리스트 입니다.
List Item 태그는 li로 동일하고 Ordered List이므로 부모로 ol 태그를 사용 합니다.
ol 태그의 스타일 방법은 type 속성을 통해 변경할 수 있습니다.

```html
<ol>
    <li> 아이템1 </li>
    <li> 아이템2 </li>
    <li> 아이템3 </li>
</ol>

<ol type="A">
    <li> 아이템1 </li>
    <li> 아이템2 </li>
    <li> 아이템3 </li>
</ol>

<ol type="I">
    <li> 아이템1 </li>
    <li> 아이템2 </li>
    <li> 아이템3 </li>
</ol>
```

<br>

두 가지 리스트의 렌더링 결과는 아래와 같습니다.

![html lists](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-lists.png)


### **HTML Block, Inline 엘리먼트**

모든 HTML은 default로 block, inline display 값을 가지고 있습니다.  
그래서 display의 값이 block 인 엘리먼트를  Block-level Element,  
display 값이 inline 인 엘리먼트를 Inline-level Element라고 합니다.  

이 두 값을 나누는 기준은 다음과 같습니다.  

- Block-level Element - 새로운 라인에서 시작되어 너비 끝까지 공간을 차지하는 엘리먼트
- Inline-level Element - 새로운 라인에서 시작되지 않고 필요한 너비의 공간만큼만 차지하는 엘리먼트

Block-level의 대표적인 엘리먼트가 `div` 이고 Inline-level의 대표적인 엘리먼트가 `span` 입니다.  
두 태그 모두 html에서 그룹핑하거나 구역을 나눌때 자주 사용하는 태그 입니다.  

다음 코드를 통해서 차이점을 확인해 보겠습니다.

```html
<!DOCTYPE html>
<html>

  <head>
      <style>
          div { border: 1px solid black }
          span { border: 1px solid red }
      </style>
  </head>

  <body>

    <div> div 엘리먼트 1</div>
    <div> div 엘리먼트 2</div>

    <br>

    <span> span 엘리먼트 1</span>
    <span> span 엘리먼트 2</span>

    <br>
    <br>

    <span> span 엘리먼트 3</span>
    <div> div 엘리먼트 3</div>
  </body>
  
</html>

```

<br>

위 html 코드에서 div 엘리먼트는 1px 두께의 검은색 실선으로 테두리를 만들고  
span 엘리먼트는 1px 두께의 빨간색 실선으로 테두리를 만들어 각 엘리먼트가 어떻게 display 되는지 살펴 봅니다.


아래의 렌더링 결과를 보면 div 엘리먼트는 block level element 이므로 기본족으로 너비가 꽉찬 상태입을 확인할 수 있습니다.  
반면 span 엘리먼트1과 span 엘리먼트 2는 새로운 라인에서 시작되지 않고 연달아 렌더링 되벼 너비 또한 텍스트 출력에 필요한 너비만 차지 한 것을 확인할 수 있습니다.

span 엘리먼트3과 div 엘리먼트3을 보면  
div가 block level element이므로 span 엘리먼트3 오른쪽에 남는 공간이 있더라도 div 엘리먼트 3은 새로운 라인에서 시작되어 너비를 모두 차지 하는것을 볼 수 있습니다. 

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-block-inline.png)

<br>


### **HTML의 class 와 id**

HTML 모든 엘리먼트에는 class와 id를 정의 할 수 있습니다.  
class와 id라는 이름처럼 class는 엘리먼트들을 분류 할 때 자주 사용하고,  
id는 여러 엘리먼트 중 하나의 엘리먼트를 유일하게 식별할 때 자중 사용합니다.  

엘리먼트들을 분류하거나 유일하게 식별하여 스타일을 적용하거나 javascript를 통해 컨트롤 할 때 유용하게 사용할 수 있습니다.
위에서는 tag 이름(h1, div 등)에 css 스타일을 정의하여 스타일을 수정했습니다.  
위 방식대로 스타일을 수정할 수도 있지만 스타일 수정을 원하지 않는 tag에도 스타일이 적용되는 문제점이 있을수 있습니다.  
class와 id를 이용하면 tag가 같다 하더라도 원하는 tag들에만 스타일을 부여할 수 있습니다. 

#### **HTML Class**

먼저 클래스에 대해 알아 보겠습니다.  
엘리먼트에 class를 정의하는 방법은 아래와 같습니다.

```html
<tag class="클래스이름">데이터</tag>
```

위에서 설명한 class 정의 방법으로 엘리먼트에 스타일을 정의하고 javascript를 이용하여 렌더링 해 보겠습니다.
아래 코드는 class가 정의 된 엘리먼트에 스타일을 정의하고 javascript를 이용하여 렌더링 하는 예제코드 입니다.
아래 예제 코드는 univ라는 이름의 클래스에 대한 스타일 정의와 javascript 코드를 삽입하였습니다.  

css에서 class에 대한 스타일의 정의 문법은 `.클래스명 {스타일 정의}` 입니다.  
그리고 html에 자바스크립트는 `<script> javascript code </script>` 를 이용하여 코드를 삽입 합니다.


```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .univ {
            background-color: black;
            color: white;
        }
        .priv {
            background-color: red;
            color: black;
        }
    </style>
</head>

<body>
    <div class="univ">
        <h2 class="univName">창원</h2>
        <p>창원 소재의 국립대학교</p>
    </div>

    <div class="univ">
        <h2 class="univName">부산</h2>
        <p>부산 소재의 국립대학교</p>
    </div>

    <div>
        <h2>서울</h2>
        <p>서울 소재의 국립대학교</p>
    </div>

    <div class="univ priv">
        <h2 class="univName">경남</h2>
        <p>마산 소재의 사립대학교</p>
    </div>

    <script>
        let univElements = document.getElementsByClassName("univName");
        for(let i = 0; i < univElements.length; i++) {
            univElements[i].innerHTML =  univElements[i].innerHTML + "대학교";
        }
    </script>
</body>

</html>
```

<br>

위 html의 렌더링 결과는 아래와 같습니다.  
렌더링 결과를 보면 univ라는 class를 가진 엘리먼트만 검은색 배경의 흰색 텍스트가 적용된 것을 볼 수 있습니다.

그리고 univName 이라는 클래스를 가진 엘리먼트에 "대학교"라는 텍스트가 삽입 된 것을 확인할 수 있습니다.

아래 처럼 모든 div에 대해서 스타일의 정의 하는 것이 아니라 class로 원하는 엘리먼트들을 분류하고 class명으로 스타일을 수정하고 javascript 코드를 실행할 수 있습니다.

클래스를 이용하여 스타일 정의시 같은 스타일 속성에 대해 중복해서 정의하는 경우 제일 마지막에 정의된 class의 스타일이 기존 스타일을 덮어 쓴다는 것입니다.  
마산대학교에 대한 엘리먼트를 보면 univ와 priv 두개의 클래스에 대해 background-color, color가 모두 다르게 정의 되어 있습니다.  
이런 경우 마지막에 정의된 priv가 기존의 스타일 속성을 덮어쓰는 것을 확인 할 수 있습니다.

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-class-style.png)

<br>

#### **HTML Id**

class와 유사한 점이 많지만 엘리먼트를 유일하게 식별한다는 차이점이 있습니다.  
예제 코드를 통해 차이점을 확인해 보겠습니다.
id 속성은 엘리먼트를 유일하게 식별하는데에 사용한다고 했지만 id를 엘리먼트 두곳에 정의하여 어떻게 렌더링 되는지 살펴보겠습니다.  
css에서 id에 대한 스타일 정의 문법은 `#아이디 { 스타일 정의 }` 으로 정의 합니다.
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        
        #changwon {
        	color: red
        }
    </style>
</head>

<body>
    <div>
        <h2 id="changwon">창원</h2>
        <p>창원 소재의 국립대학교</p>
    </div>

    <div >
        <h2 >부산</h2>
        <p>부산 소재의 국립대학교</p>
    </div>

    <div>
        <h2>서울</h2>
        <p>서울 소재의 국립대학교</p>
    </div>

    <div>
        <h2 id="changwon">경남</h2>
        <p>마산 소재의 사립대학교</p>
    </div>

    <script>
        document.getElementById("changwon").innerHTML= document.getElementById("changwon").innerHTML + "대학교";
        
    </script>
</body>

</html>
```

<br>

위 html을 렌더링 한 결과 입니다.
id는 엘리먼트를 유일하게 식별하는데 사용하지만 id가 "changwon"이라고 정의된 2개의 엘리먼트 모두 스타일이 적용된 것을 확인할 수 있습니다.  
하지만 javascript의 경우는 "changwon" 이라는 id를 가지는 첫 번째 엘리먼트에 대해서만 javascript가 적용되는 것을 확인할 수 있습니다.   
동일한 id를 복수로 정의해도 syntax 에러는 발생하지 않지만 본래의 목적대로 엘리먼트를 유일할게 식별하는데 사용해야 합니다.  

![html block inline](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch03/images/html-id.png)

<br>


#### **HTML Layout**

많은 웹 페이지들을 화면을 목적에 맞게 Layout을 나누어 구성합니다.

![html-layout](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter06/images/html-layout.gif)

<br>

위 그림 처럼 목적에 맞는 HTML 태그들을 이용하여 간단하게 레이아웃을 구성할 수 있습니다.   
위에서 소개했던 태그들과 Layout을 구성할 수 있는 HTML 태그들을 이용하여 아래와 같이 간단한 레이아웃을 구성할 수 있습니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>CSS Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the header */
header {
  background-color: #666;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: white;
}

/* Create two columns/boxes that floats next to each other */
nav {
  float: left;
  width: 30%;
  height: 300px; /* only for demonstration, should be removed */
  background: #ccc;
  padding: 20px;
}

/* Style the list inside the menu */
nav ul {
  list-style-type: none;
  padding: 0;
}

article {
  float: left;
  padding: 20px;
  width: 70%;
  background-color: #f1f1f1;
  height: 300px; /* only for demonstration, should be removed */
}

/* Clear floats after the columns */
section::after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
footer {
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
}

</style>
</head>
<body>


<header>
  <h2>노트앱</h2>
</header>

<section>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">노트보기</a></li>
    </ul>
  </nav>
  
  <article>
    <h1>노트앱</h1>
    <p>HTML5와 CSS를 통하여 간단하게 웹 페이지를 구성할 수 있습니다.</p>
  </article>
</section>

<footer>
  <p>Footer</p>
</footer>

</body>
</html>

```

<br>


![html-layout](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter06/images/html-layout-sample.png)

<br>

#### **HTML Layout**

위에서 소개했던 HTML과 간단한 JavaScript을 결합하면 아래와 같은 효과를 구성할 수 있습니다

```html
<!DOCTYPE HTML>
<html>
<head>
<style>
#div1, #div2 {
  float: left;
  width: 90px;
  height: 90px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
<script>
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>
</head>
<body>

<h2>HTML 드래그 앤 드랍</h2>

<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <img src="http://www.changwon.ac.kr/images/web/kor/sub_cnt/img_symbol01_1.png" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="88">
</div>

<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

</body>
</html>

```

<br>

![html-layout](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter06/images/html-drag-drop.png)


