import React, { Component } from 'react';
import * as PostsAPI  from '../utils/PostsAPI.js'
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'
import { connect } from 'react-redux'
import { loadPosts, loadCategories, loadPostComments, sendPost, sendComment } from '../actions'


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

  submitPost = () => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: 'New Post',
      body: 'this is the New Post body',
      author: 'Sarah',
      category: 'react'
    }

    this.props.addNewPost(newPost)
  }

  submitComment = () => {
      // to create unique IDs for new comments
      const uuidv1 = require('uuid/v1');
      const time = new Date;
      const newComment = {
        id: uuidv1(),
        timestamp: time,
        body: `This is comment ${time.getMinutes()}:${time.getSeconds()}`,
        author: 'Sarah',
        parentId: '8xf0y6ziyjabvozdd253nd'
      }

      this.props.addNewComment(newComment)
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
            <button onClick={this.submitPost}>Add Posts</button>
            <button onClick={this.submitComment}>Add Comment</button>
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
  return { posts: state.posts,
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
