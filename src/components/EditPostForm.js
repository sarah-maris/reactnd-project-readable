import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class EditPostForm extends Component {

  render() {

    const { handleSubmit, categories } = this.props

    return (
      <form onSubmit={handleSubmit} className="post-form">
        <div>
          <label>I want to talk about</label>
          <div>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Post title"
              className="post-form-title"
            />
          </div>
        </div>
        <div>
          <label>My Two Cents</label>
          <div>
            <Field name="body"
              component="textarea"
              type="text"
              placeholder="Your comment"
              className="post-form-body"
            />
          </div>
        </div>
        <div>
          <button type="submit" className="post-form-button">Submit</button>
        </div>
      </form>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

EditPostForm = connect(
  mapStateToProps
)(EditPostForm)

export default reduxForm({
  form: 'postForm'
})(EditPostForm)
