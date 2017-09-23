import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import PropTypes from 'prop-types'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post} = this.props

    return (
    <article className="post">
      <PostSidebar post={post} />
      <PostMain post={post} />
    </article>
    )
  }
}

export default Post
