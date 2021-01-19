# AWS 소개

## AWS 서비스를 이용한 웹 애플리케이션 개발 실습 

* [AWS 계정생성(가입)](../introduction-to-development-tools/aws/create-account.md)
* [AWS LightSail 생성](../introduction-to-development-tools/aws/lightsail.md)
* [AWS Amplify 를 이용한 웹 애플리케이션 개발](./build-a-web-application/)


## Free Tier 사용시 주의 사항

* [예상치 않은 비용 방지](https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html)

### AWS 프리 티어 만료

* 프리 티어 기간이 만료된 후 계정에 할당된 리소스에 비요이 청구되기 시작
* [AWS Management 콘솔](https://console.aws.amazon.com/console/home)에서 사용 중인 리소스 확인
* 리소스 확인은 **각 리전별로 확인**



## AWS 비용 0.1 USD 이상 발생시 경보 생성

AWS CloudWatch 콘솔 > 결제

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-19%20at%206.16.37%20PM.png)

**경보 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-19%20at%206.19.46%20PM.png)


### 1. 지표 및 조건지정

**지표 선택** 버튼 클릭

* **네임스페이스** : AWS/Billing
* **지표이름** : EstimateCharges
* **Currency** : USD
* **통계** : 최대 
* **기간** : 6시간
* **임계유형** : 정적
* **경보조건** : 보다 큼 
* **임계값** : 0.1

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-19%20at%206.25.26%20PM.png)

**다음** 버튼 클릭

### 2. 작업 구성 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-19%20at%209.20.01%20PM.png)

* **경보 상태 트리거** : 경보 상태 
* **SNS 주제 선택** : 새 주제 생성
* **새 주제 생성...** : sns-topic-avoid-billing
* **알림을 수신할 이메일 엔드포인트** : sungkwang.me@gmail.com

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-19%20at%209.25.19%20PM.png)

**주제 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.35.48%20AM.png)

**SNS 콘솔에서 보기** 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-19_at_9_26_38_PM.png)

이메일 인증을 완료하기 이전까지 상태는 **확인 대기 중**
이메일 확인 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_12_33_54_AM.png)

이메일 본문의 **Confirm subscription** 링크 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_12_34_16_AM.png)

AWS SNS 콘솔에서 구독 상태를 확인하면 **확인됨** 상태로 변경 확인

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_12_34_23_AM.png)

다시 CloudWatch > 경보 > 경보생성 > **작업 구성** 단계로 돌아감

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.35.48%20AM.png)

**다음** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.50.45%20AM.png)

* **경보 이름** : AvoidBillingAlarm
* **경보 설명** : 0.1 USD 이상 요금 발생 시 알림(이메일 알림)

**다음** 버튼 클릭

## 3.미리 보기 및 생성

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.52.50%20AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.52.54%20AM.png)

**경보 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%2012.54.35%20AM.png)

## 결제 기본 설정

홈 > 기본 설정 > **결제 기본 설정**

https://console.aws.amazon.com/billing/home?region=ap-northeast-2#/preferences


* **프리 티어 사용량 알림 받기** : 체크
    * **이메일 주소** : AWS 알림 받을 이메일주소 (예. sungkwang.dev@gmail.com)
* **결제 알림 받기** : 체크

**기본 설정 저장** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%201.02.20%20AM.png)

**결제 알림 관리** 링크 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%201.03.12%20AM.png)

