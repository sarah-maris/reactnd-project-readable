import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { connect } from 'react-redux'

class CommentList extends Component {
  static propTypes = {
    postComments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
  }

  render() {
    const {postComments, postId} = this.props

    return (
      <div>
        <div className="comments-list" id={postId}>
          {postComments.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
            />
          ))}
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

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
