import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'
import AddPost from './AddPost'
import { sendPost } from '../actions'
import { reset } from 'redux-form';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  submitPost = (post) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    }
    this.props.addNewPost(newPost)
    this.props.resetPostForm()
  }

  render() {
    const { posts } = this.props

    return (
    <section className="posts-list">
      <AddPost onSubmit={this.submitPost} />
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
        />
      ))}
    </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post)),
    resetPostForm:() => dispatch(reset('addPostForm'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
