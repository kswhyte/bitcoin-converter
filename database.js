const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
})
// ---
const coinSchema = mongoose.Schema({
  nameLong: String,
  nameShort: String,
  price: Number,
  time: String,
})

const Currency = mongoose.model('Currency', coinSchema)

const ethereum = new Currency({ name: 'Ethereum' });
console.log(ethereum.name)

coinSchema.methods.speak = () => {
  const coinPreference = this.name
    ? `Huey loves  ${this.name}`
    : "I don't have a coin preference"
  console.log(coinPreference)
}

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
