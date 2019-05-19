import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostChange from './PostChange';
import formatDate from '../utils/helpers.js';

class PostHeader extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  render() {
    const { post } = this.props;

    return (
      <div className="post-header">
        <div className="post-data">
          <div className="category">{post.category}</div>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-meta">
            <div className="author">{post.author}</div>
            <div className="comments-icon-white icon">{post.commentCount}</div>
            <div className="timestamp">{formatDate(post.timestamp)}</div>
          </div>
        </div>
        <PostChange post={post} />
      </div>
    );
  }
}

export default PostHeader;
