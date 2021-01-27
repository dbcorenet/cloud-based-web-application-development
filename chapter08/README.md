# AWS 주요 서비스 소개


## AWS 액세스 키 생성

보안 자격 증명 > **액세스 키 (액세스 키 ID 및 비밀 액세스 키)**

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%205.39.10%20AM.png)

**새 액세스 키 만들기** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%205.49.19%20AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_5_51_03_AM.png)

**키 파일 다운로드** 버튼 클릭

* Vidual Stoduio Code를 열어서 Remote Development Extension 을 이용해 작업 디렉토리 접속
* 다운로드 파일을 Vidual Studio Code를 이용해서 AWS Lightsail 의 Node.js 테스트를 위해 생성한 인스턴스로 복사

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_6_35_06_AM.png)

## AWS CLI 설정

Vidual Studio Code 터미널에서 다음 명령어 실행

```
aws configure 
```

* **AWS Access Key ID** : AWSAccessKeyId
* **AWS Secret Access Key** : AWSSecretKey
* **Default region name** : ap-northeast-2
* **Default output format** : json

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_6_40_08_AM.png)

다음 명령어 실행

* AWS CLI 를 이용하여 AWS Lightsail의 모든 인스턴스 정보 조회

```
aws s3 lightsail get-instances
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_6_44_50_AM.png)

* AWS Lightsail 인스턴스중에 이름으로 하나의 인스턴스 정보 조회

```
aws lightsail  get-instance --instance-name hbn-kr-lightsail-nodejs-tutorial
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_6_49_10_AM.png)

* AWS 가용 리전 정보 조회

```
aws ligtsail get-regions
```

```json
{
    "regions": [
        {
            "continentCode": "NA",
            "description": "This region is recommended to serve users in the eastern United States",
            "displayName": "Virginia",
            "name": "us-east-1",
            "availabilityZones": [],
            "relationalDatabaseAvailabilityZones": []
        },
        {
            "continentCode": "NA",
            "description": "This region is recommended to serve users in the eastern United States",
            "displayName": "Ohio",
            "name": "us-east-2",
            "availabilityZones": [],
            "relationalDatabaseAvailabilityZones": []
        },
        {
            "continentCode": "NA",
            "description": "This region is recommended to serve users in the northwestern United States, Alaska, and western Canada",
            "displayName": "Oregon",
            "name": "us-west-2",
            "availabilityZones": [],
            "relationalDatabaseAvailabilityZones": []
        },
        ...
        }
    ]
}
```