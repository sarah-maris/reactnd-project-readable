import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const { post } = this.props
    const options = {
      weekday: "long",
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    const date = new Date(post.timestamp)
    const formattedDate = date.toLocaleTimeString("en-us", options)

    return (
    <li className="post">
      <h3 className="post-title">
        {post.title}
      </h3>
      <div className="post-body">{post.body}</div>
      <div className="author">{post.author}</div>
      <div className="timestamp">{formattedDate}</div>
    </li>
    )
  }
}

export default Post
