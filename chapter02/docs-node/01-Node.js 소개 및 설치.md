# Ch02 - Node.js 소개 및 설치

## Node.js 소개

기존에는 자바스크립트를 웹 브라우저에서 주로 웹 페이지를 동적으로 만들기 위해 사용하였습니다. 

그러나, 2008년 google이 크롬 웹 브라우저를 발표하면서 자바스크립트 엔진을 오픈소스로 발표하게 되는데, 이것이 v8입니다. 

> 자바스크립트 엔진 ?
>
> 인간이 자바스크립트 언어로 작성한 파일을 컴퓨터가 읽을 수 있도록 도와주는 프로그램

v8엔진은 다른 자바스크립트 엔진과 달리 매우 빨랐기 때문에, v8 엔진을 사용하여 웹 브라우저가 아닌 환경에서도 자바스크립트를 사용할 수 있게 되었습니다.



Node.js는 2009년 Ryan Dahl에 의해 만들어졌으며, **v8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임**입니다. 

> 런타임?
>
> 프로그래밍 언어가 구동되는 환경 ex) Node.js, 크롬 브라우저

이벤트 기반, 논 블로킹 I/O 모델을 사용하고 있어서 빠르고, 가볍고 호율적인 장점이 있습니다. 

웹브라우저에서 동작하는 자바스크립트를 브라우저 밖에서도 실행할 수 있도록 해주기 때문에, 서버를 만들거나 파일을 읽을 수 있게 되었습니다. 자바스크립트만 알더라도 웹 서버, 클라이언트를 만 들 수 있기 때문에 웹 애플리케이션 구현이 가능해지게 됩니다. 

>  실습에서 Node.js 버전은 LTS 버전인 v10.x버전을 사용합니다. LTS 버전은 장기적으로 안정적인 지원을 제공하는 버전을 의미합니다.![Node.js LTS Release](https://raw.githubusercontent.com/nodejs/Release/master/schedule.svg?sanitize=true)*출처:https://nodejs.org/en/about/releases/*



## Node.js 설치

Node.js 는 Windows, Mac OS 그리고 Linux 환경 등에서 설치가 가능합니다. 실습은 Ubuntu20.04 환경에서 진행되기 때문에 Ubuntu20.04 환경에서 Node.js를 설치하는 방법에 대해 알아보겠습니다. 

설치방법은 여러가지가 있으나 nodenv를 이용하여 설치하는 방법으로 진행하겠습니다.

###nodenv를 이용하여 설치하는 방법

[nodenv](https://github.com/nodenv/nodenv)는 여러개의 node version을 관리하는 몇가지 방법 중 하나입니다. 

프로젝트가 많아지게 되면, 프로젝트들 마다 다른 node version이 사용될 수 있기 때문에  여러개의 node version을 사용할 수 있도록 해주는 nodenv 도구가 필요합니다. 

Git에서 repository를 복제해오기 위해 git 명령어가 사용되기 때문에  먼저 git을 설치해줍니다. 

```
$apt-get install git
```

https://github.com/nodenv/nodenv.git 로 부터 repository를  ~/.nodenv 으로 복제합니다. 

```
$git clone https://github.com/nodenv/nodenv.git ~/.nodenv
```

 어디에서든 nodenv 명령어로 실행파일을 실행할 수 있도록 환경변수파일 하단에 설정을 추가해줍니다. 

```
$echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.profile
$echo 'eval "$(nodenv init -)"' >> ~/.profile
```

파일 변경값이 적용되도록 Refresh 해줍니다.

```
$. ~/.profile
```

type nodenv 명령어로 다음과 같이 출력되면 정상적으로 적용된 것 입니다. 

```
$type nodenv

nodenv is a function
nodenv () 
{ 
    local command;
    command="${1:-}";
    if [ "$#" -gt 0 ]; then
        shift;
    fi;
    case "$command" in 
        rehash | shell)
            eval "$(nodenv "sh-$command" "$@")"
        ;;
        *)
            command nodenv "$command" "$@"
        ;;
    esac
}
```

nodenv로 Node version을 설치하기 위해서는 node-build 플러그인이 추가적으로 필요합니다.  nodenv와 마찬가지로 git을 사용하여 repository를 $(nodenv root)/plugins/node-build 경로로 복제해줍니다.  

```
$git clone https://github.com/nodenv/node-build.git $(nodenv root)/plugins/node-build
```

아래 명령어를 통해 현재 설치가능한 node version들을 확인할 수 있습니다. 

```
$nodenv install -l
0.1.14
0.1.15
0.1.16
0.1.17
...
```

node install 과정에서 wget이 필요하기 때문에 만약 wget이 설치되어 있지 않다면 wget을 설치해줍니다. 

```
$apt-get install wget
```

원하는 node version으로 install해줍니다.  node version을 지정하는 방법에는 크게 local, global로 나뉩니다. local은 현재 작업경로의 프로젝트에 사용할 node version을 지정하는 것이고, global은 특정 경로가 아닌 시스템 레벨로  node version을 지정할때 사용합니다.  실습에서는 시스템 레벨로 설정하기 때문에 global을 사용합니다. 

```
$nodenv install 10.15.0
$nodenv global 10.15.0
```

다음 명령어를 통해 Node.js가 정상적으로 10.x 버전으로 설치되었는지 확인 할 수 있습니다. 

```
$node -v
v10.15.0
```

Node.js 작업 환경 설정이 완료되었다면 간단한 파일을 실행해보겠습니다. 

먼저 main.js 파일을 생성합니다. 

```
$vi main.js
console.log("Hello, World!");
```

콘솔에서 다음 명령어를 입력하여 main.js 파일을 실행합니다. 

```
$node main.js
```

작업 환경이 성공적으로 설정되었다면 Hello World! 가 출력되는 것을 확인 할 수 있습니다. 



### NPM

Node.js를 설치하게 되면 Node.js 패키지 매니저 도구인 npm(Node Package Manager)이 설치되게 됩니다. 

npm이 정상적으로 설치되었는지 확인하기 위해서는 다음 명령어를 입력하면 됩니다. 

```
$ npm --version
```

npm을 사용하여 수많은 개발자들이 만튼 패키지(재사용 가능한 코드)를 설치하고 설치한 패키지의 버전을 관리할 수 있습니다. 프로젝트에 패키지를 설치해서 사용하기 때문에 프로젝트가 자연스럽게 패키지에 의존하게 되어버리므로 패키지의 버전 관리를 해줄 필요가 있습니다. 

npm은 프로젝트에 대한 설정을 package.json이라는 파일로 작성하며, JSON형식으로 작성해서 프로젝트에 대한 관리를 할 수 있습니다.  다음은 express으로 프로젝트를 생성했을 때 생성되는 package.json 파일을 나타냅니다. 여기서 "dependencies" 에 프로젝트가 의존하는 패키지와 버전정보를 담고 있습니다. 

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
  }
}

```

npm install 명령어를 실행하게 되면 package.json에 정의되어 있는 모든 의존 패키지가 설치되게 됩니다.  

npm을 사용하여 추가적으로 필요한 패키지를 설치하기 위해서는 다음 명령어를 이용할 수 있습니다. 

```
npm install <패키지 이름>
```

패키지를 설치하게 되면 js파일에서 require을 통해 패키지를 불러올 수 있습니다.

```
var express = require('패키지 이름');
```

기본적으로 npm을 통해 패키지를 설치하게 되면 로컬 모드로 설치됩니다. 로컬 모드는 패키지 설치 명령어를 실행한 디렉토리 안에 있는 node_modules에 설치되는 것을 의미합니다.

글로벌 설치는 시스템 디렉토리에 설치되는 것을 의미합니다. 현재 경로가 아닌 /usr/lib/node_modules에 설치됩니다. 

```
npm install <패키지 이름> -g
```



## 모듈

노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와는 다릅니다. 모듈이란 특정한 기능을 하는 함수나 변수들의 집합입니다. 예를 들면 수학에 관련된 코드들만 모아서 모듈을 하나 만들 수 있습니다. 자체로도 하나의 프로그램이면서 다른 프로그램의 부품으로도 사용할 수 있습니다.

모듈로 만들어두면 여러 프로그램에 해당 모듈을 재사용할 수 있습니다. 자바스크립트에서 코드를 재사용하기 위해 함수로 만드는 것과 비슷합니다.

보통 파일 하나가 모듈 하나가 됩니다. 파일별로 코드를 모듈화할 수 있어 관리하기 편리합니다.



![](https://dbcore-assets-public.s3.amazonaws.com/tutorials/images/078.jpg)



```
const odd ='홀수입니다';
const even ='짝수입니다';

module.exports = {
  odd,
  even,
};
```

var.js파일은 변수 두 개를 선언했습니다. 그리고 `module.exports`에 변수들을 담은 객체를 대입했습니다. 이제 이 파일은 모듈로서 기능합니다. 변수들을 모아둔 모듈이 되는 것이죠. 다른 파일에서 이 파일을 불러오면 `module.exports`에 대입된 값을 사용할 수 있습니다.

```
const { odd, even } = require('./var');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
```

require 함수 안에 불러올 모듈의 경로를 적어줍니다. 앞의 예제에서는 같은 폴더 안에 파일을 만들었지만, 다른 폴더에 있는 파일도 모듈로 사용할 수 있습니다. require 함수의 인자로 제공하는 경로만 잘 지정해주면 됩니다. 파일 경로에서 js나 json 같은 확장자는 생략할 수 있습니다.

예제 코드에서 require 함수로 var.js에 있던 값들을 불러오고 있습니다. const { odd, even }은 ES2015+ 문법입니다. var.js의 module.exports에 담겨 있던 객체를 불러와 func.js에서 사용하는 모습입니다.

var.js에서 변수를 불러온 뒤, 숫자의 홀짝을 판별하는 함수를 선언했습니다. 그리고 다시 module.exports에 함수를 대입했습니다. 이렇게 다른 모듈(var.js)을 사용하는 파일을 다시 모듈(func.js)로 만들 수 있습니다. 또한, `module.exports`에는 객체만 대입해야 하는 것이 아니라 함수나 변수를 대입해도 됩니다.