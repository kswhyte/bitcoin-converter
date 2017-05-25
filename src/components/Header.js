import React from 'react'
import '../styles/Header.scss'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      test: '',
    }
  }

  render() {
    return (
      <header>
        <h1>Bitcoin Converter</h1>
      </header>
    )
  }
}

export default Header
