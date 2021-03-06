import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategories, setCategory, setSort } from '../actions';
import { Link } from 'react-router-dom';

class PostSort extends Component {
  state = {
    categories: [],
    // show all posts by default
    currentCategory: 'all posts'
  };

  componentDidMount() {
    this.props.loadCats();
  }

  setCat = catName => this.props.changeCat(catName);
  setSort = sortType => this.props.changeSort(sortType);

  render() {
    const { categories, currentCategory } = this.props;
    const sortTypes = ['recent', 'votes', 'title'];

    return (
      <div>
        <div>
          <ul className="cat-list">
            {categories.map((cat, index) => (
              <li
                className={
                  currentCategory === cat.name
                    ? 'cat-button selected-cat'
                    : 'cat-button'
                }
                key={index}
                onClick={this.setCat.bind(this, cat.name)}
              >
                <Link to={cat.path} className="post-link post-data">
                  {cat.name} posts
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="order-title">Order by</h3>
        <div className="sort-list">
          {sortTypes.map((sortType, index) => (
            <div className="sort-items" key={index}>
              <div
                className="sort up"
                onClick={this.setSort.bind(this, `${sortType}Up`)}
              >
                +
              </div>
              <div className="sort-text">{sortType}</div>
              <div
                className="sort down"
                onClick={this.setSort.bind(this, `${sortType}Down`)}
              >
                -
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    currentCategory: state.listState.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCats: () => dispatch(loadCategories()),
    changeCat: category => dispatch(setCategory(category)),
    changeSort: sortType => dispatch(setSort(sortType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSort);
