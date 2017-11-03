import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FourOhFour extends Component {

  render() {
    return (
        <div>
          <h3>Sorry, this page is not available. </h3>
          <Link className="home-link" to="/">
            <h4  className="app-title">Want to try again?</h4>
          </Link>
        </div>
      )
    }
}

export default FourOhFour
