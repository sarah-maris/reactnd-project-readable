import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories, setCategory, setSort } from '../actions'

class PostSort extends Component {

  state = {
    categories: [],
    currentCategory: ""
  }

  componentDidMount() {
    this.props.loadCats();
  }

  setCat = (catName) => this.props.changeCat(catName)
  setSort = (sortType) => this.props.changeSort(sortType)

  render() {

    const { categories, currentCategory } = this.props
    const sortTypes = ['Title', 'Votes']
  //  const titleSorts, 'titleAToZ', 'titleZtoA']

    return (
      <div>
        <ul className="cat-list">
          <li className={ currentCategory === 'all' ? "cat-button selected-cat" : "cat-button"}
            onClick={this.setCat.bind(this, 'all')}>
            All posts
          </li>
          {categories.map((cat, index) => (
            <li className={ currentCategory === cat.name ? "cat-button selected-cat" : "cat-button"}
              key={index}
              onClick={this.setCat.bind(this, cat.name)}>
              {cat.name}
            </li>
          ))}
        </ul>
        <ul className="sort-list">
          {sortTypes.map((sortType, index) => (
            <li className="cat-button"
              key={index}
              onClick={this.setSort.bind(this, sortType)}>
              {sortType}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    currentCategory: state.listState.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCats: () => dispatch(loadCategories()),
    changeCat: (category) => dispatch(setCategory(category)),
    changeSort: (sortType) => dispatch(setSort(sortType))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSort)
