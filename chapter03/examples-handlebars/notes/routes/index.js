var express = require('express');
var router = express.Router();



router.get('/student', function(req, res, next) {
    res.render('user2', { student : [
            {"name" : '홍길동'},
            {"name" : '성춘향'}
        ] });
});

/* 기본사용방법 */
router.get('/', function(req, res, next) {

    let data = {
        firstname: "Yehuda",
        lastname: "Katz"
    };

    res.render('index', data);

});


/* 경로 표현식 */
router.get('/path', function(req, res, next) {

    let data = {
        title : "Hello, Handlebars",
        person: {
            firstname: "Yehuda",
            lastname: "Katz"
        }
    };


    res.render('index-path', data);
});


/* 배열 표현식 */
router.get('/arr', function(req, res, next) {

    let data = {
        array: [
            {
                item: "item1"
            },
            {
                item: "item2"
            }
        ]
    };


    res.render('index-arr', data);
});

/* 이스케이프 */
router.get('/escaping', function(req, res, next) {

    let data = {
        specialChars: "& < > \" ' ` = <h1>escaping</h1>"
    };


    res.render('index-escaping', data);
});

/* 주석 */
router.get('/comments', function(req, res, next) {

    let data = {
    };


    res.render('index-comments', data);
});


/* if Helpers */
router.get('/if', function(req, res, next) {


    let data = {
        author: false,
        firstName: "Yehuda",
        lastName: "Katz"
    };


    res.render('index-if', data);
});

/* unless Helpers */
router.get('/unless', function(req, res, next) {


    let data = {

    };


    res.render('index-unless', data);
});


/* each Helpers */
router.get('/each', function(req, res, next) {


    let data = {
        // AllLength: "3",
        people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley"
        ]
    };


    res.render('index-each', data);
});


/* each-else Helpers */
router.get('/each/else', function(req, res, next) {


    let data = {
    };


    res.render('index-each-else', data);
});


/* 사용자 정의 Helpers */
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


/* 블록 Helpers */
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



/* partials */
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


router.get('/partials/2', function(req, res, next) {


    let data = {
        persons: [
            { name: "Nils", age: 20 },
            { name: "Teddy", age: 10 },
            { name: "Nelson", age: 40 }
        ]
    };


    res.render('index-partials-2', data);
});

module.exports = router;
