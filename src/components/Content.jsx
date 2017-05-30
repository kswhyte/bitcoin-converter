import React from 'react'

import Btce from './Btce.jsx'
import Poloniex from './Poloniex.jsx'
import '../styles/Content.scss'

// require('es6-promise').polyfill()
// require('isomorphic-fetch')

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: 0,
    }
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    return (
      <section className="content">
        <h1>Enter Bitcoin Amount to Convert</h1>
        <span className="input-value">
          { this.state.inputValue } will be converted
        </span>
        <input
          className="unit-input"
          type="text"
          value={this.state.btceAverage}
          onChange={(e) => this.handleInputChange(e)}
        />
        <button
          className="submit-btn"
        >
        Submit
        </button>
        <Btce
          inputAmount={this.state.inputValue}
        />
        <Poloniex
          inputAmount={this.state.inputValue}
        />
      </section>
    )
  }
}

export default Content
