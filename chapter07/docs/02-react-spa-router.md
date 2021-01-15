# Ch07 - 리액트(React) SPA 개발

## 프로젝트 라우터 적용

create react-app으로 생성한 hello-react 프로젝트에 이어서 리액트 라우터를 사용하여 간단한 SPA를 생성해보겠습니다. 리액트 라우터를 사용하면 주소 경로에 따라 다양한 페이지를 보여줄 수 있습니다.

먼저, hello-react 프로젝트 디렉토리로 이동하여 리액트 라우터 라이브러리를 설치합니다. 리액트 라우터를 설치 할 때는 yarn을 사용하여 react-router-dom이라는 라이브러리를 설치하면 됩니다.

```
cd hello-react
yarn add react-router-dom
```



프로젝트에 라우터를 적용할 때는 src/index.js파일에서  react-router-dom 라이브러리에 내장되어 있는 `BrowserRouter`이라는 컴포넌트를 사용하여 감싸면 됩니다. 

> BrowserRouter ?
>
> HTML5의 HistoryAPI를 사용하여 웹 애플리케이션의 주소를 변경하거나 현재 주소에 관련된 정보를 프로퍼티(props)로 쉽게 조회하거나 사용할 수 있도록 해줌

 BrowserRouter컴포넌트를 프로젝트에 적용하기 위해 src/index.js 파일을 아래와 같이 수정합니다. 

 ```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 ```



## 페이지 생성

라우트로 접근할 페이지 컴포넌트를 만듭니다. 사용자가 웹 사이트에 접근했을 때, 맨 처음 보여줄 메인 페이지를 Home 컴포넌트로, 웹사이트를 소개하는 페이지를 About 컴포넌트로 만들어보겠습니다. 두개의 컴포넌트 모두 간단하게 텍스트를 출력하는 로직을 가지고 있습니다. 

src디렉토리에 먼저, Home컴포넌트인 Home.js 파일을 생성합니다. 

```javascript
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
        </div>
    );
};

export default Home;
```

다음으로 About 컴포넌트인 About.js 파일을 생성합니다.

```javascript
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
        </div>
    );
};

export default About;
```



## Route 컴포넌트로 특정 주소에 컴포넌트 연결

Route 컴포넌트를 사용하여 사용자가 요청한 경로에 따라 다른 컴포넌트를 보여줄 수 있습니다. Route 컴포넌트를 사용하면 어떤 규칙을 가진 경로에 어떤 컴포넌트를 보여 줄 지 정의할 수 있습니다. 

사용방식은 다음과 같습니다.  path속성에 주소 규칙을, component 속성에 보여줄 컴포넌트를 정의하면 됩니다. 

```
<Route path="주소규칙" component={보여 줄 컴포넌트} />
```

App.js 파일을 열어서 기존 코드를 모두 제거한 다음, Route 컴포넌트를 사용하여 생성한 Home 컴포넌트, About 컴포넌트를 보여주도록 설정하겠습니다.  src/App.js파일을 아래와 같이 수정합니다. 

```javascript
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
);
};


export default App;
```

그 후, 터미널에서 yarn start을 입력하여 개발 서버를 시작합니다. 첫 화면이 다음과 같이 Home 컴포넌트가 출력될 것입니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch7-home.png)

다음으로 주소 창에 http://localhost:3000/about 경로로 접근해봅니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-about.png)

아마 About 컴포넌트만 출력될 것이라고 생각했던 것과 다르게 Home, About 컴포넌트 함께 출력되는 것을 확인 할 수 있습니다. 그 이유는 /about 경로가 / 규칙에도 일치하기 때문입니다. 

이를 수정하려면 Home 컴포넌트를 위한 Route 컴포넌트 사용시, `exact` 라는 속성을 true로 설정해주면 됩니다. 

> exact 속성은 해당 규칙을 만족하면 하위 라우트 설정을 생략하게 해줍니다. 

src/App.js파일을 아래와 같이 수정합니다. 

```javascript
import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About} />
        </div>
);
};


export default App;
```

주소 창에 http://localhost:3000/about 경로로 접근해보면 About 컴포넌트 하나만 출력되는 것을 확인 할 수 있습니다.



## Link 컴포넌트를 사용하여 다른 주소로 이동

Link 컴포넌트는 클릭하면 다른 주소로 이동시켜주는 컴포넌트 입니다. 일반적으로 웹 애플리케이션에는 다른 주소로 이동하기 위해 a태그를 사용하여 페이지를 전환하게 되는데, 리액트 라우터를 사용할 때는 Link 컴포넌트를 사용해야 합니다. a태그를 직접적으로 사용해서 페이지를 전환하게 되면,  페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 애플리케이션이 가지고 있던 상태나 기존에 렌더링된 컴포넌트를 모두 날려버리기 때문입니다. 

Link 컴포넌트를 사용하게 되면, 페이지를 전부 새로 불러오는 것이 아니라 애플리케이션을 유지한 상태에서 HTML5 History API를 사용하여 페이지의 주소만 변경해줍니다. Link 컴포넌트는 다음과 같이 사용합니다. to 속성에 이동할 주소를 적어주면 됩니다. 

```
<Link to="주소">내용</Link>
```

src/App.js 컴포넌트에  /, /about 경로로 이동할 수 있는 Link 컴포넌트를 추가해보겠습니다. 

```javascript
import React from 'react';
import { Route , Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
        </div>
);
};


export default App;
```

브라우저에서, 페이지 상단을 링크를 눌렀을때 페이지가 전환되는 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-link.png)

## Route 하나에 여러 개의 path 설정

현재 /about 경로로 접근했을때 About 컴포넌트를 보여주고 있습니다. 만약 /info 경로로 접근했을 때에도 About 컴포넌트를 보여주고 싶다면 어떻게 해야 할까요?

아래의 예제처럼 경로가 추가 될때마다 Route 컴포넌트를 추가해줄 수도 있습니다. 

```javascript
import React from 'react';
import { Route , Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/info" component={About} />
        </div>
);
};


export default App;
```

최근에는 Route를 두번 사용하는 대신 path props를 배열로 설정해서 여러 경로에서 같은 컴포넌트를 보여줍니다. 

src/App.js 컴포넌트를 다음과 같이 수정해줍니다. 

```javascript
import React from 'react';
import { Route , Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                <Link to="/about">소개</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
        </div>
);
};


export default App;
```

브라우저에서 http://localhost:3000/info 로 접근시 소개 페이지가 출력되는 것을 확인 할 수 있습니다. 



## URL 파라미터와 쿼리

페이지 주소를 정의 할 때, 가끔은 유동적인 값을 전달해야 할 때도 있습니다. 이는 파라미터와 쿼리로 구분할 수 있습니다. 

* 파라미터 예) /braincafe/cafes/38
* 쿼리 예) /about?detail=true

유동적인 값을 사용하는 상황에서 일반적으로 파라미터는 아이디, 이름, 번호등을 사용하여 조회시 사용하고, 쿼리는 어떤 키워드를 검색하거나 페이지에 필요한 옵션을 전달할 때 주로 사용합니다. 



### URL 파라미터

URL 파라미터를 사용해보기 위해 Profile 컴포넌트를 추가해보겠습니다. Profile 컴포넌트는 /profile/username 와 같은 형식으로 뒷부분에 유동적인 username 값을 넣어주는 경우 해당 값을 props로 받아와서 조회하는 방법을 알아보겠습니다. 

먼저 src디렉토리에 Profile컴포넌트인 Profile.js 파일을 생성합니다. 

```javascript
import React from 'react';


const data = {
        hibrain: {
            name: 'hibrain',
            description: '리액트를 좋아하는 개발자'
        },
        gildong: {
            name: '홍길동',
            description: '고전 소설 홍길동전의 주인공'
        }
};



const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};



export default Profile;
```

URL 파라미터 정보는 라우트로 사용되는 컴포넌트로부터 받아오는 `match` 객체안의 `params` 값에 담겨 있습니다. 

Profile컴포넌트는 URL 파라미터 정보를 username 변수에 저장한다음, 사전에 정의되어 있는 data를 통해 username 일치하는 객체의 name 및 description을 브라우저에 출력하게 됩니다. 



App 컴포넌트에서 Profile 컴포넌트를 출력하기 위한 라우트를 정의해보겠습니다.  

src/App.js 파일을 아래와 같이 수정합니다. 

```javascript
import React from 'react';
import { Route , Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/hibrain">hibrain 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
);
};


export default App;
```

경로 규칙은 /profiles/:username 형식이며, 이렇게 설정해주면 match.params.username값을 통해 현재 경로의 username을 조회할 수 있게 됩니다.  각 프로필 페이지로 이동 할 수 있는 링크도 추가해줍니다. 

브라우저에서 프로필 페이지가 나타나는 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-url-params.png)

### URL 쿼리

이번에는 About 컴포넌트에서 URL 쿼리를 받아와서 사용해보겠습니다. 

URL 쿼리는 `location 객체`에 들어있는 `search `값에서 조회할 수 있습니다. Location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며 웹 애플리케이션의 현재 주소에 대한 정보를 가지고 있습니다. 

예를 들어, http://localhost:3000/about?detail=true 주소로 접근했을 때 location객체의 형태는 다음과 같습니다.

```json
{
  "pathname": "/about",
  "search": "?detail=true",
  "hash": ""
}
```

search값은 문자열로 되어 있기 때문에 특정 값을 읽어오기 위해서는 이 문자열을 객체 형태로 변환해주어야 합니다.

쿼리 문자열을 객체로 변환할때 `qs`라는 라이브러리를 사용합니다. yarn을 사용하여 해당 라이브러리를 설치해줍니다. 

```
yarn add qs
```

About 컴포넌트에서 location.search값에 있는 detail이 true인지 아닌지에 따라 추가정보를 보여줄 수 있도록 About 컴포넌트를 수정해보겠습니다. 

src/About.js 파일을 다음과 같이 수정합니다. 

```javascript
import React from 'react';
import qs from 'qs';


const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    });
    const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 값은 문자열입니다.
    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
        </div>
    );
};



export default About;
```

쿼리 사용시 qs라이브러리를 통해 쿼리 문자열을 객체로 변환하는 과정에서 결과 값은 `문자열`입니다. 

형태가 value=1, value=true 와 같이 숫자나 논리 자료형이더라도 무조껀 문자열로 변환되기 때문에 숫자로 사용하고자 하는 경우 parseInt 함수를 사용하여 숫자로 변환해주고, 논리 자료형인 경우에는 위와 같이 "true" 문자열과 일치하는지 비교해주어야 합니다. 

쿼리 값이 true인경우 "true"문자열과 일치하기 때문에 showDetail값이 true(논리자료형)이 됩니다.  &&연산자를 통해 showDetail가 true인 경우 문자열이 출력되고, false인경우 문자열이 출력되지 않게 됩니다. 

브라우저에서 http://localhost:3000/about?detail=true 주소로 접속해보겠습니다.  하단에 "detail 값을 true로 설정하셨군요!" 문구가 출력되는 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-query-true.png)

브라우저에서 http://localhost:3000/about?detail=false 주소로 접속해보겠습니다. 문구가 출력되지 않는 것을 확인 할 수 있습니다.

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-query-false.png)

## 서브 라우트

서브 라우트는 라우트 내부에 또 라우트를 정의하는 것을 의미합니다. 라우트로 사용되고 있는 컴포넌트 내부에 Route 컴포넌트를 또 사용하면 됩니다. 

기존 App 컴포넌트에서는 두 종류의 프로필 링크를 보여주고 있는데 이것을 프로필 링크를 보여주는 Profiles 라우트 컴포넌트를 따로 만들고 그 안에서 Profile 컴포넌트를 서브 라우트로 사용하도록 코드를 작성해보겠습니다. 

src디렉토리에 Profiles컴포넌트를 생성하기 위해 Profiles.js파일을 다음과 같이 생성합니다. 

```javascript
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/hibrain">hibrain 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong 프로필</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
```

위의 첫번째 Route컴포넌트에는 component 대신 render이라는 props가 포함되어 있습니다. 컴포넌트 자체를 전달하지 않고 보여주고 싶은 JSX를 보여줄 수도 있습니다. 

그리고 JSX에서 props를 설정하는 경우 값을 생략하면 자동으로 true로 설정됩니다. 예를 들어, 현재 첫번째 Route컴포넌트에서 exact={true} 대신 그냥 exact만을 적어준 것을 알 수 있습니다. 

기존의 App 컴포넌트에 있던 프로필 링크를 지우고 Profiles 컴포넌트를 /profiles 경로와 연결 시켜주기 위해 src/App.js 파일을 다음과 같이 수정해줍니다. 

```javascript
import React from 'react';
import { Route , Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
        </div>
);
};


export default App;
```

브라우저로 http://localhost:3000/profiles 주소로 접속하면 서브 라우트가 출력되는 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-sub.png)

## 리액트 라우터 부가 기능

#### history

history객체는 라우트로 사용된 컴포넌트에 match, location과 함께 전달되는 props중 하나로, 이 객체를 통해 컴포넌트 내에 구현하는 메소드에서 라우터 API를 호출할 수 있습니다. 라우터 API란 예를 들어, 특정 버튼을 눌렀을 때 뒤로 가거나, 로그인 후 홈으로 가거나 등의 행위가 발생 할 때 history를 사용합니다. 

이 객체를 사용하는 예제 페이지를 생성하기 위해 HistorySample이라는 컴포넌트를 생성해보겠습니다. src디렉토리에 HistorySample.js 파일을 아래와 같이 생성합니다. 

```javascript
import React, { Component } from 'react';


class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
            <button onClick={this.handleGoBack}>뒤로</button>
            <button onClick={this.handleGoHome}>홈으로</button>
            </div>
    );
    }
}


export default HistorySample;
```

HistorySample 컴포넌트는 뒤로가기 기능을 가지고 있는 handleGoBack함수와 홈으로 이동할 수 있는 기능을 가진 handleGoHome 함수를 사용하여 뒤로가기, 홈으로가기 버튼을 출력할 수 있는 컴포넌트입니다.  

사용자가 웹 브라우저에서 DOM 요소들과 상호작용하는 것을 이벤트 라고 하는데 onClick도 이벤트 중 하나로 클릭시, onClick에 설정된 함수가 실행되게 됩니다.  

App 컴포넌트에서 /history 경로에 해당 컴포넌트가 보이도록 src/App.js 파일을 수정해줍니다. 

```javascript
import React, { Component } from 'react';


class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };

    // 홈으로 이동
    handleGoHome = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
            <button onClick={this.handleGoBack}>뒤로</button>
            <button onClick={this.handleGoHome}>홈으로</button>
            </div>
    );
    }
}


export default HistorySample;
```

브라우저에서 http://localhost:3000/history 으로 접속한다음 뒤로, 홈으로 버튼이 잘 작동하는지 확인합니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-history.png) 

#### withRouter

withRouter 함수는 라우트로 사용된 컴포넌트가 아니더라도 match, location, history객체를 사용할 수 있게 해주는 함수입니다.   withRouter함수를 사용해보기 위해 WithRouterSample 컴포넌트를 생성해보겠습니다.  WithRouterSample컴포넌트는 location, match객체를 textarea으로 출력해주는 페이지입니다. 

 src디렉토리에 withRouter.js파일을 다음과 같이 생성합니다. 

```javascript
import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};


export default withRouter(WithRouterSample);
```

withRouter을 사용할 때는 컴포넌트를 내보내줄 때 함수로 감싸줍니다.  JSON.stringify의 두번째 파라미터와 세 번째 파라미터를 위와 같이 null,2로 설정해주면 JSON에 들여쓰기가 적용된 상태로 문자열이 만들어지게 됩니다. 

WithRouterSample컴포넌트를 Profiles 컴포넌트에 렌더링 해주기 위해 Profiles컴포넌트를 다음과 같이 수정해줍니다. 

```javascript
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/hibrain">hibrain 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong 프로필</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    );
};

export default Profiles;
```

브라우저에서 http://localhost:3000/profiles 페이지에 접속하면 하단에 location, match객체의 정보가 보이는 걸 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-withRouter.png)

match객체를 보면 params가 비어 있는걸 확인 할 수 있습니다. withRouter을 사용하면 현재 자신을 보여주고 있는 라우터 컴포넌트(현재 Profiles)를 기준으로 match가 전달됩니다. profiles라우터 설정시, /profiles라고 입력되어 있기 때문에 username 파라미터를 읽어오지 못합니다. 

WithRouterSample컴포넌트를 Profiles컴포넌트가 아닌 Profile컴포넌트로 수정해줍니다. 

```javascript
import React from 'react';
import WithRouterSample from './WithRouterSample';


const data = {
        hibrain: {
            name: 'hibrain',
            description: '리액트를 좋아하는 개발자'
        },
        gildong: {
            name: '홍길동',
            description: '고전 소설 홍길동전의 주인공'
        }
};



const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
};



export default Profile;
```

브라우저에서 http://localhost:3000/profile/hibrain 페이지에 접속하면 하단에 params.username이 출력되는 것을 확인 할 수 있습니다.

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-withRouter-param.png)

#### switch

switch컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트를 렌더링시켜 줍니다. switch컴포넌트를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있습니다. 

switch컴포넌트를 사용하기 위해 src/App.js 파일을 다음과 같이 수정해줍니다. 정의되지 않은 경로로 접근하게 되면  '이 페이지는 존재하지 않습니다:' 문구를 출력하게 됩니다. 

```javascript
import React from 'react';
import { Route , Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
                <li>
                    <Link to='/history'>History 예제</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path={["/about", "/info"]} component={About} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/history" component={HistorySample} />
                <Route
                    // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
                    render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다:</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
        </div>
);
};


export default App;
```

브라우저에서 http://localhost:3000/now 으로 접근시 "이 페이지는 존재하지 않습니다:" 문구가 출력되는 것을 확인 할 수 있습니다. 

![img](https://dbcore-assets-public.s3.amazonaws.com/tutorials/tutorial-nodejs-web-development/ch02/images/ch07-now.png)