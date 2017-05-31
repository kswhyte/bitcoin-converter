import React from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types';

import '../styles/Btce.scss'

// require('es6-promise').polyfill()
// require('isomorphic-fetch')


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
      // eslint-disable-next-line no-console
      console.log(error)
    })
  }

  render() {
    return (
      <section className="btce">
        <h2>Conversion Rates from BTC-E:</h2>
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

export default Btce

// Btce.propTypes = {
//   inputAmount: PropTypes.number,
// }
