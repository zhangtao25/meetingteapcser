var express = require('express');
const mongodb = require('mongodb');
var router = express.Router();
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID;

// Connection URL
const url = 'mongodb://101.132.46.146:27017';
// Database Name
const dbName = 'meetingtea';

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, client) {
	  console.log("Connected successfully to server");
	 
	  const db = client.db(dbName);
    const collection = db.collection('goods');

    collection.deleteOne({_id:ObjectID(req.query['0'])},function(err, result) {
      res.send("ok")
    })
	});
});

module.exports = router;