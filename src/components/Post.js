import React, { Component } from 'react'
import PostSidebar from './PostSidebar'
import PostMain from './PostMain'
import PostForm from './PostForm'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadPostComments, editPost, destroyPost } from '../actions'
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
    const updatedPost = {
      id: post.id,
      timestamp: Date.now(), //update with edit time
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    }
    this.props.updatePost(updatedPost)
    this.props.resetPostForm()
    this.closeEditPostModal()
  }

  deletePost =(postId) => this.props.destroyPost(postId)

  render() {
    const { post, comments } = this.props
    const postComments = comments[post.id] || []
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
          {postModalOpen && <PostForm
            initialValues={post}
            onSubmit={this.editPost} />}
        </Modal>
        <article className="post">
          <PostSidebar post={post} />
          <div className="post-main">
            <PostMain post={post} />
            <CommentList
              postComments={postComments}
              postId={post.id} />
          </div>
          <button onClick={this.openEditPostModal} className="add-button">Edit Post</button>
          <button onClick={this.deletePost.bind(this, post.id)} className="add-button">Delete Post</button>
        </article>
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
    loadComments: (postId) => dispatch(loadPostComments(postId)),
    updatePost: (post) => dispatch(editPost(post)),
    resetPostForm: () => dispatch(reset('postForm')),
    destroyPost:  (postId) => dispatch(destroyPost(postId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
