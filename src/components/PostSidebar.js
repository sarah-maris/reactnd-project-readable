import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostSidebar extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

  return (
    <div className="post-sidebar">
      <div className="voting">
        <div className="up icon">up vote</div>
        <div className="votes icon">{post.voteScore}</div>
        <div className="down icon">up vote</div>
      </div>
      <div className="show-comments icon">show comments</div>
    </div>
  )
  }
}

export default PostSidebar
