# 데이터 테이블 생성

## 소개

## 배우게 될 내용

* AWS Management Console 을 이용하여 DynamoDB 테이블 생성
* IAM 을 사용하여 역활 생성 및 권한 관리
* AWS SDK를 이용하여 DynamoDB 테이블에 데이터 쓰기 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.49.45%20PM.png)

## DynamoDB 테이블 생성

DynamoDB 콘솔에 로그인 https://ap-northeast-2.console.aws.amazon.com/dynamodbv2/home?region=ap-northeast-2#service

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.10.17%20PM.png)

**테이블 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.11.07%20PM.png)

* **테이블 이름** : HelloWorldDatabase
* **파티션 키** : ID
* **정렬 키** : 비워둠 (기본 값)
* **설정** : 기본설정 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.15.26%20PM.png)

**테이블 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.16.24%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.16.46%20PM.png)

## IAM 정책 생성하여 Lambda 함수에 추가

AWS Lambda 콘솔 오픈 > HelloWorldFunction 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_8_20_39_PM.png)

**권한** 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_8_22_29_PM.png)

역할 이름 링크 클릭 (예제에서는 HelloWorldFunction-role-nfg7r9e)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_8_33_39_PM.png)

**인라인 정책 추가** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.35.16%20PM.png)

**JSON** 탭 클릭

다음 내용 추가 `Resource` 속성 값은 앞에서 만든 DynamoDB의 ARN으로 수정

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "dynamodb:PutItem",
                "dynamodb:DeleteItem",
                "dynamodb:GetItem",
                "dynamodb:Scan",
                "dynamodb:Query",
                "dynamodb:UpdateItem"
            ],
            "Resource": "YOUR-TABLE-ARN"
        }
    ]
}
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_8_40_10_PM.png)

**정책 검토** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.41.47%20PM.png)

* **이름** : HelloWorldDynamoDBPolicy

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%208.43.37%20PM.png)

**정책 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_8_44_19_PM.png)

## DynamoDB 테이블에 데이터를 쓰도록 Lambda 함수 수정

AWS Lambda 콘솔 > 함수 > HelloWorldFunction > **함수코드** 내용 수정

```javascript
// Include the AWS SDK module
const AWS = require('aws-sdk');
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Use built-in module to get current date & time
let date = new Date();
// Store date and time in human-readable format in a variable
let now = date.toISOString();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Extract values from event and format as strings
    let name = JSON.stringify(`Hello from Lambda, ${event.firstName} ${event.lastName}`);
    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'HelloWorldDatabase',
        Item: {
            'ID': name,
            'LatestGreetingTime': now
        }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
    await dynamodb.put(params).promise();
    // Create a JSON object with our response and store it in a constant
    const response = {
        statusCode: 200,
        body: name
    };
    // Return the response constant
    return response;
};
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_9_12_24_PM.png)

**배포** 클릭 

## 테스트

AWS Lambda 콘솔 > 함수 > HelloWorldFunction > **테스트** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_9_14_46_PM.png)

AWS DynamoDB 콘솔 > 테이블 > HelloWorldDatabase

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%209.16.20%20PM.png)







