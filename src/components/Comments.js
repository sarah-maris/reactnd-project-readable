import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


class Comments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
  }

  render() {
    const {comments} = this.props

    return (
        <div className="comments-list">
          {comments.map(function(comment, index){
            return (
              <div key={comment.id}>
                <p>{comment.body}</p>
                <p>{comment.author}</p>
                <p>{comment.voteScore}</p>
              </div>
            )
          })}
        </div>
    )
  }
}

export default Comments
