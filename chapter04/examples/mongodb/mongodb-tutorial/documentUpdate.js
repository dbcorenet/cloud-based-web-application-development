const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
const url = 'mongodb://localhost:27017';
 
const dbName = 'mongoTutorial';
 
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  const db = client.db(dbName);
 
  updateDocument(db, function() {
      client.close();
  });
});

const updateDocument = function(db, callback) {
  
    const collection = db.collection('users');
    
    collection.updateOne({ age : 20 }
      , { $set: { username : "user" } }, function(err, result) {
      assert.equal(err, null);
      console.log("Updated");
      callback(result);
    });
  }