import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostMain extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

    // show timestamp as date if not today, time if today
    const day = (date) => date.toLocaleString("en-us",
      { year: "2-digit",
        month: "2-digit",
        day: "2-digit"
      });

    const time = (date) => date.toLocaleString("en-us",
      { hour: "2-digit",
        minute: "2-digit"
      });

    const postTime = time(new Date(post.timestamp));
    const postDate = day(new Date(post.timestamp));
    const currentDate = day(new Date());
    const formattedDate = postDate === currentDate? postTime : postDate;

    return (
      <div className="post-main">
        <div className="post-header">
          <div className="category">{post.category}</div>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-meta">
            <div className="author">{post.author}</div>
            <div className="timestamp">{formattedDate}</div>
          </div>
        </div>
        <div className="post-body">{post.body}</div>
      </div>
    )
  }
}

export default PostMain
