# Handlebars.js Helpers

#### Built-in Helpers(내장함수)

Handlebars.js 내장함수는 Handlebars.js에서 기본적으로 제공하는 함수를 이야기합니다. 

##### 1) if

if helpers를 사용하여 조건부로 블록을 출력할 수 있습니다. 반환값이 논리 자료형인 boolean의 false, undefined, null, "", 0 , []일때는 출력하지 않습니다.  

notes/views/index-if.hbs 파일에 author값이 존재하면 firstName,lastName을 출력하고 그렇지않으면 Unknown Author을 출력하는 표현식을 작성합니다. 

```handlebars
<div class="entry">
    {{#if author}}
        <h1>{{firstName}} {{lastName}}</h1>
    {{else}}
        <h1>Unknown Author</h1>
    {{/if}}
</div>

```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 추가해줍니다.  

/if GET url 요청이 들어오게 되면, index-if.hbs 파일을 렌더링하면서 data를 전송해줍니다.  

```json
router.get('/if', function(req, res, next) {


    let data = {
        author: 'OK',
        firstName: "Yehuda",
        lastName: "Katz"
    };


    res.render('index-if', data);
});
```

 브라우저에서 http://localhost:3000/if 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

author 데이터가 있기 때문에 firstName, lastName이 출력됩니다. 

```html
  <div class="entry">
        <h1>Yehuda Katz</h1>
  </div>
```

notes/routes/index.hbs 파일에서 author 부분을 false 로 수정합니다. 

```json
{
        author: false,
        firstName: "Yehuda",
        lastName: "Katz"
}
```

브라우저에서 http://localhost:3000/if 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

author 데이터가 있지만 반환값이 boolean의 false이기 때문에, Unknown Author가 출력됩니다. 

```html
  <div class="entry">
        <h1>Unknown Author</h1>
  </div>
```



##### 2) unless

unless helpers를 사용하여 조건부로 블록을 출력할 수 있습니다. if heplers과 반대로 반환값이 논리 자료형인 boolean의 false, undefined, null, "", 0 , [] 인경우 출력합니다.  notes/views/index-unless.hbs 파일에  license값이 존재하지 않으면 WARNING: This entry does not have a license!를 출력하는 표현식을 작성합니다. 

```handlebars
<div class="entry">
{{#unless license}}
<h3 class="warning">WARNING: This entry does not have a license!</h3>
{{/unless}}
</div>
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 추가해줍니다. 

/unless GET url 요청이 들어오게 되면, index-unless.hbs 파일을 렌더링해줍니다.  

```js
router.get('/unless', function(req, res, next) {


    let data = {

    };


    res.render('index-unless', data);
});
```

 브라우저에서 http://localhost:3000/unless 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

```html
<div class="entry">
        <h3 class="warning">WARNING: This entry does not have a license!</h3>
</div>
```



##### 3) each

each helpers를 사용하여 목록을 반복적으로 출력할 수 있습니다.  반복되는 요소를 참조할때 {{this}} 를 사용합니다. 

목록을 출력할때  {{@index}} 은 목록의 순번을 나타내고, {{@first}} 은 목록의 처음, {{@last}}은 목록의 마지막을 나타냅니다.

notes/views/index-each.hbs 파일에  아래는 people 목록을 출력하는 표현식을 작성합니다. 목록의 처음인경우 "처음입니다."를 출력하고 목록의 마지막인 경우 "마지막입니다." 를 출력하게 됩니다. 

```handlebars
<ul class="people_list">
    {{#each people}}
        <li>{{this}}, {{@index}}</li>
        {{#if @first}}
            처음입니다.
        {{/if}}
        {{#if @last}}
            마지막입니다.
        {{/if}}
    {{/each}}
</ul>
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 추가해줍니다. 

/each GET url 요청이 들어오게 되면, index-each.hbs 파일을 렌더링하면서 data를 전송해줍니다.  

```json
router.get('/each', function(req, res, next) {


    let data = {
        people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley"
        ]
    };


    res.render('index-each', data);
});
```

브라우저에서 http://localhost:3000/each 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  

배열의 처음에는 처음입니다, 마지막에 마지막입니다.가 출력됩니다. 

```html
 <ul class="people_list">
        <li>Yehuda Katz, 0</li>
            처음입니다.
        <li>Alan Johnson, 1</li>
        <li>Charles Jolley, 2</li>
            마지막입니다.
</ul>
```



###### 컨텍스트 변경

each helper를 사용하는 경우 경로에 ../ 을 포함시키면 상위 부모 컨텍스트로 변경됩니다.  

notes/views/index-each.hbs 파일에  people 목록과 전체 목록 길이를 출력하도록 표현식을 수정합니다.

```handlebars
<ul class="people_list">
    {{#each people}}
        <li>{{this}}</li>
        context change x : {{AllLength}}
        <br>
        context change o : {{../AllLength}}
    {{/each}}
</ul>
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 수정해줍니다. 

/each GET url 요청이 들어오게 되면, index-each.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/each', function(req, res, next) {


    let data = {
        AllLength: "3",
        people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley"
        ]
    };


    res.render('index-each', data);
});

```

브라우저에서 http://localhost:3000/each 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다.  부모 컨텍스트로 변경하지 않았을 경우 AllLength 가 출력되지 않는 것을 확인 할 수 있습니다. 

```html
<ul class="people_list">
        <li>Yehuda Katz</li>
        context change x : 
        <br>
        context change o : 3
        <li>Alan Johnson</li>
        context change x : 
        <br>
        context change o : 3
        <li>Charles Jolley</li>
        context change x : 
        <br>
        context change o : 3
</ul>
```



###### else

데이터가 없거나 출력할 목록이 없는 경우 {{else}} 를 통해 원하는 데이터를 출력할 수 있습니다.  

notes/views/index-each-else.hbs 파일에  목록 데이터가 없을때 No content을 출력하는 표현식을 작성합니다. 

```handlebars
{{#each paragraphs}}
<p>{{this}}</p>
{{else}}
<p class="empty">No content</p>
{{/each}}
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 추가해줍니다. 

/each/else GET url 요청이 들어오게 되면, index-each-else.hbs 파일을 렌더링해줍니다. 

```js
router.get('/each/else', function(req, res, next) {


    let data = {
    };


    res.render('index-each-else', data);
});
```

브라우저에서 http://localhost:3000/each/else 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다. 

데이터가 없기 때문에 No content가 출력됩니다. 

```html
<p class="empty">No content</p>
```



##### 4) 사용자 정의 helpers

Handlebars.js의 Built-in Helpers는 몇 종류만 지원하지 않기 때문에 그밖에 기능들은 Handlebars.registerHelper 로 등록하여 사용해야 합니다.  사용자 정의 helpers는 notes/app.js 파일에 등록하면 됩니다.  

그러나 사용자 정의 helpers가 많아지게 되면 app.js 파일이 복잡해 지기 때문에 사용자 정의 helpers만 분리해서 등록합니다. 

notes/app.js 파일에 사용자 정의 helpers 파일을 불러오기위한 코드를 추가합니다. 

```js
var helpers = require('./helpers/helper');
```

notes/helpers/helper.js 파일을 생성하고 사용자 정의 helpers 코드를 추가합니다. loud는 소문자를 대문자로 만들어주는 기능을 수행하며, print-person는 firstname과 lastname 이름을 합쳐서 출력해주는 기능을 수행합니다. 

```js
var Handlebars  = require('hbs');

Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})

Handlebars.registerHelper('print-person', function () {
    return this.firstname + ' ' + this.lastname
})
```

notes/views/index-custom.hbs 파일에  lastname을 loud helpers를 사용하여 대문자로 출력하고, people 목록을 print-person helpers를 사용하여 출력하는 표현식을 작성합니다. 

```handlebars
{{firstname}} {{loud lastname}}
<br>
<br>
{{#each people}}
    {{print-person}}<br>
{{/each}}
```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 수정해줍니다. 

/custom GET url 요청이 들어오게 되면, index-custom.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/custom', function(req, res, next) {


    let data = {
        firstname: "Yehuda",
        lastname: "Katz",
        people: [
            {
                firstname: "Nils",
                lastname: "Knappmeier"
            },
            {
                firstname: "Yehuda",
                lastname: "Katz"
            }
        ]
    };


    res.render('index-custom', data);
});

```

브라우저에서 http://localhost:3000/custom 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다. 

loud helper로 인해 KATZ 대문자로 출력되고, print-person helper로 인해 이름이 합쳐서 출력됩니다. 

```html
    Yehuda KATZ
	<br>
	<br>
    Nils Knappmeier<br>
    Yehuda Katz<br>
```



##### 5) 블록 helpers

블록 helpers는 현재와 다른 컨텍스트를 사용하여 출력할 helpers를 의미합니다.  사용자 정의 helpers와 마찬가지로 Handlebars.registerHelper 로 등록하여 사용해야 합니다.  블록 helpers는 notes/app.js 파일에 등록하면 됩니다. 주의해야 할 점은 사용자 정의 helpers와 다르게 helpers 이름앞에 #을 붙여줘야 합니다. 

사용자 helpers와 마찬가지로 블록 helpers가 많아지게 되면 app.js 파일이 복잡해 지기 때문에 helper.js 파일로 분리해서 등록합니다. 

notes/helpers/helper.js 파일에 블록 helpers 코드를 추가합니다. list helpers는 html 목록을 생성하는 기능을 수행합니다.  첫번째 매개변수로 목록을 받고,  두번째 매개변수로 옵션 값을 받습니다. 옵션값은 자동으로 전달됩니다.   

```js
Handlebars.registerHelper("list", function(items, options) {
  const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
  return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});
```

옵션 값 중 `fn`이라는 속성을 사용하는 경우  블록 helpers에서 해당부분을 컨텍스트로 가지고와 문자열을 반환하게 됩니다.  `inverse`이라는 속성을 사용하는 경우  블록 helpers에서 else부분을 컨텍스트로 가지고와 문자열을 반환하게 됩니다. 

notes/views/index-block.hbs 파일에  list helpers를 사용하여 html 목록 생성 및 출력하는 표현식을 작성합니다. 

```handlebars
{{#list people}}
    {{firstname}} {{lastname}}
{{else}}
    inverse
{{/list}}

```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 수정해줍니다. 

/block GET url 요청이 들어오게 되면, index-block.hbs 파일을 렌더링하면서 data를 전송해줍니다. 

```json
router.get('/block', function(req, res, next) {


    let data = {
        people: [
            {
                firstname: "Yehuda",
                lastname: "Katz"
            },
            {
                firstname: "Carl",
                lastname: "Lerche"
            },
            {
                firstname: "Alan",
                lastname: "Johnson"
            }
        ]
    };


    res.render('index-block', data);
});

```

 http://localhost:3000/block 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다. 

helper 생성시, fn 옵션을 사용했기 때문에 people의 이름이 출력됩니다.  fn을 inverse으로 변경하면 people 이름 대신 inverse가 출력됩니다. 

```html
<ul>
<li>Yehuda Katz</li>
<li>Carl Lerche</li>
<li>Alan Johnson</li>
</ul>

```



# Handlebars.js Partials

partials은 생성 후 다른 템플릿에서 직접 불러와 사용할 수 때문에 코드를 재사용할 수 있다는 장점이 있습니다.  예를 들어, 홈페이지에서 상단메뉴바 등 페이지마다 자주 사용되는 요소는 partials을 사용하게 되면 코드의 중복을 줄일 수 있습니다. 

partials은 Handlebars.registerPartial로 등록하여 사용해야 합니다.  helpers와 마찬가지로 notes/app.js 파일에 등록하면 됩니다.  

그러나 partials이 많아지게 되면 app.js 파일이 복잡해 지기 때문에 partial.js 파일로 분리해서 등록합니다. 

notes/app.js 파일에 partial 파일을 불러오기위한 코드를 추가합니다. 

```js
var partial = require('./partials/partial');
```

notes/partials/partial.js 파일을 생성하고 person 이름의 partials을 등록합니다.  person partials은 name, age를 이용하여 문구를 출력해주는 기능을 수행합니다. 

```js
var Handlebars  = require('hbs');

Handlebars.registerPartial(
    "person",
    "{{person.name}} is {{person.age}} years old.\n"
)
```

notes/views/index-partials.hbs 파일에  person partials을 사용하여 이름 is 나이 years old. 목록을 출력하는 표현식을 작성합니다. 만약 person partials을 사용하지 않는다해도 하단 주석처럼 표현식을 사용하면 똑같은 결과값이 출력됩니다. 그러나 여러페이지에서 사용하게 되는 경우 수정이 발생하게 되면 모든 페이지를 수정해줘야 하는 번거로움이 발생합니다.  그래서 자주 사용되는 템플릿은 partials로 생성하는 것이 좋습니다. 

```handlebars
<h1>가입 목록 출력</h1>
{{#each persons}}
   {{>person person=this}}
   {{!-- {{this.name}} is {{this.age}} years old.--}}
{{/each}}

```

url 요청을 처리할 수 있도록  nodes/routes/index.hbs 파일을 다음과 같이 추가해줍니다. 

/partials GET url 요청이 들어오게 되면, index-partials.hbs 파일을 렌더링하면서 data를 전송해줍니다.

```json
router.get('/partials', function(req, res, next) {


    let data = {
        persons: [
            { name: "Nils", age: 20 },
            { name: "Teddy", age: 10 },
            { name: "Nelson", age: 40 }
        ]
    };


    res.render('index-partials', data);
});
```

 브라우저에서 http://localhost:3000/partials 으로 접속하면 아래와 같은 출력을 확인 할 수 있습니다. 

```html
   <h1>가입 목록 출력</h1>
    Nils is 20 years old.
    Teddy is 10 years old.
    Nelson is 40 years old.

```

