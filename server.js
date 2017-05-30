const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(express.static(path.resolve(__dirname, '.', 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', 'build', 'index.html'))
})

const port = process.env.PORT || 1111
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

app.locals.title = 'Bitcoin Converter'

app.get('/', (req, res) =>
  res.send('Hello World!')
)

// app.get('/api/v1/bitcoin', (req, res) => {
//   // let polls = app.locals.pollForms
//   // res.send(polls)
// })

app.get('https://btc-e.com/api/3/ticker/btc_usd-btc_btc?ignore_invalid=1', (error, req, res) => {
  if (error && res.statusCode !== 200) {
    console.log('Error when contacting google.com')
}
  console.log('statusCode: ', res.statusCode)
})


// fetchBcieData() {
//   fetch('https://btc-e.com/api/3/ticker/btc_usd-btc_btc?ignore_invalid=1', {
//     method: 'get',
//     mode: 'no-cors',
//     body: JSON.stringify(data),
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//   })
//   // .then((res) => res.json())
//   .then((res) => {
//     // const btcAvg = res.json()
//     console.log('hi', res)
//     this.setState({
//       btceAverage: res.btc_usd,
//     })
//   })
//   .catch((err) => {
//     throw err
//   })
// }
