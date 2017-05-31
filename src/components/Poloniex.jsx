import React from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

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

  render() {
    return (
      <section className="btce">
        <h2>Conversion Rates from Poloniex:</h2>
        <p>
          ETH: { (parseInt(this.props.inputAmount, 10) / this.state.poloniexBtcToETH).toFixed(2) }
        </p>
        <p>
          LTC: { (parseInt(this.props.inputAmount, 10) / this.state.poloniexBtcToLTC).toFixed(2) }
        </p>
        <p>
          DSH: { (parseInt(this.props.inputAmount, 10) / this.state.poloniexBtcToDSH).toFixed(2) }
        </p>
      </section>
    )
  }
}

export default Poloniex

// Poloniex
// .propTypes = {
//   inputAmount: PropTypes.number,
// }
