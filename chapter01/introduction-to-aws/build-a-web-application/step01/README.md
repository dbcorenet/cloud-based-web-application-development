# Step01. 소개 및 웹 애플리케이션 만들기

## 소개

* [AWS Amplify 콘솔]을 사용하여 웹 애플리케이션을 위한 정적 리소스를 배포
* AWS Lambda 및 AWS API Gateway를 사용하여 원격 RESTful API 호출 
* HTML, CSS, JavaScript, 이미지, 기타 파일을 비롯한 정적 웹 콘텐츠 AWS Amplify 호스팅
* 정적 웹 사이트 호스팅


## AWS Amplify 콘솔을 사용하여 웹 애플리케이션 만들기

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%2012.01.57%20AM.png)

새 파일 `index.html` 생성하여 다음 내용을 저장

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World</title> 
</head>
<body>
    Hello World
</body>
</html>
```

HTML 파일을 `myapp.zip` 파일이름으로 압축 

```
zip myappp.zip index.html
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.40.27%20PM.png)


## AWS Amplify 콘솔 접속

AWS Amplify 콘솔 로그인 https://ap-northeast-2.console.aws.amazon.com/amplify/home?region=ap-northeast-2#/

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.30.38%20PM.png)

**GET STARTED** 버튼 클릭 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.33.23%20PM.png)

Host your web app 의 **Get started** 버튼 클릭

## AWS Amplify 에서 웹 애플리케이션 배포

**Git 공급자 없이 배포(Deploy without Git provider)** 선택 > **Continue** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.43.52%20PM.png)


Manual deploy 에서 다음 내용 입력

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.48.00%20PM.png)


* **App name** : GettingStarted
* **Environment name** : dev
* **Method** : Drag and drop

**Choose files** 버튼클릭 > 앞에서 생성한 `myapp.zip` 파일 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.54.26%20PM.png)

**Save and deploy** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.55.22%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.55.50%20PM.png)

Amplify 에 등록된 웹 애플리케이션 **Domain** 에 만들어진 URL을 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.59.19%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%2011.59.34%20PM.png)

