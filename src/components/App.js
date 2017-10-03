import React, { Component } from 'react';
import * as PostsAPI  from '../utils/PostsAPI.js'
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'
import {addPost} from '../actions'
import { connect } from 'react-redux'
import { loadPosts, loadCategories } from '../actions'


class App extends Component {

  state = {
    posts: [],
    commments: [],
    categories: []
  }

  componentDidMount() {
    this.props.loadAllPosts();
    this.props.loadCats();
  }

  submitPost = () => {
    // to create unique IDs foe new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: 'New Post',
      meal: 'breakfast',
      body: 'this is the Newcvbncb Post body',
      author: 'Sarah',
      category: 'react'
    }

    this.props.addNewPost(newPost)

}

  render() {

    const {  posts, comments, categories } = this.props

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
            <button onClick={this.submitPost}>Submit</button>
          </nav>
          <section className="posts-display">
            <PostList posts={posts} />
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { posts: state.posts,
           comments: state.comments,
           categories: state.categories
         }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewPost: (data) => dispatch(addPost(data)),
    loadAllPosts: () => dispatch(loadPosts()),
    loadCats: () => dispatch(loadCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
