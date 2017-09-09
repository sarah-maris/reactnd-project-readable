import React, { Component } from 'react';
import './App.css';
import * as PostsAPI  from './PostsAPI.js'


PostsAPI.getComments('8xf0y6ziyjabvozdd253nd');
/*PostsAPI.getCats();
//PostsAPI.getCatPosts('react');
//PostsAPI.getPosts();
PostsAPI.getPostDetails('8xf0y6ziyjabvozdd253nd')
PostsAPI.votePost('8xf0y6ziyjabvozdd253nd', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote');
PostsAPI.voteComment('8tu4bsun805n8un48ve89', 'downVote');
*/
//PostsAPI.votePost('8xf0y6ziyjabvozdd253nd', 'fred');
//PostsAPI.votePost('8xf0y6ziyjabvozdd253nd', 'downVote');
//PostsAPI.votePost('8xf0y6ziyjabvozdd253nd', 'downVote');

//PostsAPI.getCommentDetails('894tuq4ut84ut8v4t8wun89g');
//PostsAPI.editComment({id:'894tuq4ut84ut8v4t8wun89g', timestamp:'1502959064340', body:'The edited comment'})
//PostsAPI.getComments('8xf0y6ziyjabvozdd253nd');
/*PostsAPI.addPost({title:'Adding another post!',
                  body:'Here is the post body. Wow@',
                  author: 'Sarah',
                  category: 'react'})

PostsAPI.addPost({
  title:'Posts! More Posts!!!!',
  body:'Here is the post body. What can I say?',
  author: 'Sam',
  category: 'react'
})

PostsAPI.addComment({
  body:'Need to say more?',
  author: 'Sarah',
  parentId: '8xf0y6ziyjabvozdd253nd'
})

PostsAPI.editPost({
  id: '8xf0y6ziyjabvozdd253nd',
  title:'Wow! This was changed even more',
  body:'The body was updated too',
  author: 'Gum',
  category: 'baseball'
})
PostsAPI.deletePost('b22594b0-937a-11e7-be79-27964ed959fc');
PostsAPI.getPosts();
*/
PostsAPI.deleteComment('731cb990-9589-11e7-b44f-fbee731a0247');
PostsAPI.getComments('8xf0y6ziyjabvozdd253nd');

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
