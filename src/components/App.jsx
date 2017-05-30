import React from 'react'
import '../styles/App.scss'

import Header from './Header.jsx'
import Content from './Content.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      apiData: 'api test data',
    }
  }


  render() {
    return (
      <div className="site-wrapper">
        <Header />
        <Content />
      </div>
    )
  }
}

export default App
