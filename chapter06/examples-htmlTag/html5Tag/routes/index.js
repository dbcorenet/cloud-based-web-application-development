var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/htmlTag', function(req, res, next) {
  res.render('htmlTag');
});


router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.render('htmlTagLogin', { "usename" : req.body.id });
});

router.get('/login', function(req, res, next) {
  console.log(req.query);
  res.render('htmlTagLogin', { "usename" : req.query.id });
});

module.exports = router;
