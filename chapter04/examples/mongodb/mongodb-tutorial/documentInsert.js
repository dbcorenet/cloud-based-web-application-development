const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
 
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  insertDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Document를 Insert 할 Collection 지정
  const collection = db.collection('users');

  collection.insert(
    {   username: "user1",
    name: "Mr Hong",
    contact: {
        phone: "010-1234-1234",
        email: "abc@gmail.com"
    },
    age: 20
    }
    , function(err, result) {
    assert.equal(err, null);
    console.log("Inserted");
    callback(result);
  });
}