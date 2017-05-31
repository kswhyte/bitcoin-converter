import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import '../styles/Poloniex.scss'

class Poloniex extends React.Component {
  constructor() {
    super()
    this.state = {
      poloniexBtcToETH: 0,
      poloniexBtcToLTC: 0,
      poloniexBtcToDSH: 0,
    }
  }

  componentDidMount() {
    this.fetchPoloniex()
  }

  fetchPoloniex() {
    axios.get('http://localhost:1111/poloniex')
    .then((res) => {
      this.setState({
        poloniexBtcToETH: res.data.BTC_ETH.last,
        poloniexBtcToLTC: res.data.BTC_LTC.last,
        poloniexBtcToDSH: res.data.BTC_DASH.last,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  convertCurrencies(currentCoinValue) {
    return (parseInt(this.props.inputAmount, 10) / currentCoinValue).toFixed(2)
  }

  render() {
    const etheriumConverted = this.convertCurrencies(this.state.poloniexBtcToETH)
    const litecoinConverted = this.convertCurrencies(this.state.poloniexBtcToLTC)
    const dashConverted = this.convertCurrencies(this.state.poloniexBtcToDSH)

    return (
      <section className="btce">
        <h2>Conversion Rates from Poloniex:</h2>
        <p>
          ETH: { etheriumConverted }
        </p>
        <p>
          LTC: { litecoinConverted }
        </p>
        <p>
          DSH: { dashConverted }
        </p>
      </section>
    )
  }
}

Poloniex.propTypes = {
  inputAmount: PropTypes.string,
}

export default Poloniex
