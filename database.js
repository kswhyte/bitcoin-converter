const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

// var mongoose = require('mongoose')
//
// mongoose.connect('mongodb://localhost/currency', () => {
//   console.log('connected.')
//   //Add currencies
//   let currencies = [{
//
//   }]
//
//   //iterate through them
// })


// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');
//
// // Connection URL
// var url = 'mongodb://localhost:27017/myproject';
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   db.close();
// });
