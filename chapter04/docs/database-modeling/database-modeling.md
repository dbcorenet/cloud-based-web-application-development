# 데이터 모델링의 정의
데이터 모델링은 현실 세계의 기업 업무에서 발생하는 데이터에 대하여 물리적으로 데이터베이스화하기 위해 이루어지는 과정 중 한 단계입니다.
<br>분석된 모델을 가지고 실제 데이터베이스를 생성하여 개발 및 관리에 이용하기 위해서 데이터 모델링을 합니다.

<img src="https://mblogthumb-phinf.pstatic.net/MjAxODA5MTdfMzcg/MDAxNTM3MTU5MTg2NTM2.rlprDn8jgMejRN1QaTjDT8bUJxJNxTZTAVzYwdL3T-sg.aiBrxRxzPwwDgGO8-TERZTTcJyMXlRLmTtHdEh2aX4kg.PNG.donggyu_00/image.png?type=w800">

데이터 모델링을 하기 위해서는 3가지 단계를 거칩니다.

# 데이터 모델링 단계
데이터 모델링은 개념 데이터 모델링, 논리 데이터 모델링, 물리 데이터 모델링 3단계로 나눌 수 있습니다.

## 개념 데이터 모델링
주제별로 분류 가능한 업무를 분석한 후 핵심 엔터티를 추출하고 그들 간의 관계를 정의하여 전체 데이터 모델의 틀을 잡는 단계입니다.
이렇게 도출된 엔터티(업무)간의 관계를 표현하기 위해 개체-관계 다이어그램(ERD)을 작성합니다.

## 논리 데이터 모델링
개념 데이터 모델링 단계에서 정의한 핵심 엔터티와 관계를 바탕으로 상세 속성을 정의하고 식별자를 확정하며 정규화와 같은 상세화 과정을 수행합니다.

## 물리 데이터 모델링
논리 데이터 모델을 기반으로 목표하는 DBMS 특성 및 구현환경 등을 감안한 스키마를 일정한 기준과 규칙에 의해 도출합니다.
논리 데이터 모델에서 정의한 칼럼의 데이터 타입과 크기를 정의합니다.
또한 데이터 사용량을 분석 예측하는 과정을 통해 효율적인 데이터베이스가 될 수 있도록 인덱스의 정의와 역정규화 작업을 수행합니다.

# DB설계

학생의 학번, 이름, 학년, 전공을 관리하는 데이터를 논리 데이터 모델링으로 표현하면 아래와 같습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/entity-example.png" style="width:250px;max-height:400px">

논리 데이터 모델링을 기반으로 테이블이 생성 되면 아래처럼 데이터가 관리됩니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/table-example.png" style="max-width:350px;max-height:400px">

## 테이블
행과 칼럼으로 구성되는 가장 기본적인 데이터베이스 객체로 데이터베이스 내에서 모든 데이터는 테이블을 통해 저장됩니다.
테이블, 칼럼 등 데이터베이스에서 사용하는 객체의 명명규칙은 표준화 관점에서 별도로 정의합니다.

## 칼럼
칼럼은 테이블을 구성하는 요소로 데이터 타입과 길이로 정의됩니다.
데이터 타입은 데이터 일관성을 유지하는 가장 기본적인 기능입니다. 표준화된 도메인을 정의하였다면 그에 따라 데이터 타입과 데이터 길이를 정의합니다.

- DBMS는 문자, 숫자, 시간 등을 정의할 수 있는 내장 데이터 형식을 지원합니다.
- 칼럼이 서로 참조 관계일 경우는 가능한 한 동일한 데이터 타입과 길이를 사용해야 합니다.
    — 서로 다른 데이터 타입을 사용하면 조인이나 비교 연산 시 인덱스를 사용할 수 없기 때문에 성능에 문제가 될 수 있습니다.

### 칼럼데이터 정의 시 순서
물리 모델에서 실제 데이터 값이 변경될 때 저장 공간의 효율적인 사용을 위해 다음과 같은 기준으로 순서를 정합니다.
- 고정 길이 칼럼이고 NOT NULL인 칼럼은 제일 앞에 정의합니다.
- 가변 길이 칼럼을 뒤에 정의합니다.
- NULL값이 많을 것으로 예상되는 칼럼을 뒤에 정의합니다.

### 데이터 타입 지정 시 고려사항
- 가변 길이 데이터 타입은 예상되는 최대 길이로 정의합니다.
- 고정 길이 데이터 타입은 최소의 길이를 지정합니다.
- 소수점 이하 자리 수의 정의는 반올림되어 지정되므로 정확성을 확인하고 정의합니다.


# DA#을 이용한 모델링 실습

메모를 관리하는 애플리케이션의 데이터 모델링을 설계해보는 실습을 진행합니다.
논리모델, 물리모델, 스크립트 생성은 DA# 툴을 사용하며 데이터베이스는 MySQL을 기반으로 진행합니다.

## DA# 설치

DA# 툴은 데이터 모델링을 하기 위해서 필요한 기능을 제공하는 툴입니다.
현재 Mac 버전은 지원하고 있지 않으며 Windows 환경에서만 무료로 설치하여 사용할 수 있습니다.

1. [엔코아 사이트 다운로드 페이지](https://www.en-core.com/board/download)에 접속하여 *DA#5 설치파일 개인용 다운로드* 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeler-install-1.png" style="max-width:250px;max-height:400px">

2. 성명, 회사, 부서/직급 등 필요한 정보를 모두 입력한 후 하단의 *다운로드 신청* 버튼을 클릭합니다. (인증번호 발송은 수분정도 걸립니다.)

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeler-install-2.png" style="max-width:250px;max-height:400px">

3. 접수 신청 완료 문구가 뜬 후에 다운로드 창이 뜨면 *다운로드* 버튼을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeler-install-3.png" style="max-width:250px;max-height:400px">

4. 다운로드 된 설치 파일을 더블 클릭하여 실행합니다. (Windows 실행 파일)

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeler-install-4.PNG" style="max-width:250px;max-height:400px">

5. 순서대로 *다음* 버튼을 클릭하여 설치를 진행하도록 합니다.

6. 설치가 완료 된 후 *DA# Modeler5*를 실행시킵니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeler-install-6.png" style="max-width:250px;max-height:400px">

## 논리모델 정의

모델을 정의하기 위해서 새 모델 편집 창을 생성합니다.

1. 상단의 맨 앞에 있는 modeler 아이콘을 클릭한 후 새로 만들기 > 모델 추가 를 클릭해줍니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/logical-modeling-1-1.png" style="width:250px;max-height:400px">

2. 모델 유형, 모델명, 물리모델 유형 등을 선택할 수 있습니다.
- 모델 유형 : 논리,물리 / 개념 / 논리 / 물리 등 어떤 종류의 모델을 생성할지 선택.
- 모델명 : 저장될 모델의 파일명을 지정.
- 물리모델 유형 : 어떤 데이터베이스를 기반으로 모델을 생성할지 선택. (MySQL, ORACLE, DB2 등 관계형 데이터베이스를 지원)

본 실습은 아래와 같이 모델을 생성하도록 합니다.
- 모델 유형 : 논리, 물리
- 모델명 : 자유롭게 지정
- 물리모델 유형 : MySQL

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/logical-modeling-1-2.png" style="width:250px;max-height:400px">

3. 새 모델 편집 창이 생성됩니다.


아래는 데이터 모델링을 진행할 요구사항입니다.

> **요구사항** <br>
> 우리 사이트는 메모를 관리한다. <br>
> 사이트는 여러 개의 메모를 관리할 수 있으며, 메모 제목, 내용을 관리한다. <br>
> 내용은 텍스트만 들어갈 수 있으며 최대 1000자로 제한하도록 한다. <br>
> 추후에는 회원이 로그인하여 메모를 관리할 수 있도록 한다.

### 엔터티 도출
요구사항에서 가장 핵심이 되는 업무를 분류하여 엔터티를 도출합니다.
<br>메모를 작성하는 회원과 회원이 작성하는 메모 엔터티를 도출 할 수 있습니다.

1. 새 모델 편집 창에서 상단의 그리기 > 엔터티를 클릭합니다.
2. 편집 창에서 마우스로 드래그하여 엔터티를 생성합니다.
3. 엔터티를 더블 클릭하여 엔터티 편집 창을 열어줍니다.
4. 엔터티 탭에서 엔터티 명을 지정합니다.
5. 확인을 누르면 편집 내용이 저장되고 엔터티에 수정사항이 반영된 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/logical-modeling-2-1.png" style="width:250px;max-height:400px">

### 상세속성 정의 및 식별자 확정
도출한 엔터티에서 상세하게 관리가능한 속성을 정의하고 식별자를 확정합니다.
NOT NULL 정의 등을 상세하게 진행합니다.
- 식별자 : 어떤 대상을 유일하게 식별 및 구별할 수 있는 속성. 학생의 경우 학번이 식별자가 됨.
- NOT NULL : 빈 값을 허용하지 않는 속성. 해당 속성은 데이터를 삽입할 때 반드시 값이 있어야함.

1. 엔터티를 더블 클릭하여 엔터티 편집 창을 열어줍니다.
2. 속성 탭에서 속성을 추가해줍니다. 속성을 추가하려면 Enter를 치거나, 하단의 추가 버튼을 클릭합니다.
3. 속성을 삭제하거나 위치를 바꾸고 싶은 경우 하단의 *삭제*, *위로*, *아래로* 버튼을 사용할 수 있습니다.
4. 속성을 추가한 후 *실질식별자* 를 체크하면 해당 속성은 식별자로 지정됩니다.
5. 속성을 추가한 후 *NotNull* 를 체크하면 해당 속성은 NotNull로 지정됩니다.
6. 확인을 누르면 편집 내용이 저장되고 엔터티에 수정사항이 반영된 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/logical-modeling-2-2.png" style="width:250px;max-height:400px">

### 관계정의
메모는 회원이 여러 개의 메모를 작성할 수 있으므로 1:다의 관계를 가집니다.
메모와 회원 사이에 1:다의 관계를 정의합니다.
- 관계 : 반드시 엔터티는 한 개 이상의 관계를 가져야 함. 1:1, 1:다, 다:다 등의 관계가 있음.

1. 그리기 > 관계선 에서 *아래 화살표*를 클릭합니다.
2. 1:M(1:다) Mandatory 를 선택합니다.
3. 회원 엔터티에서 시작하여 메모 엔터티로 드래그하여 관계선을 그어줍니다.
4. 관계선을 더블클릭하여 관계선 편집 창을 열어줍니다.
5. 왼쪽 상단의 *관계명* 오른쪽에 "작성하여" 라는 관계명을 정의해줍니다.
6. 확인을 누른면 편집 내용이 저장되고 관계선에 수정사항이 반영된 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/logical-modeling-2-3.png" style="width:250px;max-height:400px">

## 물리모델
물리모델은 테이블로 생성될 때 속성의 이름과 데이터타입, 데이터길이를 정의하는 모델입니다.
물리모델에서 사용하는 속성명은 영문으로 사용하며 물리명이라고합니다.

모델 편집 창에서 상단의 물리 탭을 클릭하면 생성된 물리모델을 확인 할 수 있습니다.

엔터티 내에 2단으로 속성명이 표시되는 것을 확인 할 수 있습니다.
왼쪽은 물리명(영문)이 표시되고 오른쪽은 논리명이 표시됩니다.

### 물리모델 속성 직접 정의
물리모델에서 테이블 편집 창을 열면 컬럼명, 데이터타입, 길이를 지정할 수 있는 창이 열립니다.
- 컬럼명 : 영문으로 물리명을 지정.
- 데이터타입 : 데이터 타입을 지정. 선택한 물리모델 유형을 기반으로 데이터타입을 선택가능. (MySQL을 선택 시 MySQL에서 지원하는 데이터 타입을 표시.)
- 길이 : 데이터의 길이를 지정.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/physical-modeling-edit.png" style="width:250px;max-height:400px">

물리명은 다음과 같은 규칙으로 지정합니다.
- 반드시 영문으로 지정합니다.
- 띄어쓰기를 포함하지 않습니다.
- 동사는 사용할 수 없으며 명사로 지정합니다.
- 여러 개의 단어를 사용할 경우 *MEMBER_ID* 와 같이 '_'로 구분하여 지정합니다.

물리명을 지정 후 저장을 누르면 모델에 반영된 것을 확인 할 수 있습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/physical-modeling-result.png" style="width:250px;max-height:400px">

## 데이터베이스 생성

테이블 생성 실습을 위해서 데이터베이스 서버를 구축해보도록 합니다.
<br>lightsail 에서 데이터베이스 서버를 생성하여 접속할 수 있도록 지원합니다.

1. lightsail의 데이터베이스 탭을 클릭합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/create-database-1.png" style="width:250px;max-height:400px">

2. MySQL 을 선택한 후 인스턴스 이름을 지정하여 데이터베이스를 생성합니다.(가장 저사양으로 생성시 1달 무료로 제공.)

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/create-database-2.png" style="width:250px;max-height:400px">

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/create-database-2-1.png" style="width:250px;max-height:400px">

3. 생성된 데이터 베이스를 확인합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/create-database-3.png" style="width:250px;max-height:400px">

최초에 생성된 lightsail 데이터베이스의 경우 퍼블릭 모드가 설정되어 있지 않습니다.
<br>이러한 경우 같은 리전을 사용하는 서버만 데이터베이스에 접속할 수 있기 때문에 AWS 환경에서만 접속이 가능하게 됩니다.
<br>(생성된 데이터베이스 서비스가 사용하고 있는 리전과 같은 리전에서 생성된 서버에서만 접속 가능. 로컬에서 접속 불가능.)
<br>이를 퍼블릭 모드로 변경하여 사용자의 이름과 암호만 알아도 접속이 가능하도록 합니다.

<br>네트워킹 탭에서 *퍼블릭 모드를 활성화* 시켜줍니다.

> <img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/lightsail-networking-setting.png" style="width:250px;max-height:400px"></kbd>








## 데이터베이스 접속

MySQL은 CLI를 사용하거나, Workbench 라는 툴을 사용해서 접속이 가능합니다.
Workbench 툴을 사용하여 MySQL에 접속해봅니다.

1. [Workbench 다운로드 페이지](https://dev.mysql.com/downloads/workbench/)에서 OS 환경에 맞는 설치 파일을 다운로드 받습니다. (본 자료는 Windows 환경을 기준으로 진행합니다.)
2. 다운로드 받은 파일을 실행하여 설치를 진행합니다.
3. 설치가 완료 된 후 Workbench 를 실행합니다.
4. MySQL 서버로 접속하는 커넥션 설정을 하기 위해서 *MySQL Connections*의 *+* 버튼을 클릭합니다.
5. 데이터베이스 접속 정보를 입력합니다.
- Connection Name : 저장할 커넥션의 이름을 지정. (구분이 가능한 이름을 자유롭게 지정.)
- Hostname : 생성한 데이터베이스 서버의 엔드포인트(endpoint) 입력.
- Username : 생성한 데이터베이스 서버의 사용자 이름 입력.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/mysql-workbench-1.png" style="width:250px;max-height:400px">

6. 하단의 Test Connection을 클릭한 후 암호를 입력해줍니다. (생성한 데이터베이스 서버의 암호.)

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/mysql-workbench-2.png" style="width:250px;max-height:400px">

7. 암호를 입력한 후 접속 테스트를 한 후 정상적으로 접속이 되면 *ok* 버튼을 눌러서 Connections 편집 창을 닫습니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/mysql-workbench-3.png" style="width:250px;max-height:400px">

8. 생성된 Connections를 더블클릭 해서 sql 편집창으로 접속합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/mysql-workbench-4.png" style="width:250px;max-height:400px">

## 스크립트 생성

MySQL은 create 문으로 테이블을 생섭합니다.
DA#에서 스키마를 만드는 스크립트를 생성할 수 있습니다.

물리모델을 모두 작성한 후 스키마를 생성할 테이블을 선택한 후 **우클릭 > 스키마생성 > 테이블**을 선택합니다.

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeling-script-1.png" style="width:250px;max-height:400px">

테이블 스크립트를 생성하는 창이 뜹니다.
MySQL을 기반으로 모델을 생성했기 때문에 스크립트로 MySQL을 기반으로 생성됩니다.
작성한 물리모델을 기준으로 제약조건이 생성되어 있고 스토리지, 파티션 탭에서 추가적인 설정을 할 수 있습니다.
스크립트 탭에서 생성된 스크립트를 확인 할 수 있습니다.

```sql
CREATE TABLE `MEMBER`
(
    `MEMBER_ID`    VARCHAR(20) NOT NULL COMMENT '회원ID',
    `NAME`    VARCHAR(10) NOT NULL COMMENT '이름',
    `EMAIL`    VARCHAR(30) NOT NULL COMMENT '이메일',
    `PASSWORD`    VARCHAR(20) NOT NULL COMMENT '비밀번호',
 PRIMARY KEY ( `MEMBER_ID` )
)
 COMMENT = '회원';
```

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeling-script-2.png" style="width:250px;max-height:400px">


## 테이블 생성

MySQL 서버에는 여러 개의 데이터베이스를 생성하여 테이블을 생성할 수 있습니다.
Workbench에서 사용가능한 데이터베이스를 조회합니다.

```sql
show databases;
```

조회 된 데이터베이스 중 사용할 데이터베이스를 선택합니다.

```sql
use 사용할 데이터베이스 이름 입력;
```

생성한 스크립트를 실행하여 테이블을 생성합니다.

```sql
CREATE TABLE `MEMBER`
(
    `MEMBER_ID`    VARCHAR(20) NOT NULL COMMENT '회원ID',
    `NAME`    VARCHAR(10) NOT NULL COMMENT '이름',
    `EMAIL`    VARCHAR(30) NOT NULL COMMENT '이메일',
    `PASSWORD`    VARCHAR(20) NOT NULL COMMENT '비밀번호',
 PRIMARY KEY ( `MEMBER_ID` )
)
 COMMENT = '회원';
```

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeling-mysql-1.png" style="width:250px;max-height:400px">

생성된 테이블을 조회합니다.

```sql
select * from MEMBER;
```

<img src="https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter04/images/modeling-mysql-2.png" style="width:250px;max-height:400px">


