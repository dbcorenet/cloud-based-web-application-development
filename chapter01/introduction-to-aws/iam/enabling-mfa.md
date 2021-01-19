# 가상 멀티 팩터 인증(MFA) 활성화

## 소개 
* 스마트폰 앱을 사용하여 가상 MFA(Multi-factory authentication) 디바이스로 사용할 수 있음
* 표준 기반 TOTP(시간 기반 일회용 암호) 알고리즘 RFC6238과 호환되는 모바일 앱 설치
* 대부분의 가상 MFA 앱은 여러 개의 가상 디바이스 생성을 지원하므로 여러 개의 AWS 계정이나 사용장에게 동일한 앱을 사용할 수 있음
* MFA 디바이스는 사용자 1명당 1개만 화성화 할 수 있음

## 가상 MFA 앱 

* Google Authenticator
* Microsoft Authenticator
* Authy
* Dou Mobile
* LastPass Authenticator


## MFA 활성화 설정

IAM 콘솔 > **보안 자격 증명** 

https://console.aws.amazon.com/iam/home?region=ap-northeast-2#/security_credentials

**멀티 팩터 인증(MFA)** 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.05.52%20AM.png)

**MFA 활성화** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.07.11%20AM.png)

**가상 MFA 디바이스** 선택
**계속** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.08.19%20AM.png)

**QR 코드 표시**

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.08.58%20AM.png)

* 가상 MFA 앱(Google authenticator 또는 Microsoft Authenticator 앱)에서 QR코드 승인
* 가상 MFA 앱에서 생성된 MFA 코드 2번 입력(1번 입력후 새로 갱신된 코드 총 2번 추가)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_12_40_AM.png)

**MFA 할당** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_13_29_AM.png)

## Google Authenticator 확인

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/IMG_79785938DA62-1.png)

## 다음 로그인시 MFA 입력 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.19.36%20AM.png)