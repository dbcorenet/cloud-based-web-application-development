
# 구글 클라우드 서비스 소개
## 클라우드 용어 소개 
![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-intro/iaas-paas-saas.png)
1. Packaged Software   
    서버, 네트워크, 운영체제 등 서비스 제공을 위해 구축 되어야 하는 서버의 모든 요소를 고려해야 하는 구조이다.     
    클라우드 서비스를 사용하지 않는 다면 이 구조가 된다.
2. Infrastructure as a Service (IaaS)     
    데이터가 저장 될 디스크, 인터넷에 서버가 연결 되기 위한 인터넷 회선, 가상화 등 물리적 요소에 대한 고려가 필요 없이 서버를 사용할 수 있는 구조이다.
3. Platform as a Service (PaaS)
    운영 체제 및 미들 웨어와 같은 자원에 대한 관리 없이 클라우드 서비스를 제공하는 기업체가 관리하는 서버에 어플리케이션을 배포 및 사용 하면 되는 구조    
    간단한 예를 들면 노드로 작성된 소스 코드를 동작 시키기 위해 IaaS는 직접 운영체제를 선택하고 node를 설치하고 동작 시켜야 하는 반면, PaaS 구조에서는 클라우드 서비스를 제공하는 업체가 구축 해놓은 서버에 배포만 하여 소스 코드를 동작 시킬 수 있다. 
4. Software as a Service (SaaS)    
    모든 것을 클라우드 서비스 제공 업체에서 관리하는 구조로 드롭박스, 구글 독스등을 생각하면 이해가 쉽다. 

     
        

## 구글 클라우드 서비스 소개
구글 클라우드 플랫폼에서는 약 65개의 제품을 제공해주고 있다. 오늘은 우리가 실습 하는 제품 군에 대해서 알아보자.

![](https://storage.googleapis.com/cloud-based-web-application-development/chapter10/cloud-intro/items.png)

## Compute Service
컴퓨트 서비스에는 대표적으로 Compute Engine, App Engine, Conatiner Engine이 존재한다.    

### Compute Engine
* Virtual Machine을 사용자에게 제공하는 IaaS 서비스로 간편하게 우분투, 레드햇과 같은 운영체제가 동작하는 서버를 구축 할 수 있는 제품이다. 
* AWS의 EC2와 같은 제품이다.    

### App Engine
* 애플리케이션 개발 및 호스팅 플랫폼으로 PaaS구조의 제품이다. 
* 인프라에 대한 트래픽을 직접 관리 할 필요 없이 많은 웹 애플리케이션을 구축 할 수 있게 해주는 제품이다.

### Kubernates Engine
* Google 인프라를 사용하여 컨테이너식 애플리케이션을 배포, 관리 할 수 있는 환경을 제공해주는 제품이다.

## Storage Service

### Storage

* 아마존의 S3와 같은 제품으로 문서, 이미지 등 다양한 형태의 파일을 저장 할 수 있다. 

### SQL

* MySQL 및 PostgreSQL 데이터베이스를 손쉽게 설정/유지/관리할 수 있는 관계형 데이터베이스 서버 제품이다.

### Cloud DataStore
* 자동 확장, 고성능, 간편한 애플리케이션 개발을 위해 빌드된 NoSQL 문서 데이터베이스 제품이다.

### Bigtable

<!-- * 수십억 개의 행과 수천 개의 열까지 확장하여 수 테라바이트, 심지어 수 페타바이트의 데이터까지 저장할 수 있으며 데이터 
밀도가 낮은 테이블을 제공하는 제품이다.  -->
* 페타 바이트 규모의 매우 짧은 지연 시간을 제공하는 완전 관리형 NoSQL 데이터베이스입니다.
* 짧은 지연 시간으로 높은 읽기 및 쓰기 처리량을 지원하므로 IoT, 사용자 분석, 재무 데이터 분석을 포함한 운영 및 분석 애플리케이션 모두에 적합하다.

### Spanner
* 강한 견고성(Strong Consistency)과 가용성을 겸한 분산형 관계형 데이터베이스 제품이다.