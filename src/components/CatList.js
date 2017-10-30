import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories, setCategory } from '../actions'

class CatList extends Component {

  state = {
    categories: [],
    currentCategory: ""
  }

  componentDidMount() {
    this.props.loadCats();
  }

  filterPosts = (catName) => this.props.filterCats(catName)

  render() {

    const { cats } = this.props

    return (
      <ul className="cat-list">

        <li className="cat-button all-cats"
          onClick={this.filterPosts.bind(this, 'all')}>
          All posts
        </li>
        {cats.map((cat, index) => (
          <li className="cat-button"
            key={index}
            onClick={this.filterPosts.bind(this, cat.name)}>
            {cat.name}
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.categories,
    currentCategory: state.currentCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCats: () => dispatch(loadCategories()),
    filterCats: (category) => dispatch(setCategory(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatList)
