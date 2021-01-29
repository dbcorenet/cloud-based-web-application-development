# SQL

## 인스턴스 생성

* **인스턴스 이름** : 하고 싶은 이름으로 해주세요.
* **루트 비밀번호 설정** : 하고 싶은 비밀번호로 해주세요.
* **인스턴스 리전, 영역** : 서울, 영역 A (asia-northeast3-a)
* **DataBase 선택** : MySQL 5.7
* **구성 옵션 조정 - 먼신 유형 및 스토리지** : db-n1-standaard-1, HDD 10GB
* **구성 옵션 조정 - 백업, 복구, 고가용성** : 백업 자동화 off / 가용성 단일 영역
* **구성 옵션 조정 - 플래그** : default_time_zone +09:00    

Step.1 인스턴스 만들기 전 화면으로 간다.
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/step1.png)

Step.2 Mysql을 선택한다.
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/step2.png)

Step.3 인스턴스 설정 정보들을 입력한다.
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/step4.png)

결과 확인^^
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/result.png)

## 인스턴스 접속
### 브라우저의 Cloud Shell 사용
첫 접속 시 에러 발생되며 에러에 표시 된 링크를 타고 들어가 Cloud SQL Admin API 사용을 활성화 시켜 주어야 한다.
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/shell-error.png)

Cloud SQL Admin API 활성화 후 다시 접속 시도
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/connected.png)

### MySql Workbench 사용
사용자 계정 생성
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/user-setting.png)

연결 허용 해주기
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/connect-open.png)

워크벤치로 연결하기
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-sql/connected2.png)