import React from 'react'
import axios from 'axios'
import '../styles/Content.scss'

require('es6-promise').polyfill()
require('isomorphic-fetch')


class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      btceAverage: 0,
      btceConversion: 0,
      poloniexAverage: 0,
      coinCapAverage: 0,
    }
  }

  // https://btc-e.com/api/3/<method name>/<pair listing>
  // https://btc-e.com/api/3/ticker/btc_usd-btc_rur

  componentDidMount() {
    this.fetchBcieData()
  }

  fetchBcieData() {
    axios.get('http://localhost:1111')
    .then((res) => {
      console.log('RES', res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleInputChange(e) {
    const inputAmount = e.target.value / 1
    this.setState({
      btceConversion: inputAmount,
    })
  }

  render() {
    return (
      <section className="content">
        <h1>Enter Bitcoin Amount to Convert</h1>
        <input
          className="unit-input"
          type="text"
          value={this.state.btceAverage}
          onChange={this.handleInputChange}
        />
        <span className="btce">
          BTC-E average is at
        </span>
        <span className="btce-conversion">
          Bitcoin Converted to BTC-E: {this.state.btceConversion}
        </span>
      </section>
    )
  }
}

export default Content
