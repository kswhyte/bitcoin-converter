const mongoose = require('mongoose')

const CurrencySchema = {
  name: String,
  value: Number
}

const Currency = mongoose.model('Currency', CurrencySchema, 'currencies')

module.exports = Currency
