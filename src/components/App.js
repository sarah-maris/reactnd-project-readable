import React, { Component } from 'react';
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'
import { connect } from 'react-redux'
import { loadPosts, loadCategories,  sendPost, sendComment } from '../actions'


class App extends Component {

  state = {
    posts: [],
    commments: {},
    categories: []
  }

  componentDidMount() {
    this.props.loadAllPosts();
    this.props.loadCats();
  }

  render() {

    const {  posts, categories } = this.props

    return (
      <div className="App">
        <header>
          <div className="logo-block">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="title-block">
            <h1  className="app-title">ChitChat</h1>
            <h3  className="app-subtitle">What's on your mind?</h3>
          </div>
        </header>
        <hr className="teal line"/>
        <hr className="gray line"/>
        <hr className="blue line"/>
        <main>
          <nav className="sidebar">
            <CatList cats={ categories} />
          </nav>
          <section className="posts-display">
            <PostList posts={posts} />
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post)),
    addNewComment: (comment) => dispatch(sendComment(comment)),
    loadAllPosts: () => dispatch(loadPosts()),
    loadCats: () => dispatch(loadCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
