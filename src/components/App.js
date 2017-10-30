import React, { Component } from 'react'
import PostList from './PostList'
import logo from '../images/logo.png'
import CatList from './CatList'
import { connect } from 'react-redux'
import { loadPosts, loadCategories,  sendPost, sendComment } from '../actions'


class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.props.loadAllPosts();
  }

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
            <CatList />
          </nav>
          <section className="posts-display">
            <PostList posts={ posts } />
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllPosts: () => dispatch(loadPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
