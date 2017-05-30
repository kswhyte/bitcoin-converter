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
// app.use(express.static('public'))

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })
// app.use(express.static(path.resolve(__dirname, '..', 'build')))
//
// app.use(express.static(path.resolve(__dirname, '.', 'build')))
//
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'))
// })

const port = process.env.PORT || 1111
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

app.locals.title = 'Bitcoin Converter'

app.get('/btce', (req, res) => {
  axios.get('https://btc-e.com/api/3/ticker/eth_btc-ltc_btc-dsh_btc')
  .then((response) => {
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
    console.log('RES2', response.data)
  })
  .catch((error) => {
    console.log(error)
  })
  res.send('hello')
})
