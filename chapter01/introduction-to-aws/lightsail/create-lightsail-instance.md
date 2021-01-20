# AWS LigtSail 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%204.53.35%20AM.png)

## 인스턴스 생성

* **인스턴스 위치** : 서울, 영역 A (ap-northeast-2a)
* **인스턴스 이미지 선택** : Linux/Unix
* **블루프린트 선택** : Ubuntu 20.04 LTS 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%204.57.09%20AM.png)

## SSH 키 패어 변경

* SSH 키 페어 새로 생성 
* SSH 키 페어 리전 : (대한민국, 서울)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%204.58.28%20AM.png)

* 키 페어 이름 입력

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%205.00.40%20AM.png)

* 키 페어 생성 후 다운로드 (한번만 다운로드 받을 수 있음. 관리 주의 필요)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%205.01.36%20AM.png)

## 인스턴스 플랜 

* 첫달 무료 512MB, 1 vCPU, 20GB SSD, 1T 플랜 선택

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%205.04.45%20AM.png)

## 인스턴스 확인

* Lightsail 인스턴스 이름 입력

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%205.06.11%20AM.png)

**인스턴스 생성** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-18_at_5_07_38_AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-18_at_5_09_18_AM.png)


## SSH를 사용하여 연결

### 브라우저를 사용하여 연결 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-18_at_5_11_18_AM.png)

### Windows 에서 SSH 로 연결

* Windows 의 Powershell 실행
* 앞에서 생성한 키 페어 파일 위치 확인

```
ssh -i 키페어위치 ubuntu@라이트세일아이피 
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-18_at_5_15_15_AM.png)

