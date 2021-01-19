# Step02. 서버리스 함수 작성

## 소개 

* 웹 페이지에 상호기능을 추가 하기위해 JavaScript로 서버리스 함수 작성
* 서버리스 함수는 코드에 정의하는 특정 이벤트에 따라 트리거 됨

## 배우게 될 내용 

* AWS 콘솔을 사용하여 Lambda 함수 JavaScript로 새로 작성
* AWS 콘솔에서 함수를 테스트하는 이벤트 작성 (JSON)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.01.07%20AM.png)

## AWS Lambda 함수 생성 및 구성

AWS Lambda 콘솔에 로그인 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.00.31%20AM.png)

**함수 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.07.30%20AM.png)


* **새로 작성** 선택 
* **함수이름** : HelloWorldFunction
* **런타임** : Node.js 12.x

내용을 입력한 뒤 **함수 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_1_12_06_AM.png)


## 함수 코드 수정 및 배포


**함수 코드** 에서 `index.js` 의 내용을 다음 코드로 변경

```javascript
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Extract values from event and format as strings
    let name = JSON.stringify(`Hello from Lambda, ${event.firstName} ${event.lastName}`);
    // Create a JSON object with our response and store it in a constant
    const response = {
        statusCode: 200,
        body: name
    };
    // Return the response constant
    return response;
};
```

**배포** 버튼 클릭

## 함수 테스트

**테스트** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.18.06%20AM.png)


* **새로운 테스트 이벤트 생성** 선택
* **이벤트 템플릿** : hello-world
* **이벤트 이름** : HelloWorldTestEvent

JSON 객체 입력폼에 다음과 같이 자신의 이름을 가지고 내용으로 수정 

```json
{
"firstName": "SungKwang",
"lastName": "Song"
}
```
![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.22.13%20AM.png)

**생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_1_23_12_AM.png)

생성한 테스트 이벤트를 선택하고 **테스트** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_1_26_48_AM.png)

