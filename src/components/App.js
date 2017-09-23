import React, { Component } from 'react';
import * as PostsAPI  from '../utils/PostsAPI.js'
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'

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

    // get posts on load
    PostsAPI.getPosts().then((posts) => {
      this.setState({posts: posts});
    })

    PostsAPI.getCats().then((cats) => {
      console.log(cats)
      this.setState({categories: cats.categories});
    })
    /* //TEST CODE TO RUN WHEN SERVER STARTS
    .then( () => {
      this.setState({
        categories: [...this.state.categories, {name: "react is one of the categories but there could be more", path: "reacts"}]
      })
    }) */

  }


  render() {

    const {posts, categories} = this.state

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
            <CatList cats={categories} />
          </nav>
          <section className="posts-display">
            <PostList posts={posts} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
