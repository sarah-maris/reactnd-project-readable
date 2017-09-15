import React, { Component } from 'react';
import * as PostsAPI  from '../utils/PostsAPI.js'
import PostList from './PostList.js'
import logo from '../images/logo.png'

class App extends Component {

  state = {
    posts: [],
    commments: []
  }

  componentDidMount() {

    // get posts on load
    PostsAPI.getPosts().then((posts) => {
      this.setState({posts: posts});
    })
  }


  render() {
    const { posts } = this.state

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
        <div>
          <PostList posts={posts} />
        </div>
      </div>
    );
  }
}

export default App;
