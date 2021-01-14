# 공공데이터 활용

공공데이터란 공공기관이 만들어내는 모든 자료나 정보등 공적인 정보를 말합니다.
<br>각 공공기관이 보유한 공공데이터 목록과 국민에게 개발할 수 있는 공공데이터를 포털에 등록항여 모두가 공유하여 사용할 수 있는 공공데이터가 됩니다.
<br>
<br>공공데이터는 [공공데이터포털 사이트](https://www.data.go.kr/index.do)에서 카테고리 별로 검색하여 사용할 수 있습니다.
<br>
<br>사이트에 최초로 접속하면 검색 창이 가장 먼저 뜹니다.
<br>하단에 검색 조건을 사용하여 원하는 데이터를 조회할 수 있습니다.

## 오픈 API

오픈 API로 제공하고 있는 데이터도 존재합니다.
<br>[오픈 API](https://www.data.go.kr/ugs/selectPublicDataUseGuideView.do)란 누구나 사용할 수 있도록 공개된 API를 말합니다.
<br>데이터를 표준화하고 프로그래밍 하여 외부 소프트웨어 개발자나 사용자들과 공유할 수 있습니다.

> **API란?** <br>
> Application Programming Interface 의 약자로 응요 프로그맹 프로그래밍 인터페이스를 말합니다.
> 다양한 응용 프로그램에 사용할 수 있는 운영 체제, 혹은 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만튼 인터페이스입니다,


## 오픈 API 활용 신청

1. 회원가입을 한 후 로그인을 합니다.

2. 활용할 API를 키워드, 검색 조건 등을 이용하여 검색합니다.

3. 검색 결과 중 오픈 API 탭을 클릭합니다. (오픈 API로 제공하는 데이터만 활용 신청이 가능.)

4. API로 활용하고 싶은 데이터를 클릭합니다.

5. 오른쪽 상단의 활용신청 버튼을 클릭합니다.

6. 필수항목인 활용목적을 입력한 후 제공하는 상세기능정보를 선택한 후 하단의 활용신청 버튼을 클릭합니다.

7. 신청이 완료되면 상단에 완료 되었다는 안내창이 뜹니다. 확인을 누른 후 창을 닫아 줍니다.

8. 마이페이지 > 오픈 API > 개발계정 메뉴에서 신청한 API 목록을 볼 수 있습니다.

## 개발계정 상세보기

마이페이지 > 오픈 API > 개발계정 메뉴에서 사용할 API를 선택합니다.
<br>개발계정 상세보기 페이지에서 서비스유형, 일반인증키, end point, 데이터 포맷 등을 확인 할 수 있습니다.

<img>

활용신청 상세기능정보에서 어떤 정보들을 전달하는지, 일일 트래픽, 미리보기등으로 상세한 API 정보를 알 수 있습니다.
<br> 어떤 변수를 요청하여 데이터를 얻을 수 있는지에 대한 정보를 알 수 있습니다.

<img>

## API 요청 실습

API를 요청하기 전에 node로 간단한 서버를 요청하는 코드를 작성합니다.

<br>**api-test.js** 파일을 생성하여 정의합니다.
<br>node에서 기본으로 제공하는 모듈 중 하나인 http 를 사용하여 8000 포트로 서버를 띄우는 코드입니다.
<br>응답 결과의 타입은 text이며 "Hello nodejs"를 반환합니다.

```javascript
const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello nodejs');
    response.end();
}).listen(8000);
```

터미널에서 api-test.js를 생성한 경로에서 작성한 코드를 실행해봅니다.

```
$ node api-test.js
```

실행 결과 아래와 같이 응답합니다.
지정한 텍스트로 응답하는 것을 확인 할 수 있습니다.

<img>

이번에는 위의 코드를 api를 요청하여 결과 값을 반환하는 코드로 정의합니다.










<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter07/images/react-main.png" style="max-width:350px;max-height:400px">


