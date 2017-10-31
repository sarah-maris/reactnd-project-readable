import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class PostSummary extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props
    const link = `post/${post.id}`

    return (
      <Link to={link} className="post-link">
        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <PostHeader post={post} />
          </div>
        </article>
      </Link>
    )
  }
}

export default PostSummary
