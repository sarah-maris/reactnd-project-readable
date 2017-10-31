import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostHeader from './PostHeader'
import PropTypes from 'prop-types'


class PostSummary extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

    return (
      <div>
        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <PostHeader post={post} />
          </div>
        </article>
      </div>
    )
  }
}

export default PostSummary
