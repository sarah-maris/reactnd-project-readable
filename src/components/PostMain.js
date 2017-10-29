import React, { Component } from 'react';
import PropTypes from 'prop-types'
import formatDate from "../utils/helpers.js"

class PostMain extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

    return (
      <div>
        <div className="post-header">
          <div className="category">{post.category}</div>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-meta">
            <div className="author">{post.author}</div>
            <div className="num-comments">{post.commentCount}</div>
            <div className="timestamp">{formatDate(post.timestamp)}</div>
          </div>
        </div>
        <div className="post-body">{post.body}</div>
      </div>
    )
  }
}

export default PostMain
