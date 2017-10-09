import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formatDate from "../utils/helpers.js"

class Comments extends Component {
  static propTypes = {
    postComments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
  }

  render() {
    const {postComments, postId} = this.props

    return (
        <div className="comments-list" id={postId}>
          {postComments.map(function(comment){
            return (
              <div className="comment" key={comment.id}>
                <div className="voting">
                  <div className="up icon" >up vote</div>
                  <div className="votes icon">{comment.voteScore}</div>
                  <div className="down icon">down vote</div>
                </div>
                <div className="comment-body">
                  <p>{comment.body}</p>
                  <p className="comment-author">{comment.author}</p>
                  <p className="comment-time">{formatDate(comment.timestamp)}</p>

                </div>
              </div>
            )
          })}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  loadComments: (postId) => dispatch(loadPostComments(postId))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)

//export default Comments
