import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import formatDate from '../utils/helpers.js'

class PostSummary extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props
    const link = `post/${post.id}`

    return (

        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <div className="post-header">
              <Link to={link} className="post-link post-data">
                <div className="category">{post.category}</div>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <div className="author">{post.author}</div>
                  <div className="comments-icon-white icon">{post.commentCount}</div>
                  <div className="timestamp">{formatDate(post.timestamp)}</div>
                </div>
              </Link>
            </div>
          </div>
        </article>

    )
  }
}

export default PostSummary
