import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Post from './Post'

class CatList extends Component {
  static propTypes = {
    cats: PropTypes.array.isRequired,
  }

  render() {

    const {cats} = this.props

    return (
      <ul className="cat-list">

        <li className="cat-button all-cats">
          All posts
        </li>
        {cats.map((cat, index) => (
          <li className="cat-button" key={index}>
            {cat.name}
          </li>

        ))}
      </ul>
    )
  }
}

export default CatList
