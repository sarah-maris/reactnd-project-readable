import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Post from './Post'
import PostForm from './PostForm'
import { sendPost } from '../actions'
import { reset } from 'redux-form';
import Modal from 'react-modal'

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

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
    const { posts } = this.props
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
        {postModalOpen && <PostForm onSubmit={this.addPost} />}
      </Modal>
      <button onClick={this.openAddPostModal} className="add-button">Add New Post</button>
      <section className="posts-list">
        {posts.map((post) => (
          <Post
            post={post}
            key={post.id}
          />
        ))}
      </section>
    </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post)),
    resetPostForm:() => dispatch(reset('addPostForm'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
