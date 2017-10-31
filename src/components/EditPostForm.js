import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const validate = values => {

    const errors = {};

    if (!values.title) {
        errors.title = 'Post title'
    }

    if (!values.body) {
        errors.body = 'At least some text'
    }

    return errors
}

const renderInputField = ({
  input,
  label,
  placeholder,
  type,
  className,
  meta: { touched, error }
}) =>
  <div>
    <label>{ label }</label>
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } className={ className }/>
      { touched && error &&
        <div className="error">{`*${error} is required!`} </div> }
    </div>
  </div>

  const renderTextareaField = ({
    input,
    label,
    placeholder,
    type,
    className,
    meta: { touched, error }
  }) =>
    <div>
      <label>{ label }</label>
      <div>
        <textarea { ...input } placeholder={ placeholder } type={ type } className={ className }/>
        { touched && error &&
          <div className="error">{`*${error} is required!`} </div> }
      </div>
    </div>

class EditPostForm extends Component {

  render() {

    const { handleSubmit, categories } = this.props

    return (
      <form onSubmit={handleSubmit} className="post-form">
        <Field
          name="title"
          component={renderInputField}
          type="text"
          placeholder="Post title"
          className="post-form-title"
          label="I want to talk about"
        />
        <Field
          name="body"
          component="textarea"
          type="text"
          placeholder="Your comment"
          className="post-form-body"
          component={renderTextareaField}
          label="My Two Cents"
        />
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
  form: 'postForm',
  validate
})(EditPostForm)
