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
    // collection.insertMany([req.query],
    //   function(err, result) {
    //     res.send("ok");
    //   });
    // console.log(JSON.parse(req.query['val']))
    let obj = JSON.parse(req.query['val'])
    let handleObj = {
      'classification': JSON.stringify(obj.classification),
      'zh_title': obj.zh_title,
      'zh_desc': obj.zh_desc,
      'en_title': obj.en_title,
      'en_desc': obj.en_desc,
      'saleoff': JSON.stringify(obj.saleoff),
      'price': obj.price,
      'no_discount_price': obj.no_discount_price,
      'figure_img': obj.figure_img
    }
    collection.updateOne({ _id : ObjectID(req.query['id']) },{ $set: handleObj },function(){
      // console.log(req.query)
      res.send("ok")
    })
	});
});

module.exports = router;
