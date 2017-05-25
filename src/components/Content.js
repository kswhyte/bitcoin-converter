import React from 'react'
import '../styles/Content.scss'

class Content extends Component {
  constructor(){
    super()
    this.state = {
      test: '',
    }
  }

  render() {
    return (
      <section>
        <h1>Content Here</h1>
      </section>
    )
  }
}

export default Content
