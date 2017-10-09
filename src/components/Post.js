import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import Comments from './Comments'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loadPostComments } from '../actions'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.loadComments(this.props.post.id);
  }

  render() {
    const {post, comments} = this.props
    const postComments = comments[post.id] || []

    return (
    <article className="post">
      <PostSidebar post={post} />
      <div className="post-main">
        <PostMain post={post} />
        <Comments
          comments={postComments}
          id={post.id} />
      </div>
    </article>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (postId) => dispatch(loadPostComments(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
