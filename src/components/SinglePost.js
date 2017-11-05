import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { loadPostComments, getPost } from '../actions'
import { Route, withRouter } from 'react-router-dom'
import NotFound from './NotFound'

class SinglePost extends Component {

  state = {
    postId: this.props.match.params.postId
  }

  componentDidMount() {
    this.props.loadPost(this.state.postId)
    this.props.loadComments(this.state.postId)
  }

  deletePost =(postId) => this.props.destroyPost(postId)

  render() {
    const { posts, comments, listState } = this.props
    const post = posts[0] || {}
    const postComments = comments[post.id] || []

    return (
      <div>
        {
          listState.error.type ? (
            <Route component={ NotFound } />
          ) : (
            <article className="single">
              <div className="post">
                <PostSidebar post={post} />
                <div className="post-main">
                  <PostMain post={post} />
                </div>
              </div>
              {post.id &&
                <CommentList
                  postComments={postComments}
                  postId={post.id} />
              }
            </article>
            )}
            </div>
        )
      }
    }

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    posts: state.posts,
    listState: state.listState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (postId) => dispatch(loadPostComments(postId)),
    loadPost: (postId) => dispatch(getPost(postId)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost))
