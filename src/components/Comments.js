import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formatDate from "../utils/helpers.js"

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  }

  render() {
    const {comments, id} = this.props

    return (
        <div className="comments-list" id={id}>
          {comments.map(function(comment){
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

export default Comments
