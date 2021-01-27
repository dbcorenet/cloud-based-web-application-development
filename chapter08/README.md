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

## Windows AWS CLI 설치

https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-cliv2-windows.html

* AWS CLI MSI v2 다운로드 후 설치

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%207.57.10%20AM.png)

* Windows power shell 에서 다음 명령어 실행

```
aws configure
```

* **AWS Access Key ID** : AWSAccessKeyId
* **AWS Secret Access Key** : AWSSecretKey
* **Default region name** : ap-northeast-2
* **Default output format** : json

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_8_00_47_AM.png)

```
aws lightsail get-instances
```

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_8_03_21_AM.png)

## AWS S3 버킷 생성

* AWS S3 콘솔 접속 

https://s3.console.aws.amazon.com/s3/home?region=ap-northeast-2#

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.08.29%20AM.png)

**버킷 만들기** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.12.22%20AM.png)

* **버킷이름** : 유일한 버킷이름 지정 (예. hbn-sksong-test)
* **리전** : ap-northeast-2
* **퍼블릭 액세스 차단을 위한 버킷 생성** : 모든 퍼블릭 액세스 차단
* **버킷 버전 관리** : 버킷 관리 비활성화
* **기본 암호화** : 비활성화

버킷 만들기

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.12.59%20AM.png)

만든 버킷링크 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.13.38%20AM.png)

**업로드** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.15.08%20AM.png)

**파일추가** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.15.56%20AM.png)


파일 선택 후 **업로드** 버튼 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.16.08%20AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.17.45%20AM.png)

업로드 된 파일 링크 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.18.21%20AM.png)

객체 URL 링크 클릭 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.19.29%20AM.png)

**객체작업** 버튼 클릭 후 **다운로드** 클릭

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.20.24%20AM.png)

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.21.10%20AM.png)

## Node.js AWS-SDK 

* `aws-sdk-tests` 디렉토리 생성
* 디렉토리 안에서 `npm init -y` 실행

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.26.38%20AM.png)

* `npm install @aws-sdk/client-s3 --save` 명령어 실행
* `aws-s3-client-test.js` 파일 생성

```javascript
// Import required AWS SDK clients and commands for Node.js
const {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand
  } = require("@aws-sdk/client-s3");
  
  // Set the AWS region
  const REGION = "ap-notheast-2"; 
  
  // Set the bucket parameters
  const bucketName = "hbn-sksong-test";
  const bucketParams = { Bucket: bucketName };
  
  // Create name for uploaded object key
  const keyName = "hello_world.txt";
  const objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };
  
  // Create an S3 client service object
  const s3 = new S3Client({ region: REGION });
  
  const run = async () => {
    // Create S3 bucket
    try {
      const data = await s3.send(new CreateBucketCommand(bucketParams));
      console.log("Success. Bucket created.");
    } catch (err) {
      console.log("Error", err);
    }
    try {
      const results = await s3.send(new PutObjectCommand(objectParams));
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    } catch (err) {
      console.log("Error", err);
    }
  };
  run();
```

* `node aws-s3-client.js` 명령어 실행

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen_Shot_2021-01-28_at_8_39_42_AM.png)

* S3 콘솔에세서 버킷에 파일이 업로드 된 것 확인

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter08/images/Screen%20Shot%202021-01-28%20at%208.39.30%20AM.png)

