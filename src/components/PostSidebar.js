import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostSidebar extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  upVote  = (e) =>
    console.log("upVote")

  render() {
    const {post} = this.props
    const postId = post.id || ''

  return (
    <div className="post-sidebar">
      <div className="voting">
        <div className="up icon" onClick={this.upVote}>up vote</div>
        <div className="votes icon">{post.voteScore}</div>
        <div className="down icon">down vote</div>
        <div className="comments-icon icon">+</div>
      </div>
    </div>
  )
  }
}

export default PostSidebar
