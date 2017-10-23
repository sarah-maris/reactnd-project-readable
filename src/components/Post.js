import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import Comments from './Comments'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loadPostComments, sendComment } from '../actions'
import AddComment from './AddComment'
import { reset } from 'redux-form';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.loadComments(this.props.post.id);
  }

  submitComment = (post) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: post.body,
      author: post.author,
      parentId: this.props.post.id
    }
    this.props.addNewComment(newPost)
    this.props.resetCommentForm()
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
          postComments={postComments}
          postId={post.id} />
      </div>
      <AddComment onSubmit={this.submitComment} />
    </article>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (postId) => dispatch(loadPostComments(postId)),
    addNewComment: (comment) => dispatch(sendComment(comment)),
    resetCommentForm:() => dispatch(reset('addCommentForm'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
