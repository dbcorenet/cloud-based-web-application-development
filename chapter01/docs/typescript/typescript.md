# **TypeScript에 대하여**


## **JavaScript의 문제점**

### 동적 타이핑

자바스크립트는 변수의 타입이 정해져 있지 않고 변수에 할당되는 값에 따라 변수의 타입이 아래와 같이 정해집니다.

```javascript
var value = 10;

console.log(typeof(value));     // number 출력

var value = 'hello';

console.log(typeof(value));     // string 출력
```

위와 같이 변수에 숫자 10이 할당되면 value 변수는 number, 'hello'가 할당되면 변수는 string으로 타입이 동적으로 변하는 것을 알 수 있습니다.  

하지만 프로그래밍 시 코딩된 모든 변수를 예외 없이 정확하게 사용한다면 편리함을 제공할 수 있지만 현실적으로 프로그래머가 모든 예외 없이 변수들을 제어하기에는 어려움이 있습니다.  
예를들어 javascript에서 아래와 같은 상황이 있다고 가정해 봅니다.  

```javascript
var num = 1;
num += 1;
console.log(typeof(num));       // number 출력
console.log(num);       // 2 출력

...
...
...

num = 'str';
console.log(typeof(num));       //string 출력

...
...

num += 1;       // str1 반환
```

어떤 프로그램에서 num 이라는 변수에 1을 할당하고 number로써 사용하다가 예기치 못한곳에서 num에 'str'이라는 값이 할당된다고 가정해봅니다.  
그러면 앞으로 num은 string 형으로 사용되고 후에 num이 number라고 생각하고 num 에 1 을 더하는 연산을 사용하지만 이미 string으로 변환된 num은 str1 (문자열 + 숫자는 문자열이 합쳐지는 결과) 이라는 결괄르 반환하게 됩니다.  
이렇게 되면 예기치 못하는 부분에서 다른 결과값 혹은 에러를 발생시킬수 있습니다.

<br>

### 배열

위의 동적 타이핑의 문제로 발생할 수 있는 대표적인 문제점에 배열관련 연산도 포함됩니다.  
score에 배열을 할당하고 사용하다가 누군가가 score에 배열이 아닌 단일 요소를 할당했다고 가정합니다.  

```javascript
var socre = [1,2,3,4,5,6];

console.log(socre.slice(2,4));      // [3,4] 반환

socre = 10;

console.log(socre,slice(2,4));      // "Unacught TypeError: socre.slice is not a function" 에러 발생
```

위의 코드 처럼 score 변수를 배열로 사용하기 위해 선언 후 score.slice(2,4) (배열의 2, 4 번째 요소를 잘라서 배열로 반환) 로 배열의 요소를 확인합니다.  

확인 후 누군가 score 배열 변수에 10이라는 number 타입의 단일 요소를 할당하고 난 후 다시 배열의 함수 score.slice를 사용한다면 socre 변수는 더이상 배열 타입이 아니기 때문에 타입에러가 발생 합니다.  

<br>

### 동등 비교

자바스크립트는 따옴표로 묶인 숫자가 있으면 문자열로 판단하지만 if 문에서 숫자 상수와 비교하면 자동으로 문자열을 숫자로 변환하여 비교를 시도 합니다.  
아래의 예시 코드로 문제를 확인할 수 있습니다.

```javascript
var result = '1';

console.log(result == 1);       // true 출력

console.log(result === 1);      // false 출력
```

위와 같은 비교가 프로그래머가 의도한 것일 수도 있지만 때로는 직관적으로 동등 값이 같으냐 다르냐는 비교를 원하는 경우도 있을 수 있습니다.  
소규모 애플리케이션의 경우 적절한 타입을 전달했는지 확인할 수 있지만 대교모 애플리케이션에서는 그렇게 하는 것이 쉽지 않습니다.  
그래서 == 비교 대신 타입과 값을 모두 확인하는 === 비교 연산자를 사용하는 경우도 있습니다. 

<br>


## **TypeScript 소개**

TypeScript는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이고 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원합니다. 클라이언트 사이드와 서버 사이드를 위한 개발에 사용할 수 있다.
그리고 TypeScript는 크로스플랫폼 언어이며 윈도우, 리눅스 및 맥OS에서 작동합니다.  

어떤 웹 애플리케이션도 대규모로 개발하다보면 자바스크립트의 유효성 검사, 탐색, 애플리케이션의 작업관리, UI 렌더링 호출 등을 사용하게 됩니다.  
자바스크립트로 작성하다 보면 위에서 소개한 단점 뿐만 아니라 여러가지 이유로 의도하지 않은 동작과 런타임 오류가 발생하게 됩니다.  
TypeScript는 이러한 복잡성을 관리할 수 있어 정적 타입 결정, 모듈 및 클래스를 사용한 캡슐화, 사용자 정의 타입, 인터페이스 등과 같은 기능을 제공합니다.  

<br>


### **TypeScript의 장점**

TypeScript는 JavaScript의 상위 집합입니다.  
그래서 모든 JavaScript 코드는 TypeScript의 코드도 됩니다.  
예를 들어 기존 JavaScript 코드를 가져와서 TypeScript 파일에 복사하면 그대로 컴파일이 됩니다.  
따라서 JavaScript에 익숙한 개발자라면 쉽게 TypeScript로 전환할 수 있습니다.

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/ts-superset.png)

<br>

JavaScript에는 string, number, boolean 과 같은 몇 가지 타입이 있는데 TypeScript에는 거기에 Tuple, Enum 및 Never 같은 몇 가지 기본 타입을 추가했습니다.  
그리고 TypeScript를 사용하면 객체지향 방식으로 고유한 사용자 정의 타입을 만들수도 있습니다.

<br>

어떤 타입을 가진 TypeScript도 JavaScript로 컴파일 되므로 모든 웹 브라우저, 플랫폼 혹은 Node.js를 사용하는 서버에서도 실행할 수 있습니다.  
왜나하면 TypeScript 구문은 개발사 마이크로소프트 기술에만 국한하지 않고 JavsScript ECMA 표준을 따른기 때문입니다.  
TypeScript에서는 ES6 따르지만 일부 ES7의 기능도 지원합니다.

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/ts-compile.png)

<br>

Visual Studio, Visual Studio Code, Sublime, Atom 등과 같이 TypeScript를 개발하는 데 사용할 수 있는 다양항 에디터가 존재합니다.  
이러한 에디터를 사용하는 경우 인텔리센스 코드 완성 ( 자동 완성 ), 묵맥을 고려하여 코드를 자동으로 완성하여 오타나 일반적인 오류를 줄입으로써 개발 생산성을 향상시켜 줍니다.  


## **Javascript var의 문제점과 let과 const**

TypeScript의 소개 및 Javascript와 비교 전에 JavaScript의 var 변수와 let, const에 대해 설명하겠습니다.  

ES5 까지는 var가 변수 선언의 유일한 방법이었습니다. 하지만 var의 몇가지 문제점 때문에 ES6 부터는  let과 const를 이용한 변수 선언이 가능해졌습니다.  

<br>

### **var의 문제점**

**첫 번째 문제점, 함수 스코프**

var로 정의된 변수는 함수 스코프를 가집니다.  
아래의 코드와 같이 함수 영역을 벗어나면 사용할 수 없습니다.  

```javascript
function example() {
    var i = 0;
}

console.log(i);     // 에러 발생

function example2() {
    j = 0;
}

console.log(j);     // 0 출력
```

그리고  var 키워드 없이 변수에 값을 할당하는 경우는 전역 변수로 인식하여 사용합니다.  

예를 들어 for 반복문을 사용하기 위해 아래와 같이 변수 선언 후 사용하는 코드가 있다고 가정하빈다.  

```javascript
function example() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);     // 10 출력
}
```

위와 같이 i 가 10을 출력하는 것은 var가 함수 스코프 이기 때문입니다.  
for 뿐만 아니라 우리가 자주 사용하는  while, if, switch 등의 함수 내부에서도 마찬가지입니다.  
위와 같은 함수스코프의 문제점은 가독성이 떨어지고 코드의 유지보수가 어려워 진다는 것입니다. 

<br>


**두 번째 문제점, 호이스팅**

먼저 호이스팅은 var로 정의된 변수는 그 변수가 속한 스코프내에서 최상위로 끓어올려지는 것을 의미 합니다.   
먼저 아래의 코드를 보겠습니다.  

```javascript
console.log(myVar); // undefined
var myVar = 1;
}
```

위 코드를 일반적인 프로그래머가 보면 당연히 선언되지 않은 변수를 참조했으므로 에러가 발생한다고 생각하지만 에러가 발생하지 않고 undefined 라고만 출력 됩니다.  
왜냐하면 myVar라는 변수가 호이스팅 되어 실제로 자바스크립트 엔진입장에서는 아래와 같은 코드로 변환 되기 때문입니다.  

```javascript
var myVar = undefined;
console.log(myVar); // undefined
myVar = 1;
}
```


그래서 아래와 같은 다른 프로그래밍 언어에서는 찾아보기 힘든 이상한 코드도 동작하게 됩니다.  

```javascript
console.log(myVar); // undefined
myVar = 1;
console.log(myVar); // 1 출력
var myVar = 2;
console.log(myVar); // 2 출력
```

이런 문제점은 마찬가지로 코드의 직관성 및 유지보수 등의 문제점을 가져올 수 있습니다.  


<br>

**세 번째 문제점, 재정의 가능**

var 키워드를 이용하여 변수 선언시 변수 재정의가 가능합니다.  

```javascript
var myVar = 1;
var myVar = 2;
```

위와 같이 myVar를 정의 했음에도 불구하고 재정의가 가능합니다.   
이렇게 눈으로 쉽게 볼수 있는 코드가 아니라 복잡한 코드에서 기존에 특정한 의미로 사용되는 변수가 다른 사람에 의해 갑자기 재정의 된다면 예기치 못하게 복잡한 오류를 만들어 낼 수 있습니다.  

<br>

**네 번째 문제점, 상수로 사용 불가능** 

위에서의 문제점 대로 var 변수는 어디에서도 쓸수 있고 재정의가 가능하기 때문에 상수로 사용할 수 없습니다.  

<br>


### **let과 const**

위의 여러가지 문제점으로 인해 ES6 부터는 let과 const 키워드를 이용하여 변수를 선언할 수 있습니다.  

<br>


**함수 스코프 대신 블록 스코프** 

기존의 var는 함수 스코프이므로 몇가지 문제가 발생했습니다.  
하지만 let은 블록 스코프 입니다. ( { } 으로 쌓여진 부분에서만 사용할 수 있는 스코프)

그래서 var과 다르게 let은 아래와 같은 결과를 보여 줍니다.

```javascript
let a = 'a1';
console.log(a); // a1 출력
if(true) {
    let a = 'a2';
    console.log(a); // a2 출력
}
console.log(a); // a1가 출력
```

<br>


**let과 const의 호이스팅** 

var의 경우 호이스팅이 일어나 변수를 선언하기도 전에 값을 할당하는 문제점이 있었습니다.  
하지만 let과 const를 변수를 선하기 전에 사용할 경우 에러를 발생시킵니다.  

```javascript
console.log(a); // 에러 발생
const a = 1;
```

실제로는 let과 const도 호이스팅이 일어납니다.  
하지만 변수가 정의된 위치와 호이스팅된 위치 사이에서 변수를 사용하려고 하면 에러가 발생합니다.

<br>

**const는 재할당 불가능**

var는 한번 선언한 변수에 계속해서 값을 변경하고 재정의가 가능하기 때문에 상수로써 사용하기 힘들었습니다.  
하지만 const는 한번 정의 후 재할당이 불가능하므로 상수로 사용 가능합니다.  


```javascript
const a = 1;
a = 'b' // 에러 발생
```

<br>


## **Javascript와 자바스크립트 비교**


먼저 아래와 같은 자바스크립트르 보겠습니다.  

```javascript
function getLargesNumber(arr) {
    result=0;
    for(index = 0; index <  arr.length; index++) {
        if(result < arr[index]) {
            result = arr[index];
        }
    }

    if(result > 0) {
        result = true;
    }

    else result = false;
    return result;
}

score = [1,2,3,4,5,6];
highestScore = getLargesNumber(score);
```

<br>

먼저 자바스크립트에서 위 코드는 아무문제 없이 동작 합니다.  
위 코드를 보면 getLargesNumber() 는 숫자배열을 받아 가장 큰 숫자를 리턴하는 함수 있니다.  
모든 변수는 키워드 없이 할당 했으니 전역 변수로 사용됩니다.  
그런데 함수 끝에 갑자기 0이 할당된 result에 true false 가 할당 됩니다. 
동작인 아무 문제 없지만 예상과는 다르게 highestScore에 true 혹은 false boolean 값이 할당됩니다.  

자바스크립트에서 문제 없었던 위 코드를 타입스크립트에 넣어 보겠습니다.  

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/ts-js1.png)

<br>

타입스크립트에서는 선언하지 않은 변수를 사용했다고 Cannot find name 'result' 라는 에러가 발생하는 것을 알 수 있습니다.  
타입스크립트에서는 에러 발생시 컴파일이 되지 않으므로 에러를 수정후 컴파일 해야 합니다.  

아래의 화면은 변수 선언 관련 해소를 위해 let 키워드를 통해 변수를 선언한 후 의 화면입니다.  

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/ts-js2.png)

<br>

변수 선언 문제를 해결후에는 result라는 변수에는 true 라는 boolean 값을 할당할수없다는 에러를 발생 시킵니다.  
왜냐하면 let result = 0 ; 으로 result라는 변수에는 number형으로 선언 되어 있기 때문입니다.  


## **TypeScript 기본 사용방법**

### 기본타입

타입스크립트에서는 변수의 타입을 지정해주어야 합니다.
지정하는 문법은 아래의 코드들로 설명하겠습니다.  

**불리언**

JavaScript처럼 마찬가지로 true/false 를 사용하여 불리언 타입을 지정할 수 있습니다.

```typescript
let isDone: boolean = false;
```
<br>  

**숫자(Number)**

JavaScript처럼, TypeScript의 모든 숫자는 부동 소수 값입니다. 부동 소수에는 number라는 타입이 붙혀집니다    TypeScript는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에 소개된 2진수, 8진수 리터럴도 지원합니다.  

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
<br>  


**문자열(String)**

다른 언어들처럼, TypeScript에서는 텍스트 데이터 타입을 string으로 표현합니다.   
JavaScript처럼 TypeScript도 큰따옴표 (")나 작은따옴표 (')를 문자열 데이터를 감싸는데 사용합니다.


```typescript
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;
```

sentence를 다르게 표현하면 아래와 처럼도 사용할 수 있습니다. 


```typescript
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

<br>  


**문자열(String)**

TypeScript는 JavaScript처럼 값들을 배열로 다룰 수 있게 해줍니다. 배열 타입은 두 가지 방법으로 쓸 수 있습니다.   
첫 번째 방법은, 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것입니다

```typescript
let list: number[] = [1, 2, 3];
```

두 번째 방법은 제네릭 배열 타입을 쓰는 것입니다.

```typescript
let list: Array<number> = [1, 2, 3];
```

<br>

**Any**

애플리케이션을 만들 때, 알지 못하는 타입을 표현해야 할 수도 있습니다.  
이 값들은 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠에서 올 수도 있습니다.   
이 경우 타입 검사를 하지 않고, 그 값들이 컴파일 시간에 검사를 통과 됩니다 .

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; 
```

위 같은 경우는 기존 자바스크립트의 변수 문제점을 다시 가질수 있으므로 꼭 필요한 경우가 아니면 사용하지 않는 것을 추천합니다.  

<br>

**Void**

void는 보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 쓰이는 것을 볼 수 있습니다.

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

<br>
<br>

### 함수

함수는 JavaScript로 된 모든 애플리케이션에서의 기본적인 구성 요소입니다.   
TypeScript에서는 표준 JavaScript 함수가 작업을 수월하게 하도록 몇 가지 새로운 기능을 추가합니다.  


**함수 선언**

TypeScript 함수는 JavaScript와 마찬가지로 기명 함수(named function)과 익명 함수(anonymous function)로 만들 수 있습니다.  
이를 통해 API에서 함수 목록을 작성하든 일회성 함수를 써서 다른 함수로 전달하든 애플리케이션에 가장 적합한 방법을 선택할 수 있습니다.

아래는 JavaScript에서의 함수 생성의 예입니다


```javascript
fucntion add(x, y) {
  return x + y;
}

// 익명 함수
let myAdd = function(x, y) { return x + y };
```

아래 코드는 같은 함수를 TypeScript에서 함수의 선언한 코드입니다.  


```typescript
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y };
```


**타입 추론**

TypeScript 컴파일러는 방정식의 한쪽에만 타입이 있더라도 타입을 알아낼수 있습니다.   
JavaScript와 TypeScript에서 let result = 0; 이 그 예 입니다.


```typescript
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y };
```


## **TypeScript 컴파일 해보기**


먼저 TypeScript를 사용하기 위해 NPM(Node Package Manager) 를 통해 TypeScript를 설치해야 합니다.  


```
npm install -g typescript
```

TypeScript가 정상적으로 설치 되었다면 버전을 확인하는 명령어로 버전을 확인할 수 있습니다. 

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/tsc-v.png)




이후 원하는 경로에 빈 디렉토리를 만들고 디렉토리  내에서 TypeScript 빈 프로젝틀르 생성합니다. 
TypseScript 프로젝트를 생성하는 명령어는 아래와 같습니다.  


```
tsc --init
```

프로젝트가 생성되면 아래와 같은 tsconfig.json 이라는 파일이 생성된것을 확인할 수 있습니다.  
이 파일은 TypeScript 컴파일시 필요한 설정을 담은 파일입니다.  


![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/tsc-ll.png)


이후 위에서 사용했던 TypeScript , JavaScript 비교 에서 사용한 코드를 사용하여 .ts 파일을 만들고 컴파일 해보겠습니다. 

컴파일 방법은 아래 명령어로 진행 합니다.  
```
tsc 파일명.ts
```

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/tsc-compile.png)

위의 컴파일 결과를 보면 에디터에서도 확인했단 number 타입의 변수에 boolean 값이 들어가 에러가 났던 모습을 커맨드라인에서 한번도 확인할 수 있습니다.  


## **TypeScript 수정하기**

위으 예제 코드를 TypeScript 문법으로 수정해 보겠습니다.

```typescript
function getLargesNumber(arr: Array<number>): number {
    let result :number=0;
    for(let index :number = 0; index <  arr.length; index++) {
        if(result < arr[index]) {
            result = arr[index];
        }
    }

    return result;
}

let score: Array<number>  = [1,2,3,4,5,6];
let highestScore: number = getLargesNumber(score);
```


수정 후 다시 컴파일을 하면 제대로 컴파일 되고 결과물로 test.js 라는 JavaScript 파일이 생되는 것을 알 수 있습니다. 

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/ts-compile-result.png)

<br>

![web page](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/tsc-compile-js.png)





