import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PostList from './PostList'
import logo from '../images/logo.png'
import Sidebar from './Sidebar'
import SinglePost from './SinglePost'

class App extends Component {

  render() {

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
        <Switch>
          <Route exact path='/' render={(props) => (
            <main>
              <div className="sidebar">
                <Sidebar />
              </div>
              <section className="posts-display">
                <PostList category={'all'}/>
              </section>
            </main>
          )}/>
          <Route path='/:category/:postId' render={(props) => <SinglePost {...props} />} />
          <Route  path='/:category' render={(props) => (
            <main>
              <div className="sidebar">
                <Sidebar />
              </div>
              <section className="posts-display">
                <PostList {...props}/>
              </section>
            </main>
          )}/>
        </Switch>
      </div>
    );
  }
}


export default App
