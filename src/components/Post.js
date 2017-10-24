import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import PostForm from './PostForm'
import Comments from './Comments'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPostComments, sendComment, sendPost } from '../actions'
import AddComment from './AddComment'
import { reset } from 'redux-form'
import Modal from 'react-modal'

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  state = {
    postModalOpen: false
  }

  componentDidMount() {
    this.props.loadComments(this.props.post.id);
  }

  openEditPostModal = () => this.setState(() => ({ postModalOpen: true }))
  closeEditPostModal = () => this.setState(() => ({ postModalOpen: false }))

  editPost = (post) => {
    // to create unique IDs for new posts
    const uuidv1 = require('uuid/v1');
    const updatedPost = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    }
    this.props.updatePost(updatedPost)
    this.props.resetPostForm()
    this.closeEditPostModal()
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
          {postModalOpen && <PostForm
            initialValues={post}
            onSubmit={this.editPost} />}
        </Modal>
        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <PostMain post={post} />
            <Comments
              postComments={postComments}
              postId={post.id} />
          </div>
          <AddComment onSubmit={this.submitComment} />
          <button onClick={this.openEditPostModal} className="add-button">Edit Post</button>
        </article>
      </div>
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
    resetCommentForm:() => dispatch(reset('addCommentForm')),
    updatePost: (post) => dispatch(sendPost(post)),
    resetPostForm:() => dispatch(reset('addPostForm'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
