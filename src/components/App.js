import React from 'react'
import './App.scss'

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
        <Footer />
      </div>
    )
  }
}

export default App
