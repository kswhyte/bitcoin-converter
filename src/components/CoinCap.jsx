import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import '../styles/CoinCap.scss'

class CoinCap extends React.Component {
  constructor() {
    super()
    this.state = {
      coinCapBTC: 0,
      coinCapETH: 0,
      coinCapLTC: 0,
      coinCapDSH: 0,
    }
  }

  componentDidMount() {
    this.fetchCoinCap()
  }

  fetchCoinCap() {
    axios.get('http://localhost:1111/coincap')
    .then((res) => {
      this.setState({
        coinCapBTC: res.data[0].price,
        coinCapETH: res.data[1].price,
        coinCapLTC: res.data[5].price,
        coinCapDSH: res.data[6].price,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  convertCurrencies(currentCoinValue) {
    if (this.state.inputAmount === '') {
      return 0
    }
    const bitcoinCashVal = parseInt(this.props.inputAmount, 10) * this.state.coinCapBTC
    return (bitcoinCashVal / currentCoinValue).toFixed(2)
  }

  render() {
    const etheriumConverted = this.convertCurrencies(this.state.coinCapETH)
    const litecoinConverted = this.convertCurrencies(this.state.coinCapLTC)
    const dashConverted = this.convertCurrencies(this.state.coinCapDSH)

    return (
      <section className="btce">
        <h2>Conversion Rates from CoinCap:</h2>
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

CoinCap.propTypes = {
  inputAmount: PropTypes.string,
}

export default CoinCap
