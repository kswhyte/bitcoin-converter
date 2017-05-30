import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

import '../styles/Poloniex.scss'

// require('es6-promise').polyfill()
// require('isomorphic-fetch')


class Poloniex
 extends React.Component {
  constructor() {
    super()
    this.state = {
      poloniexConvertToETH: 0,
      poloniexConvertToLTC: 0,
      poloniexConvertToDSH: 0,
    }
  }

  componentDidMount() {
    this.fetchPoloniex()
  }

  fetchPoloniex() {
    axios.get('http://localhost:1111/poloniex')
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log('RES2', res)
      this.setState({
        poloniexConvertToETH: res.BTC_DASH.last,
        poloniexConvertToLTC: res.BTC_DASH.last,
        poloniexConvertToDSH: res.BTC_DASH.last,
      })
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
  }

  render() {
    return (
      <section className="btce">
        <h2>Conversion Rates from Poloniex:</h2>
        <p>
          ETH: { (parseInt(this.props.inputAmount, 10) / this.state.btceConvertToETH).toFixed(2) }
        </p>
        <p>
          LTC: { (parseInt(this.props.inputAmount, 10) / this.state.btceConvertToLTC).toFixed(2) }
        </p>
        <p>
          DSH: { (parseInt(this.props.inputAmount, 10) / this.state.btceConvertToDSH).toFixed(2) }
        </p>
      </section>
    )
  }
}

export default Poloniex


Poloniex
.propTypes = {
  inputAmount: PropTypes.number,
}
