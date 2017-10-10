import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formatDate from "../utils/helpers.js"
import { sendCommentVote } from '../actions'

class Comments extends Component {
  static propTypes = {
    postComments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
  }

  vote  = (commentId, vote) =>  {
    this.props.sendVote(commentId, vote)
  }


  render() {
    const {postComments, postId} = this.props
    const vote = this.vote

    return (
        <div className="comments-list" id={postId}>
          {postComments.map(function(comment){
            return (
              <div className="comment" key={comment.id}>
                <div className="voting">
                  <div className="up icon"
                    onClick={() => vote(comment.id, "upVote")}>
                    up vote
                  </div>
                  <div className="votes icon">{comment.voteScore}</div>
                  <div className="down icon"
                    onClick={() =>vote(comment.id, "downVote")}>
                    down vote
                  </div>
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
    sendVote: (commentId, vote) => dispatch(sendCommentVote(commentId, vote))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
