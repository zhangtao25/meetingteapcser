var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var router = express.Router();

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
    collection.insertMany([req.query],
      function(err, result) {
        res.send("ok");
      });
	});
});

module.exports = router;
