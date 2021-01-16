# 웹 애플리케이션에서 함수 연결

## 소개 

* AWS API Gateway를 사용하여 웹 클라이언트(일반적으로 브라우저)에서 Lambda 함수를 호출할 수 있는 RESTful API 생성
* API Gateway는 Step01d에서 생성한 HTML 클라이언트와 Step 2에서 생성한 서버리스 백엔드 사이의 중간 계층 역활

## 배우게 될 내용

* API Gateway를 사용하여 새 API 생성
* API 에서 HTTP(Hypertext Transfer Protocol) 메소드 정의
* API 에서 Lambda 함수 트리거
* 웹 사이트에서 사용할 수 있도록 API에서 CORS 활성화
* AWS Management Console 에서 API Gateway로 생성한 API 테스트

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.12.20%20PM.png)

## 주요 개념

* **RESTful API** : REST는 Representational State Transfer를 의미. 웹 서비스를 생성하기 위한 아키텍처 패턴. API는 애플리케이션 프로그램 인터페이스 의미
* **HTTP 요청 메서드** : HTTP 메서드는 클라이언트와 서버 간의 통신을 지원하도록 설계. HTTP 프로토콜에 의해 정의되는 GET 또는 PUT 과 같은 메서드 리소스 
* **CORS**: CORS(Cross Origin Resource Sharing) 메커니즘은 HTTP 헤더를 사용하여 지정된 웹 애플리케이션을 한 오리진(도메인)에서 실행하고 대상 오리진의 서버에서 선택된 리소스에 엑세스할 권한을 부여하도록 브라우저에 지시
* **엣지 최적화** : 전 세계의 클라이언트에 보다 효과적으로 서비스를 제공하기 위해 AWS 글로벌 인프라를 사용하는 리소스

## 새 REST API 생성

API Gateway 콘솔에 로그인 https://ap-northeast-2.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-2

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.41.50%20PM.png)

**API 유형** > **REST API** 의 **구축** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.47.58%20PM.png)

**새 API** 선택
* **API 이름** : HelloWorldAPI
* **엔드포인트 유형** : 최적화된 에지

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.50.11%20PM.png)

**API 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.51.28%20PM.png)

## API 새 리소스 및 메서드 생성

리소스 > 작업 > 메서드 생성
![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.53.50%20PM.png)


**POST** 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.54.54%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.55.52%20PM.png)

새 매서드의 통합 포인트를 선택

* **통합 유형** : Lambda 함수
* **Lambda 프록시 통합 사용** : 체크하지 않음 (기본 값)
* **Lambda 리전** : ap-northeast-2 (기본 값)
* **Lambda 함수** : HelloWorldFunction
* **기본 제한 시간 사용** : 체크 (기본 값)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%201.58.23%20PM.png)

**저장** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_2_01_17_PM.png)

**확인** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_2_03_03_PM.png)

리소스 > 작업 > **CORS 활성화** 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_2_03_54_PM.png)

**CORS 활성화 및 기존의 CORS 헤더 대체** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.17.45%20PM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.18.49%20PM.png)

**예, 기존 값을 대체하겠습니다.** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.19.42%20PM.png)

## API 배포

리소스 > 작업 > **API 배포** 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_2_24_04_PM.png)

* **배포 스테이지** : 새 스테이지
* **스테이지 이름** : dev

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-16_at_2_26_53_PM.png)

**배포** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.28.20%20PM.png)

## API 테스트

리소스 > 메서드 > POST > **테스트** 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.30.13%20PM.png)

요청 본문에 다음 내용 입력

```json
{
    "firstName":"SungKwang",
    "lastName":"Song"
}
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.31.49%20PM.png)

**테스트** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-16%20at%202.32.53%20PM.png)