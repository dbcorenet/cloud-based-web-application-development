# 웹 애플리케이션에서 상호 작용 기능 추가

## 소개

## 배우게 될 내용

* HTML 페이지에서 API Gateway API 호출
* Amplify 콘솔에 웹 애플리케이션의 새 버전 업로드

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.22.05%20PM.png)


# Amplify 를 사용하여 웹 애플리케이션 업데이트

* `index.html` 파일을 다음 내용으로 수정
* API URL을 [chapter03](../step03/) 에서 만든 API Gateway의 URL 주소로 수정 (예. https://q0ktey2z3b.execute-api.ap-northeast-2.amazonaws.com/dev)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
    <!-- Add some CSS to change client UI -->
    <style>
    body {
        background-color: #232F3E;
        }
    label, button {
        color: #FF9900;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-left: 40px;
        }
     input {
        color: #232F3E;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-left: 20px;
        }
    </style>
    <script>
        // define the callAPI function that takes a first name and last name as parameters
        var callAPI = (firstName,lastName)=>{
            // instantiate a headers object
            var myHeaders = new Headers();
            // add content type header to object
            myHeaders.append("Content-Type", "application/json");
            // using built in JSON utility package turn object to string and store in a variable
            var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
            // create a JSON object with parameters for API call and store in a variable
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            // make API call with parameters and use promises to get response
            fetch("YOUR-API-INVOKE-URL", requestOptions)
            .then(response => response.text())
            .then(result => alert(JSON.parse(result).body))
            .catch(error => console.log('error', error));
        }
    </script>
</head>
<body>
    <form>
        <label>First Name :</label>
        <input type="text" id="fName">
        <label>Last Name :</label>
        <input type="text" id="lName">
        <!-- set button onClick method to call function we defined passing input values as parameters -->
        <button type="button" onclick="callAPI(document.getElementById('fName').value,document.getElementById('lName').value)">Call API</button>
    </form>
</body>
</html>
```

## 로컬 테스트

터미널에서 `index.html` 파일 디렉토리 이동 후 python 내장 웹 서버 실행

```
python3 -m http.server
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.35.49%20PM.png)

* 브라우저에서 http://localhost:8000/ 주소로 접속
* First Name 과 Last Name 에 데이터 입력 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.32.16%20PM.png)

**Call API** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.32.26%20PM.png)

브라우저 웹 개발 툴 (Chrome 경우 Web Inspector)을 이용하여 HTTP 요청과 응답 확인

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.32.30%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.32.33%20PM.png)

`index.html` 파일을 `myapp_v2.zip` 파일 이름으로 압축 

```
zip myappp_v2.zip index.html
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.43.38%20PM.png)

AWS Amplify 콘솔 > **GettingStarted** > Choose files 클릭 후 `myapp_v2.zip` 파일 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.52.16%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.52.06%20PM.png)

## 테스트

Amplify 에 등록한 웹 애플리케이션의 **Domain** 주소 클릭 (예제. https://dev.d2y1ucn8c2wuav.amplifyapp.com)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.59.54%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%2010.01.21%20PM.png)