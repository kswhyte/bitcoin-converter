const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
// const path = require('path')

require('./database.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 1111
const server = http.createServer(app)

// -----
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

// ---
server.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

app.locals.title = 'Bitcoin Converter'

app.get('/btce', (req, res) => {
  axios.get('https://btc-e.com/api/3/ticker/eth_btc-ltc_btc-dsh_btc')
  .then((response) => {
    // console.log('RES_btce', response)
    // send response into mongo db
    // res.send(grab the data from mongo to send back to client)
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
})

app.get('/poloniex', (req, res) => {
  axios.get('https://poloniex.com/public?command=returnTicker')
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
})

app.get('/coincap', (req, res) => {
  axios.get('http://www.coincap.io/front')
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
})
