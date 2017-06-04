const express = require('express')
const mongoose = require('mongoose')
require('./server.js')

const app = express()

mongoose.connect('mongodb://localhost:27017/test ')
const Schema = mongoose.Schema

// this is like a brlueprint or layout
const coinCurrencySchema = new Schema({
  nameLong: String,
  nameShort: String,
  price: Number,
  time: String,
}, { collection: 'coin-currencies' })

// creates the actual model we can use to later instantiate it and write data to the db
const CoinCurrency = mongoose.model('CoinCurrency', coinCurrencySchema)

// how to get data
app.get('/get-currencies', (req, res, next) => {
  CoinCurrency.find()
    .then((doc) => {
      res.render('index', { items: doc })
    })
})

// how to store data
app.post('/insert', (req, res, next) => {
  const item = {
    nameLong: req.body.nameLong,
    nameShort: req.body.nameShort,
    price: req.body.price,
    time: req.body.time,
  }
  // using our model to create an instance of it
  // pass in created item below
  const data = new CoinCurrency(item)
  data.save()

  res.redirect('/')
})

app.post('/update', (req, res, next) => {
  const id = req.body.id

  CoinCurrency.findById(id, (err, doc) => {
    if (err) {
      console.log('Error, No entry found')
    }
    doc.nameLong = req.body.nameLong
    doc.nameShort = req.body.nameShort
    doc.price = req.body.price
    doc.time = req.body.time
    doc.save()
  })
  res.redirect('/')
})

app.post('/delete', (req, res, next) => {
  const id = req.body.id

  CoinCurrency.findByIdAndRemove(id).exec()
  res.redirect('/')
})

// ---
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', (database) => {
//   db = database
//   // we're connected!
// })

// coinSchema.methods.findSimilarTypes = (cb) => {
//   return this.find({ name: new RegExp(name, 'i') }, cb)
// }
//
// const Currency = mongoose.model('Currency', coinSchema)
//
// const ethereum = new Currency({ name: 'Ethereum' });
// console.log(ethereum.name)
//
// coinSchema.methods.speak = () => {
//   const coinPreference = this.name
//     ? `Huey loves ${this.name}`
//     : "I don't have a coin preference"
//   console.log(coinPreference)
// }

// // assign a function to the "statics" object of our animalSchema
// animalSchema.statics.findByName = function(name, cb) {
//   return this.find({ name: new RegExp(name, 'i') }, cb);
// };
//
// var Animal = mongoose.model('Animal', animalSchema);
// Animal.findByName('fido', function(err, animals) {
//   console.log(animals);
// });
