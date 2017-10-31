import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { loadPostComments, getPost } from '../actions'


class SinglePost extends Component {

  state = {
    postId: this.props.match.params.postId
  }

  componentDidMount() {
    this.props.loadComments(this.state.postId)
    this.props.loadPost(this.state.postId);
  }

  deletePost =(postId) => this.props.destroyPost(postId)

  render() {
   const { posts, comments } = this.props
    const post = posts[0] || {}
    const postComments = comments[post.id] || []

    return (
        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <PostMain post={post} />
            {post.id &&
              <CommentList
                postComments={postComments}
                postId={post.id} />  }
          </div>
        </article>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (postId) => dispatch(loadPostComments(postId)),
    loadPost: (postId) => dispatch(getPost(postId)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost)
