import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { sendComment } from '../actions'

import Modal from 'react-modal'

class CommentList extends Component {
  static propTypes = {
    postComments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
  }
  state = {
    commentModalOpen: false
  }

  openAddCommentModal = () => this.setState(() => ({ commentModalOpen: true }))
  closeAddCommentModal = () => this.setState(() => ({ commentModalOpen: false }))

  submitComment = (post) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: post.body,
      author: post.author,
      parentId: this.props.postId
    }
    this.props.addNewComment(newPost)
    this.props.resetCommentForm()
    this.closeAddCommentModal()
  }

  render() {
    const { postComments, postId } = this.props
    const { commentModalOpen } = this.state

    return (
      <div>
        <Modal
          className='modal comment-modal'
          overlayClassName='overlay'
          isOpen={commentModalOpen}
          onRequestClose={this.closeAddCommentModal}
          contentLabel='Modal'
        >
          {commentModalOpen && <CommentForm onSubmit={this.submitComment} />}
        </Modal>
        <div className="comments-list" id={postId}>
          {postComments.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
            />
          ))}
          <button onClick={this.openAddCommentModal} className="add-button">Add Comment</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewComment: (comment) => dispatch(sendComment(comment)),
    resetCommentForm:() => dispatch(reset('commentForm'))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
