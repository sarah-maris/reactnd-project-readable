import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import formatDate from "../utils/helpers.js"

class PostMain extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

    return (
      <div>
        <PostHeader post={post} />
        <div className="post-body">{post.body}</div>
      </div>
    )
  }
}

export default PostMain
