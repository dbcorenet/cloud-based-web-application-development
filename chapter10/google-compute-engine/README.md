# Compute Engine 

## 인스턴스 생성

* **인스턴스 이름**: 하고 싶은 이름으로 해주세요.
* **인스턴스 리전, 영역** : 서울, 영역 A (asia-northeast3-a)
* **인스턴스 이미지 선택** : Linux
* **머신 유형** : e2-medium(vCPU)
* **부팅 디스크** : Ubuntu 20.04 LTS
* **표준 영구 디스크**: 64GB

Step.1
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/step01.png)

Step.2
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/step02.png)

Step.3
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/step031.png)

Step.4
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/step03.png)

결과 확인 ^^
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/result.png)

## 인스턴스 접속
### 브라우저에서 접속
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/connect01.png)

### ssh 키를 이용한 접속    
* 접속 키 생성
* 생성한 키의 공개키를 Cloud Console에서 등록
```shell
ssh-keygen -t rsa -C "aq3aq4@google.com"
```

![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/sshkey-make.png)

퍼블릭 키 확인
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/sshkey-confirm.png)

퍼블릭 키 등록
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/sshkey-regi.png)

ssh 연결하기
```shell
ssh -i {publicKey경로} aq3aq4@34.64.240.47
```
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/computeEngine/connected.png)

