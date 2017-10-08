import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostSidebar extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  upVote  = (e) =>
    console.log("upVote")

  showComments = () => {
    console.log('click')
document.getElementById(this.props.post.id).style.display = 'block';
  }

  hideComments = () => {
    console.log('click')
document.getElementById(this.props.post.id).style.display = 'none';
  }

  render() {
    const {post} = this.props
  //  const postId = post.id || ''

  return (
    <div className="post-sidebar">
      <div className="voting">
        <div className="up icon" onClick={this.upVote}>up vote</div>
        <div className="votes icon">{post.voteScore}</div>
        <div className="down icon">down vote</div>
      </div>
      <div className="show-comments">
        <div className="up-arrow icon" onClick={this.hideComments}>show comments</div>
        <div className="comments-icon icon">show comments</div>
        <div className="down-arrow icon" onClick={this.showComments}>show comments</div>
      </div>
    </div>
  )
  }
}

export default PostSidebar
