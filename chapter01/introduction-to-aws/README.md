# AWS 소개

## AWS 서비스를 이용한 웹 애플리케이션 개발 실습 

* [계정생성(가입)](./iam/create-account.md)
* [로그인 보안을 위한 멀티팩터 인증 활성화](./iam/enabling-mfa.md)
* [비용발생 방지 알람 생성](./cloudwatch/create-alarm-to-avoid-billing.md)
* [AWS LightSail 인스턴스 생성](./lightsail/create-lightsail-instance.md)
* [AWS Amplify 를 이용한 웹 애플리케이션 개발](./build-a-web-application/)
___

## Free Tier 사용시 주의 사항

* [예상치 않은 비용 방지](https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/checklistforunwantedcharges.html)

### AWS 프리 티어 초가 사용

* 프리 티어 사용자는 [AWS 프리 티어](https://aws.amazon.com/ko/free/?nc1=h_ls&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)에서 지정된 한도를 초과해서는 안됨
* 프리 티어 한도를 초과하는 모든 사용량에 대해서는 **온디맨드 인스턴스** 요금 청구

### AWS 프리 티어 만료

* 프리 티어 기간이 만료된 후 계정에 할당된 리소스에 비요이 청구되기 시작
* [AWS Management 콘솔](https://console.aws.amazon.com/console/home)에서 사용 중인 리소스 확인
* 리소스 확인은 **각 리전별로 확인**

### 계정 닫은 후 청구서 받을 수 있음

* AWS는 월별 사용량은 계산되어 다음 달 초 청구. 계정은 종료했지만 같은 달에 옵트인 서비스를 이용한 경우, 다음 달 초에 옵트인 서비스 사용 요금 청구서 받을 수 있음

### 비활성화된 리전

* 어떤 리전을 비활성화 했는데 그 리전에 아직 리소스가 있는 경우, 해당 리소스에 대한 비용이 계속 발생

### Elastic Beanstalk 환경

* Elastic Beanstalk는 필요한 모든 리소스가 항상 실행 상태를 유지 (어떤 서비스를 하나 중지하더라도 자동으로 다시 시작함)
* Elastic Beanstlak를 중지하려면 반드시 Elastic Beanstalk 환경을 종료해야 함

## Elastic Load Balancing(ELB)

* ELB 로드 밸런스는 최소 개수의 Amazon Elastic Comute Cloud(AWS EC2) 인스턴스를 계속 실행하도록 설계되어 있음
* ELB에 등록된 Amazon EC2 인스턴스를 삭제하기 전에 ELB 종료

## AWS OpsWorks

* AWS OpsWorks 환경을 사용하여 AWS 리소스를 생성한 경우 종료하려면 AWS OpsWorks를 사용(그렇지 않으면 AWS OpsWorks 에서 리소스를 다시 시작함)

## Amazon EC2

* 인스턴스를 중지하면 나중에 다시 사용할 수 있으나 스토리지 비용이 청구 될 수 있음 (인스턴스를 종료하면 영구적으로 삭제)

## Amazon Elastic Block Storage

* Amazon EC2 인스턴스 종료시 연결된 Amazon EBS 볼륨이 삭제되도록 구성되지만, 볼륨과 데이터를 유지하는 인스턴스를 설정할 수도 있음
* Amazon EBS 볼륨의 스냅샷을 저장했는데 더 이상 필요하지 않는 경우 삭제(볼륨을 삭제하더라도 스냅샷이 자동으록 삭제되지 않음)

## Elastic IP

* 종료하는 인스턴스에 연결된 모든 Elastic IP 주소는 연결 취소가 되지만 여전히 할당된 상태 (IP 주소가 더이상 필요 없을 경우 해제하지 않으면 추가 비용 발생)

