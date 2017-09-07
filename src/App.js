import React, { Component } from 'react';
import './App.css';
import * as PostsAPI  from './PostsAPI.js'

PostsAPI.getCats();
PostsAPI.getCatPosts('react');
PostsAPI.getPosts();
PostsAPI.getPostDetails('8xf0y6ziyjabvozdd253nd');
PostsAPI.getComments('8xf0y6ziyjabvozdd253nd');
PostsAPI.getCommentDetails('894tuq4ut84ut8v4t8wun89g');
PostsAPI.editComment({id:'894tuq4ut84ut8v4t8wun89g', timestamp:'1502959064340', body:'The edited comment'})
PostsAPI.getComments('8xf0y6ziyjabvozdd253nd');
PostsAPI.addPost({title:'Adding another post!',
                  body:'Here is the post body',
                  author: 'Sarah',
                  category: 'react'})
PostsAPI.getPosts();

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
