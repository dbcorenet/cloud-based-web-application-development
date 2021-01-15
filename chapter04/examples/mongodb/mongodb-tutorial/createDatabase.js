const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// 접속할 mongodb URL 정보
const url = 'mongodb://localhost:27017';
 
// Database 이름
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected");
 
  const db = client.db(dbName);
 
  client.close();
});