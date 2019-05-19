import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h3 className="not-available">Sorry, this page is not available. </h3>
        <Link className="home-link" to="/">
          <h4 className="try-again">Want to try again?</h4>
        </Link>
      </div>
    );
  }
}

export default NotFound;
