import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import AddPostForm from './AddPostForm'
import { loadPosts, sendPost } from '../actions'
import { reset } from 'redux-form';
import Modal from 'react-modal'

class PostList extends Component {

  state = {
    posts: [],
    category: '',
    postModalOpen: false
  }

  componentDidMount() {
    this.props.loadAllPosts()
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
    const { posts, category } = this.props
    const { postModalOpen } = this.state
    const catPosts =  posts.filter((post) => category === post.category || category === 'all' )
    const sortedByTime = [...posts].sort((a, b) => (b.timestamp-a.timestamp))
    const sortedByVotes= [...posts].sort((a, b) => (b.voteScore-a.voteScore))
    const sortedByTitle = [...posts].sort((a, b) => {
      const aTitle=a.title.toLowerCase(), bTitle=b.title.toLowerCase()
      if (aTitle < bTitle)
          return -1
      if (aTitle > bTitle)
          return 1
      return 0
    })

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
      <button onClick={this.openAddPostModal} className="add-button">Add New Post</button>
      <section className="posts-list">
        {
          catPosts.map((post) => (
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
    posts: state.posts,
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (post) => dispatch(sendPost(post)),
    resetPostForm:() => dispatch(reset('addPostForm')),
    loadAllPosts: () => dispatch(loadPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
