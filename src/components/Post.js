import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Post extends Component {
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
    <article className="post">
      <div className="post-header">
        <div className="post-meta">
          <div className="author">{post.category}</div>
          <div className="votes">{post.voteScore}</div>
        </div>
        <h3 className="post-title">
          {post.title}
        </h3>
        <div className="post-meta">
          <div className="author">{post.author}</div>
          <div className="timestamp">{formattedDate}</div>
        </div>
      </div>
      <div className="post-body">{post.body}</div>
      <div className="voting">
        <div className="up-vote">up</div>
        <div className="down-vote">down</div>
      </div>
    </article>
    )
  }
}

export default Post
