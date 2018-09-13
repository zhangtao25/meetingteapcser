var express = require('express');
var router = express.Router();

// Import mongodb dependency
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const url = 'mongodb://101.132.46.146:27017';
const dbName = 'meetingtea';

router.get('/addusers', (req, res, next) => {
  
});



module.exports = router;
