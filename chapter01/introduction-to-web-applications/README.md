# 웹 애플리케이션(Web application)

[wikipedia](https://en.wikipedia.org/wiki/Web_application)

A web application (or web app) is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system (OS) of the device. Web applications are accessed by the user through a web browser with an active internet connection. These applications are programmed using a client–server modeled structure—the user ("client") is provided services through an off-site server that is hosted by a third-party. Examples of commonly-used web applications include: web-mail, online retail sales, online banking, and online auctions.

[위키백과](https://ko.wikipedia.org/wiki/웹_애플리케이션) 

웹 애플리케이션(web application) 또는 웹 앱은 소프트웨어 공학적 관점에서 인터넷이나 인트라넷을 통해 웹 브라우저에서 이용할 수 있는 응용 소프트웨어를 말한다.

웹 애플리케이션은 클라이언트로서 웹 브라우저를 사용하는 사람이 많기 때문에 인기를 누리고 있다. 수천만 대의 PC에 굳이 소프트웨어를 배포해서 설치하지 않아도 웹 애플리케이션을 유지 관리할 수 있다는 점이 장점 중의 하나이다. 웹 애플리케이션은 웹 메일, 온라인 전자상거래 및 경매, 위키, 인터넷 게시판, 블로그 및 MMORPG 게임 등 다양한 기능을 구현할 수 있다.

## 웹 사이트와 웹 애플리케이션의 차이점 

![Web site vs Web application](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Website-vs-Web-Application.png)


| | 웹 사이트 | 웹 애플리케이션 |
|---|---|---|
| 목적 | 사용자에게 정보제공 | 사용자와 상호작용|
| 특징 | 간편한 접근과 정보 업데이트, 시간절약 및 비용절감, 광고 간소화 제공 | 개인화된 경험과 확장성, 다양한 디바이스 제공 가능|
| 요소 | HTML(Hypertext Markup Language), CSS (Cascading Style Sheets), JavaScripts | HTML, CSS, JavaScript 그리고 Python, Node.js, Ruby, Java 등 프로그래밍 언어와 Django, Ruby on Rails, Express, Spring framework 와 Database 필요 |
| 예 | wikipedia.com, hibrain.net, changwon.ac.kr, changwon.ac.kr/ce/ | Youtube, Twitter, Instagram, Facebook, Photoshop|

## 인터넷 (Internet)

* 컴퓨터로 연결하여 TCP/IP (Transmission Control Protocol / Internet Protocol) 라는 통신 프로토콜을 이용해 정보를 주고 받는 컴퓨터 네트워크
* 1973 년 TCP/IP를 정립
  * 네트워크의 네트워크를 구현하여 모든 컴퓨터를 하나의 통신망 안에 연결 (International network)하고자 하는 의도에서 이를 줄여 인터넷(Internet) 이라고 명명
* 이후 컴퓨터가 서버와 클라이언트로 연결되어 TCP/IP 로 정보를 주고 받게 됨 (정보의 바다)
* 표준 인터넷 프로토콜 집합 (TCP/IP)을 사용해 전 세계 수십억 명의 사용자들에게 제공되는 지구 전체의 네트워크 시스템 
* 개인, 학교, 기업, 정부 네트워크 등을 한정적인 지역에서 전체 영역으로 유선, 무선, 광케이블 기술 등을 통해 연결하여 구성한 네트워크
* 하이퍼텍스트 마크업 언어(HTML)나 전자우편을 지원하는 기술을 통해 광대한 범위의 정보 자원과 서비스를 운반

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/internet-50-anni.jpg)

## 웹 (WWW; World Wide Web, W3)

* 인터넷에 연결된 컴퓨터를 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간
* 인터넷과 동의어로 쓰이는 경우가 많으나 엄격히 말해 서로 다른 개념
* 웹은 전자 메일과 같이 인터넷 상에서 동작하는 하나의 서비스
* 인터넷에서 HTTP 포로토콜, 하이퍼텍스트, HTML 형식 등을 사용하여 그림과 문자를 교환하는 전송방식 

## 하이퍼링크 (Hyperlink)
* 하이퍼텍스트 문서안에 직접 모든 형식의 자료를 연결하고 가르칠 수 있는 참조 고리
* 동영상, 음악, 그림, 프로그램, 글 등의 특정 위치를 지정할 수 있음 (하이퍼텍스트의 핵심 개념)
* HTML을 비롯한 마크업 언어에서 구현 
* 줄여서 링크(link)라고 말하기도 함
* 누르면 웹 사이트나 프로그램 등으로 이동

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/1%2A6fFcDr20HhU38Bu-MIM9dA.png)

## 웹 페이지 (Web Page)

* 웹(WWW, World Wide Web) 상에 있는 개개의 문서를 가르킴
* 두 개 이상의 웹 페이지들을 서로 하이퍼링크로 연결시킬 수 있다는 점이 특징
* 대부분 웹 페이지는 웹 서버에 저장되며 HTML(또는 XHTML), CSS, JavaScript, 그림, flash와 같은 동영상으로 구성
* 웹 페이지들은 HTTP를 통해 전송하거나 받아옴
* 일반적으로 대부분의 인터넷 사용자들은 컴퓨터의 브라우저를 통해 웹 페이지들을 읽음

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/FirstWebPage_screen.png)

## 웹사이트 (Website)

* 인터넷 프로토콜 기반의 네트워크 도메인 이름이나 IP 주소, 루트 경로만으로 이루어진 일반 URL을 통하여 보이는 웹 페이지 (Web Page)들의 의미 있는 묶음
* 흔히 말하는 홈페이지 = 웹사이트 
* 웹사이트는 인터넷이나 랜과 같은 네트워크를 통해 접속할 수 있는 적어도 하나의 웹 서버 상에서 호스팅 됨

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%203.55.50%20PM.png)

## 웹 애플리케이션 (Web application)

* 웹 애플리케이션(web application) 또는 웹 앱은 소프트웨어 공학적 관점에서 인터넷이나 인트라넷을 통해 웹 브라우저에서 이용할 수 있는 응용 소프트웨어
* 클라이언트로 웹 브라우저를 사용하는 사람들이 많기 때문에 인기
* 수천만 대의 PC에 굳이 소프트웨어를 배포해서 설치하지 않아도 유지 관리할 수 있음 
* 웹 메일, 위키, 인터넷 게시판, 블로그 및 MMRORPG 게임 등 다양한 기능 구현 가능
* 일반적으로 특정한 종류의 동적 웹 사이트와 웹 애플리케이션을 구별하는 것은 불분명 함
* 웹 사이트는 대게 웹 애플리케이션을 가르킬 가능성이 높음
* 데스크톱 응용 소프트웨어나 모바일 앱과 비슷한 기능을 갖추고 있음

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Web-Application-Architecture-Principles-That-You-Cannot-Skip.png)
이미지출처: https://www.unifiedinfotech.net/blog/web-application-architecture-principles-explained/

## 웹 애플리케이션 서버 (WAS; Web application server)

* 웹 애플리케이션과 서버 환경을 만들어 동작시키는 기능을 제공하는 스프트웨어 프레임워크
* 인터넷 상에서 HTTP를 통해 사용자 장치에 애플리케이션을 수행해 주는 미들웨어(소프트웨어 엔진)
* 동적 서버 콘텐츠를 수행하는 것으로 일반적인 웹 서버와 구별
* 주로 데이터베이스 서버와 같이 수행
* 일반적으로 WAS, WAS S/W, 웹 응용 서버로 통칭

### 웹 애플리케이션 서버의 기능

* 프로그램 실행환경과 데이터베이스 접속 기능 제공
* 여러 개의 트랜잭션 관리
* 업무 처리 비즈니스 로직 수행

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/11299.png)
이미지출처: https://opentutorials.org/course/3781/25116

## 웹 서버 (Web server)

* HTTP를 통해 웹 브라우저에서 요청하는 HTML 문서나 오브젝트 (이미지 파일 등)을 전송해주는 서비스 프로그램
* 웹 서버 소프트웨어를 구동하는 하드웨어
* Apache, IIS, Nginx 등

### 웹 서버의 기능
* HTTP
* 통신 기록
* 인증
* 정적 콘텐츠 관리
* HTTPS 지원
* 콘텐츠 압축
* 가상 호스팅
* 대용량 파일 지원
* 대역폭 스로틀링 

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/11300.png)
이미지출처: https://opentutorials.org/course/3781/25116

![](https://dbcore-assets-public.s3.ap-northeast-2.amazonaws.com/tutorials/cloud-based-web-application-development/chapter01/images/Screen%20Shot%202021-01-15%20at%205.54.06%20PM.png)
이미지출처: https://bytemaster.medium.com/why-a-blockchain-is-a-better-application-server-database-architecture-9d7b78730fbb

