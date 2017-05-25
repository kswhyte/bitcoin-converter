import React from 'react'
import '../styles/App.scss'

import Header from './Header.jsx'
import Content from './Content.jsx'

class App extends Component {
  constructor(){
    super()
    this.state = {
      test: '',
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
