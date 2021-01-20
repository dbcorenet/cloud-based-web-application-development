# Vidual Studio Code 원격 개발환경 설정

## Pallete를 이용한 Extension 설치

* 메뉴에서 View > **Command Pallete** 선택 (단축키 Ctrl + Shfit + P) 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%203.51.41%20AM.png)

* 명령어 팔레트에 `install extensions` 입력

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%203.52.01%20AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-18%20at%204.03.20%20AM.png)


## AWS LightSail 키 페어 파일 저장

* AWS LightSail 에서 인스턴스 생성시 사용한 **키 페어** 파일을 다운로드 (예. aws-kr-lightsail-sungkwang-dev.pem)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%201.49.33%20PM.png)

* 키 페어 파일을 `~/.ssh/` 디렉토리 안으로 이동

```
mv C:\Users\sksong\Downloads\aws-kr-lightsail-sungkwang-dev.pem ~/.ssh/
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%201.47.30%20PM.png)

## Remote Development Extension 을 이용하여 AWS LightSail 접속

`~/.ssh/id_config` 파일 수정

```
code ~/.ssh/config
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-20%20at%202.14.43%20PM.png)

다음 내용으로 수정

* **Host** : 호스트 명칭 (임의의 이름)
* **HostName** : 호스트 도메인 또는 IP (예. 3.36.xx.xxx)
* **User** : SSH 접속 사용자 (예. bitnami)
* **IdentityFile** : AWS LightSail 의 키 페어 파일 위치 (예. C:\Users\사용자\.ssh\)

```
Host 3.36.xx.xxx
  HostName 3.36.xx.xxx
  User bitnami
  ForwardAgent yes
  IdentityFile ~/.ssh/aws-kr-lightsail-sungkwang-dev.pem
 
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_19_08_PM.png)


* Remote Explore 창에서 추가한 호스트 확인

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_21_23_PM.png)

* 호스 위에 마우스를 올리면 나타나는 아이콘 **connect to Host in New Window** 아이콘 클릭
* 원격 서버 플랫폼 타입 선택 : **Linux**

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_24_50_PM.png)

* SSH 접속에서 사용하는 fingerprint 출력에서 계속 진행 : **Continue**

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_26_19_PM.png)

Vidual Studio Code 에서 원격서버(Host)에 정상적으로 접속되면 하단에 접속 호스트 정보 출력, explore 메뉴에서 **Connected to remote** 메세지 출력

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_28_35_PM.png)

* **Open Folder** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_31_23_PM.png)

원격서버 접속 후 접근할 디렉토리 선택 (예. /home/bitnmai/)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen_Shot_2021-01-20_at_2_31_57_PM.png)