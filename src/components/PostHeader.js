import React, { Component } from 'react';
import PropTypes from 'prop-types'
import formatDate from "../utils/helpers.js"
import EditPostForm from './EditPostForm'
import { connect } from 'react-redux'
import {  editPost, destroyPost } from '../actions'
import { reset } from 'redux-form'
import Modal from 'react-modal'

class PostHeader extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  state = {
    postModalOpen: false
  }

  openEditPostModal = () => this.setState(() => ({ postModalOpen: true }))

  closeEditPostModal = () => this.setState(() => ({ postModalOpen: false }))

  editPost = (post) => {
    const updatedPost = {
      id: post.id,
      timestamp: Date.now(), //update with edit time
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      commentCount: post.commentCount
    }

    this.props.updatePost(updatedPost)
    this.props.resetPostForm()
    this.closeEditPostModal()
  }

  deletePost =(postId) => this.props.destroyPost(postId)

  render() {
    const {post} = this.props
    const { postModalOpen } = this.state

    return (
      <div>
        <Modal
          className='modal post-modal'
          overlayClassName='overlay'
          isOpen={postModalOpen}
          onRequestClose={this.closeAddPostModal}
          contentLabel='Modal'
        >
          {postModalOpen && <EditPostForm
            initialValues={post}
            onSubmit={this.editPost} />}
        </Modal>
        <div className="post-header">
          <div className="post-meta">
            <div className="category">{post.category}</div>
            <div className="edit-white  icon" onClick={this.openEditPostModal}></div>
            <div className="delete-white icon"
              onClick={this.deletePost.bind(this, post.id)}></div>
          </div>
          <h3 className="post-title">{post.title}</h3>
          <div className="post-meta">
            <div className="author">{post.author}</div>
            <div className="comments-icon-white icon">{post.commentCount}</div>
            <div className="timestamp">{formatDate(post.timestamp)}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch(editPost(post)),
    resetPostForm: () => dispatch(reset('postForm')),
    destroyPost:  (postId) => dispatch(destroyPost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostHeader)
