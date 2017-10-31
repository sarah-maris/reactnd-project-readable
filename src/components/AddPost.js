import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPostForm from './AddPostForm'
import { sendPost } from '../actions'
import { reset } from 'redux-form';
import Modal from 'react-modal'

class AddPost extends Component {

  state = {
    postModalOpen: false
  }

  openAddPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closeAddPostModal = () => this.setState(() => ({ postModalOpen: false }))

  addPost = (post) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const newPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    }
    this.props.addNewPost(newPost)
    this.props.resetPostForm()
    this.closeAddPostModal()
  }

  render() {
    const { postModalOpen } = this.state

    return (
    <div>
      <Modal
        className='modal'
        overlayClassName='overlay'
        isOpen={postModalOpen}
        onRequestClose={this.closeAddPostModal}
        contentLabel='Modal'
      >
        {postModalOpen && <AddPostForm onSubmit={this.addPost} />}
      </Modal>
      <button onClick={this.openAddPostModal} className="add-post-button">Add New Post</button>
    </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post)),
    resetPostForm:() => dispatch(reset('addPostForm')),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost)
