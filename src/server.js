const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 1111
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})

app.locals.title = 'Bitcoin Converter'

app.get('/api/v1/bitcoin', (req, res) => {
  // let polls = app.locals.pollForms
  // res.send(polls)
})
