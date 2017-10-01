import React, { Component } from 'react';
import * as PostsAPI  from '../utils/PostsAPI.js'
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'
import {addPost} from '../actions'
import { connect } from 'react-redux'

/* //TEST CODE TO RUN WHEN SERVER STARTS
PostsAPI.addPost("Test Post",
   "This is the body",
   "Sarah",
   "react is one of the categories but there could be more"
 )
*/
class App extends Component {

  state = {
    posts: [],
    commments: [],
    categories: []
  }

  componentDidMount() {
  /*
    // get posts on load
    PostsAPI.getPosts().then((posts) => {
      this.setState({posts: posts});
    })
*/
    PostsAPI.getCats().then((cats) => {
      this.setState({categories: cats.categories});
    })
  //TEST CODE TO RUN WHEN SERVER STARTS
    .then( () => {
      console.log(this.state)
      this.setState({
        categories: [...this.state.categories, {name: "react is one of the categories but there could be more", path: "reacts"}]
      })
    })
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

    const {posts, comments} = this.props

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
            <CatList cats={this.state.categories} />
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
    //  getCats: () => dispatch(getCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
