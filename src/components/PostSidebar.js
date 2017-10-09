import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { sendPostVote } from '../actions'

class PostSidebar extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  vote  = (postId, vote) =>  {
    this.props.sendVote(postId, vote)
    console.log("upVote")
  }

  render() {
    const {post} = this.props
    const postId = post.id || ''

  return (
    <div className="post-sidebar">
      <div className="voting">
        <div className="up icon"
          onClick={() => this.vote(postId, "upVote")}>
          up vote
        </div>
        <div className="votes icon">{post.voteScore}</div>
        <div className="down icon"
          onClick={() => this.vote(postId, "downVote")}>
          down vote
        </div>
        <div className="comments-icon icon">+</div>
      </div>
    </div>
  )
  }
}

//export default PostSidebar


const mapStateToProps = (state) => {
  return { posts: state.posts }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendVote: (postId, vote) => dispatch(sendPostVote(postId, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostSidebar)
