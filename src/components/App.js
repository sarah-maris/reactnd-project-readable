import React, { Component } from 'react'
import PostList from './PostList'
import logo from '../images/logo.png'
import PostSort from './PostSort'

class App extends Component {

  render() {

    const { posts } = this.props

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
            <PostSort />
          </nav>
          <section className="posts-display">
            <PostList />
          </section>
        </main>
      </div>
    );
  }
}


export default App
