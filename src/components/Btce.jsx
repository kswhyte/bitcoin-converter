import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

import '../styles/Btce.scss'

class Btce extends React.Component {
  constructor() {
    super()
    this.state = {
      btceConvertToETH: 0,
      btceConvertToLTC: 0,
      btceConvertToDSH: 0,
    }
  }

  componentDidMount() {
    this.fetchBtceData()
  }

  fetchBtceData() {
    axios.get('http://localhost:1111/btce')
    .then((res) => {
      this.setState({
        btceConvertToETH: res.data.eth_btc.last,
        btceConvertToLTC: res.data.ltc_btc.last,
        btceConvertToDSH: res.data.dsh_btc.last,
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
    const etheriumConverted = this.convertCurrencies(this.state.btceConvertToETH)
    const litecoinConverted = this.convertCurrencies(this.state.btceConvertToLTC)
    const dashConverted = this.convertCurrencies(this.state.btceConvertToDSH)

    return (
      <section className="btce">
        <h2>Conversion Rates from BTC-E:</h2>
        <p>ETH: { etheriumConverted }</p>
        <p>LTC: { litecoinConverted }</p>
        <p>DSH: { dashConverted }</p>
      </section>
    )
  }
}

Btce.propTypes = {
  inputAmount: PropTypes.string,
}

export default Btce
