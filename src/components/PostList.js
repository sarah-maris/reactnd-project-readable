import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'
import AddPost from './AddPost'
import { sendPost } from '../actions'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }
  submitPost = (data) => {

    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: data.title,
      body: data.postBody,
      author: data.author,
      category: data.category
    }
    this.props.addNewPost(newPost)
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

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post))
  }
}

export default connect(
  mapDispatchToProps
)(PostList)
