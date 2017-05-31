import React from 'react'
import axios from 'axios'
// import PropTypes from 'prop-types'

// import '../styles/CoinCap.scss'

class CoinCap extends React.Component {
  constructor() {
    super()
    this.state = {
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
      console.log('RESdata1', res.data[1])
      this.setState({
        coinCapBTC: res.data[0].price,
        coinCapETH: res.data[1].price,
        coinCapLTC: res.data[5].price,
        coinCapDSH: res.data[6].price,
      })
      // this.findCoinRates(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // findCoinRates(bitcoinData) {
  //   console.log('res0', bitcoinData)
  //   bitcoinData.find(coin => {
  //     coin.
  //   })
  // }

  render() {
    return (
      <section className="btce">
        <h2>Conversion Rates from CoinCap:</h2>
        <p>
          ETH: { (parseInt(this.props.inputAmount, 10) / this.state.coinCapETH).toFixed(2) }
        </p>
        <p>
          LTC: { (parseInt(this.props.inputAmount, 10) / this.state.coinCapLTC).toFixed(2) }
        </p>
        <p>
          DSH: { (parseInt(this.props.inputAmount, 10) / this.state.coinCapDSH).toFixed(2) }
        </p>
      </section>
    )
  }
}

export default CoinCap

// CoinCap
// .propTypes = {
//   inputAmount: PropTypes.number,
// }
