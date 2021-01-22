const Note = require('./Note');
const MongoClient = require('mongodb').MongoClient;

const MongoUrl = 'mongodb://127.0.0.1:27017';
const DataBaseName = 'mongoTutorial';
const CollectionName = 'Notes'

var notes = [];

exports.update = exports.create = async function(key, title, body) {
  
  notes[key] = new Note(key, title, body);

  
  let noteJSON = notes[key].toJSON();

  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });

  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.insertOne(noteJSON);
  
};

exports.read = async function(key) {


  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.findOne({"key": key});
  console.log(result);
  return result;

};

exports.destroy = async function(key) {
  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.deleteOne({"key": key});
  return;
};

exports.keylist = async function() { 
  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.find({}).toArray();
  return result;
};


exports.count = async function() { 
  let client = await MongoClient.connect(MongoUrl).
  catch(err => {
    console.log(err);
  });
  let db = client.db(DataBaseName);
  let collection = db.collection(CollectionName);
  let result = await collection.count({});
  return result;
};

exports.close = async function() { }