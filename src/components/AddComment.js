import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddCommentForm from './AddCommentForm'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { sendComment } from '../actions'
import Modal from 'react-modal'

class AddComment extends Component {
  static propTypes = {
    postId: PropTypes.string.isRequired
  }

  state = {
    commentModalOpen: false
  }

  openAddCommentModal = () => this.setState(() => ({ commentModalOpen: true }))
  closeAddCommentModal = () => this.setState(() => ({ commentModalOpen: false }))

  submitComment = (comment) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newComment = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: comment.body,
      author: comment.author,
      parentId: this.props.postId
    }
    this.props.addNewComment(newComment)
    this.props.resetCommentForm()
    this.closeAddCommentModal()
  }

  render() {
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
          <div className="close-click" onClick={this.closeAddCommentModal}>X</div>
          {commentModalOpen && <AddCommentForm onSubmit={this.submitComment} />}
        </Modal>
        <button onClick={this.openAddCommentModal} className="join-in">
          <div className="add-comment icon"></div>
          <div className="add-comment-text">Join the conversation!</div>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
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
)(AddComment)
