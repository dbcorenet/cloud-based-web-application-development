# SPA와 리액트

## SPA의 개념

SPA는 Single Page Application의 약어 입니다.
<br>말 그대로 한 개의 페이지로 이루어진 애플리케이션이라는 의미입니다.
<br>전통적인 웹 페이지는 다음과 같이 여러 페이지로 구성되어 있습니다.

<img src="https://media.vlpt.us/images/daybreak/post/73d3a899-9092-4ebd-9ee7-aa2c214bf3e6/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202020-05-21%2012.32.47.png">

기존에는 사용자가 다른 페이지로 이동 할때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서벙에 리소스를 전달받아 해석한 뒤 화면에 보여주었습니다.
<br>이렇게 사용자에게 보이는 화면은 서버 측에서 렌더링 하여 보여주었습니다.
<br>사전에 html 파일을 만들어서 제공하거나, 데이터에 따라 유동적인 html을 생성해 주는 템플릿 엔진을 사용하기도 했습니다.
<br>
<br>요즘은 웹에서 보여주는 정보가 많기 때문에 새로운 화면을 보여 주어야 할 때마다 서버 측에서 모든 뷰를 준비한다면 성능상의 문제가 발생 할 수 있습니다.
<br>예를 들어 트래픽이 너무 많이 나오거나, 사용자가 몰려 서버에 높은 부하가 발생할 수 있습니다.
<br>
<br>SPA는 리액트 같은 라이브러리나 프레임워크를 사용하여 뷰 렌더링을 사용자의 브라우저가 담당하도록 하고, 애플리케이션을 브라우저에 일단 실행시키도록 합니다.
<br>사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트헤 줍니다.
<br>새로운 데이터가 필요한 경우 서버 API를 호출하여 필요한 데이터만 불러와 애플리케이션에서 사용하도록 합니다.
<br>
<img src="https://media.vlpt.us/images/daybreak/post/caacf6bd-f43f-4686-8b7a-167b22bf3cbd/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202020-05-21%2012.40.12.png">

싱글 페이지 이지만 화면을 여러 종류로도 구성할 수 있습니다.
<br>SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에 로딩된 자바스크립트와 현재 사용자 브라우저의 주소 상태에 따라 다양한 화면을 보여 줄 수 있습니다.

## 리액트의 개념

- 페이스북에서 만든 자바스크립트 라이브러리.
- 조작에 따라 인터페이스가 변하는 뷰 UI 구성에 중점을 둔 기술.
- 2013년에 출시되어 페이스북 자사의 제품에 사용중.

### 초기렌더링
사용자 화면에 뷰를 보여 주는 것을 렌더링이라고 합니다.
<br>초기 렌더링은 맨 처음 어떻게 보일지를 정하는 것을 말합니다.
<br>리액트에서는 render 함수가 이러한 역할을 합니다.

```javascript
render() { ... }
```

**render 함수**<br>
- 컴포넌트가 어떻게 생겼는지 정의하는 역할.
- 뷰의 생김새, 동작방식에 대한 정보를 가진 객체를 반환.

**작동원리**<br>
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtMViF%2FbtqFNrdgiBE%2FPaIbmP587GtuRbvrXo8rJ0%2Fimg.png">

1. 최상위 컴포넌트부터 렌더링 작업을 수행.
2. 렌더링 작업에 대한 정보들을 가지고 HTML 마크업을 생성.
3. 실제 페이지의 DOM 요소 안에 주입.

### 리렌더링
리액트는 컴포넌트에서 데이터에 변화가 있을 때마다 새로운 요소로 변경된 부분만 갈아끼우는 형식으로 업데이트 합니다.
<br>render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교합니다.
<br>둘의 차이를 비교한 후 원하는 뷰로 리렌더링 즉, 새로운 요소로 갈아끼우는 방식으로 동작합니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkNsFw%2FbtqFNOZ8kCl%2F2kTPCkREFfzFf5N4aF4bL1%2Fimg.jpg">



### Virtual DOM

Virtual DOM은 이름 그대로 가상의 DOM을 의미합니다.
<br>DOM은 Document Object Model의 약어로 웹 페이지가 화면에 로딩되면 브라우저는 페이지의 문서 객체 모델을 만듭니다.
<br>브라우저에 표시되는 문서 객체 모델이 바로 DOM 입니다.
<br>DOM은 트리 형태이기 때문에 특정 노드를 찾거나 수정하거나 제거하거나 원하는 곳에 삽입도 가능하게 됩니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNduPK%2FbtqFNgRhJxF%2FkBnn6Pa4bQrFIFRR5uLSJK%2Fimg.png">

<br>
<br>DOM을 자주 조작하게 되면 성능에 영향을 끼쳐 브라우저에 페이지가 로딩되는 속도가 느려지게 됩니다.
<br>리액트는 웹 브라우저에서 DOM에 변화가 일어나면 다시 페이지를 로딩하기 위해서 느려지는 성능 저하 문제를 방지하기 위해서 가상 돔을 사용하여 동작합니다.

#### Virtual DOM 동작 원리

1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링 합니다.
2. 이전 Virtual DOM에 있던 내용과 현재 Virtual DOM의 내용을 비교합니다. (diffing 과정)
3. 바뀐 부분만 실제 DOM에 적용합니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfDdra%2FbtqFPrXNbaU%2F0GFRwO2Lmdv47RXmrCBYwK%2Fimg.png">

>Virtual DOM을 사용한다고 해서 무조건 빠른 것은 아닙니다. 지속적으로 데이터가 변화하는 대규모 애플리케이션 구축을 할 때 사용을 권장합니다.


## 리액트 프로젝트 생성

### npx를 사용한 생성

1. create react 를 사용하여 리액트 프로젝트를 생성합니다.

```
$ npx create-react-app hello-react
```

2. 생성된 리액트 프로젝트를 다음과 같이 실행할 수 있습니다.

```
$ cd hello-react

$ npm start # 또는 yarn start
```

### yarn을 사용한 생성

1. yarn을 설치 합니다.

```
$ npm install -g yarn

$ echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.profile

$ source ~/.profile
```

2. 리액트 프로젝트를 생성합니다.

```
$ yarn create react-app hello-react
```

3. 생성된 리액트 프로젝트를 다음과 같이 실행할 수 있습니다.

```
$ cd hello-react

$ npm start # 또는 yarn start
```

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter07/images/react-server-start.png" style="max-width:350px;max-height:400px">


리액트 프로젝트로 접속하면 아래와 같이 웹페이지에 접속됩니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter07/images/react-main.png" style="max-width:350px;max-height:400px">


## 리액트 프로젝트 구조

리액트를 제일 처음 생성하면 아래처럼 디렉토리가 구성되어 있습니다.
<br> 리액트는 여러 개의 컴포넌트를 선언하여 구성할 수 있으며

```
.
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    └── index.js

```

- App.js : 리액트의 JSX 문법으로 정의되어 있는 컴포넌트 파일. HTML와 자바스크립트를 정의.
- App.css : App.js 컴포넌트의 스타일을 정의.
- App.test.js : 컴포넌트 단위 테스트를 위한 테스트 파일.
- index.css : 메인 페이지 스타일을 정의.
- index.js : 메인 페이지를 정의하는 컴포넌트 파일. App.js 를 주입받아서 렌더링 함. 리액트 돔의 root를 정의하는 파일.

## JSX

JSX는 자바스크립트의 확장 문법이며 XML과 매우 비슷하게 생겼습니다.
<br>이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.


```javscript
function App() {
    return (
        <div>
            Hello <b>react</b>
        </div>
    );
}

```

위와 같이 작성된 JSX 문법은 아래처럼 변환됩니다.

```javascript
function App() {
    return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}
```

### JSX 문법
JSX를 사용하려면 몇가지 규칙을 준수해야 합니다.

#### 감싸인 요소
컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다.
<br>그 이유는 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문입니다.

**잘못된 코드**
```javascript
import React from ‘react‘;


function App() {
  return (
    <h1>리액트 안녕!</h1>
    <h2>잘 작동하니?</h2>
  )
}



export default App;
```

반드시 맨 바깥에는 하나 이상의 ```<div></div>``` 또는 ```<></>```로 감싸주어야 정상적으로 동작합니다.

**정상적인 코드**
```javascript
import React from 'react';

function App() {
  return (
    <div>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </div>
  );
}

export default App;
```

#### 자바스크립트 표현
JSX 안에서는 자바스크립트 표현식을 쓸 수 있습니다.
<br>자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 됩니다.
```javascript
import React from 'react';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```


#### if 대신 조건부 연산자
JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없습니다.
<br>하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용하면 됩니다.
<br>조건부 연산자의 또 다른 이름은 삼항 연산자입니다.
```javascript
import React from ‘react‘;


function App() {
  const name = ‘리액트‘;
  return (
    <div>
      {name === ‘리액트‘ ? (
        <h1>리액트입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}



export default App;
```

#### class 대신 className

일반 HTML에서 CSS 클래스를 사용할 때는 <div class="myclass"></div>와 같이 class라는 속성을 설정합니다.
<br>하지만 JSX에서는 class가 아닌 className으로 설정해 주어야 합니다.

<br>먼저 App.css를 열어서 새 css 클래스를 추가합니다.

```css
.react {
  background: aqua;
  color: black;
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
}
```


className으로 정의한 스타일을 적용해봅니다.

```javascript
import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}

export default App;
```


<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter07/images/react-className.png" style="max-width:350px;max-height:400px">

#### 주석

JSX 안에서 주석을 작성하는 방법은 일반 자바스크립트에서 주석을 작성할 때와 조금 다릅니다.

```javascript
import React from ‘react‘;
import ‘./App.css‘;


function App() {
  const name = ‘리액트‘;
  return (
    <>
      {/* 주석은 이렇게 작성합니다. /}
      <div
        className=“react“ // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나
      / 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}


export default App;
```


## 컴포넌트

리액트를 사용하여 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수 있는 요소는 여러 가지 컴포넌트로 구성되어 있습니다.
<br>컴포넌트의 기능은 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 줄 뿐만 아니라, 컴포넌트가 사라질 때, 변화가 일어날 때 주어진 작업들을 처리하는 등의 역할을 합니다.

### props
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다.
<br>props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에서는 App 컴포넌트가 부모 컴포넌트입니다)에서 설정할 수 있습니다.

<br>props 를 사용하여 부모에서 전달한 값을 자식에게 렌더링 하는 간단한 컴포넌트 예제를 실습합니다.

<br>MyComponent.js 파일을 생성하여 아래처럼 컴포넌트를 정의해줍니다.

```javascript
import React from ‘react‘;

const MyComponent = props => {
return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};


export default MyComponent;

```

<br>App.js에서 MyComponent를 삽입하여 props를 전달합니다.

```javascript
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="React" />;
};

export default App;

```

위의 예제를 실행하면 아래처럼 App.js에서 전달한 React 값이 MyComponent 에 전달되어 출력되는 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter07/images/react-component-props.png" style="max-width:350px;max-height:400px">