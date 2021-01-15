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

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-1.png" style="max-width:350px;max-height:400px">

2. 활용할 API를 키워드, 검색 조건 등을 이용하여 검색합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-2.png" style="max-width:350px;max-height:400px">

3. 검색 결과 중 오픈 API 탭을 클릭합니다. (오픈 API로 제공하는 데이터만 활용 신청이 가능.)

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-3.png" style="max-width:350px;max-height:400px">

4. API로 활용하고 싶은 데이터를 클릭하여 상세보기 페이지에서 오른쪽 상단의 활용신청 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-4.png" style="max-width:350px;max-height:400px">

5. 필수항목인 활용목적을 입력한 후 제공하는 상세기능정보를 선택한 후 하단의 활용신청 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-5.png" style="max-width:350px;max-height:400px">

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-5-1.png" style="max-width:350px;max-height:400px">

6. 신청이 완료되면 상단에 완료 되었다는 안내창이 뜹니다. 확인을 누른 후 창을 닫아 줍니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-6.png" style="max-width:350px;max-height:400px">

7. 마이페이지 > 오픈 API > 개발계정 메뉴에서 신청한 API 목록을 볼 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-application-7.png" style="max-width:350px;max-height:400px">

## 개발계정 상세보기

마이페이지 > 오픈 API > 개발계정 메뉴에서 사용할 API를 선택합니다.
<br>개발계정 상세보기 페이지에서 서비스유형, 일반인증키, end point, 데이터 포맷 등을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-accunt-view-1.png" style="max-width:350px;max-height:400px">

활용신청 상세기능정보에서 어떤 정보들을 전달하는지, 일일 트래픽, 미리보기등으로 상세한 API 정보를 알 수 있습니다.
<br>확인 버튼을 클릭하면 어떤 변수를 요청하여 데이터를 얻을 수 있는지에 대한 정보를 알 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/data-accunt-view-2.png" style="max-width:350px;max-height:400px">

## API 요청 실습

API를 요청한 후 응답 결과를 테스트 하기 위해서 크롬 확장 프로그램을 사용합니다.

[크롬 확장 프로그 Taled API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm) 을 사용합니다.

1. 확장 프로그램 설치 페이지로 이동하여 **Chrome에 추가** 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-1.png" style="max-width:350px;max-height:400px">

2. 앱의 권한을 확인 후 **확장 프로그램 추가** 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-2.png" style="max-width:350px;max-height:400px">

3. 오른쪽 상단에 추가된 확장 프로그램 아이콘을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-3.png" style="max-width:350px;max-height:400px">

4. Free Edition 을 사용한다는 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-4.png" style="max-width:350px;max-height:400px">

5. METHOD, 호스트, 쿼리 파라미터, 헤더, 바디를 설정할 수 있는 기능들을 제공합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-5.png" style="max-width:350px;max-height:400px">

6. 신청한 공공 데이터 API의 정보를 입력합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-6.png" style="max-width:350px;max-height:400px">

7. send 버튼을 클릭한 후 response 를 확인 합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/chrome-api-test-7.png" style="max-width:350px;max-height:400px">

## node로 api 요청 서버 생성

툴을 사용하여 api를 요청하면 문제가 발생하지 않지만, 리액트에서 ajax로 데이터를 요청하면 크로스 도메인 문제가 발생합니다.

### 크로스 도메인

ServerA는 여러분들이 만든 애플리케이션이고 ServerB 는 공공데이터 API 입니다.

<img src="https://miro.medium.com/max/1400/1*hlXnXvqN6SyjgOFw7sJ0-Q.png">

AJAX를 사용하여 클라이언트에서 직접 호출하게 되면 크로스 도메인 문제가 생깁니다.
<br>자바스크립트로는 CORS를 풀어주지 못하므로 클라이언트에서 웹 서버로 요청하고 웹 서버가 공공 API를 Nodejs로 요청한 뒤 결과를 json으로 만들어 클라이언트에서 응답을 받을 수 있도록 해야 합니다.

<img src="https://miro.medium.com/max/1400/1*Gr3T_pkgMBbZw4v6Mjcm0g.png">

### nodejs 서버 생성

1. nodejs 서버를 생성 할 디렉토리를 만든 후 파일을 만들어줍니다.

2. nodejs 서버 구동에 필요한 모듈을 설치합니다.

```
$ npm install -g request
$ npm install -g querystring
$ npm install express --save
```


3. '/api'로 요청이 들어오면 공공데이터 API를 요청한 결과 값을 반환하는 코드를 구현합니다.

```javascript
var express = require('express'),
    request = require('request'),
    app = express();
    qs = require('querystring')

app.all('/api', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    const sidoName = req.query.sidoName || '경남';
    const serviceKey = '발급받은 서비스 키';
    const queryString = {
        dataTerm : '3MONTH',
        InformCode : 'PM10',
        numOfRows : 100,
        returnType : 'JSON',
        sidoName : sidoName
    };
    const targetUrl=`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${serviceKey}&${qs.stringify(queryString)}`;
    request(targetUrl, function(e,r,data) {
        res.json(JSON.parse(data));
    });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});
```

4. 파일을 저장한 후 실행합니다.

```
$ node api-test.js
```

5. IP로 접속하여 결과 값을 확인합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter09/images/node-api-test-result.png" style="max-width:350px;max-height:400px">
