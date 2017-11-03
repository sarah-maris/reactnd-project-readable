import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {

    const errors = {}

    if (!values.body) {
        errors.body = 'At least some text'
    }

    return errors
}

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

const EditCommentForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <Field
        name="body"
        type="text"
        placeholder="Your comment"
        className="comment-form-body"
        component={renderTextareaField}
        label="My Two Cents"
      />
      <div>
        <button type="submit" className="comment-form-button" >Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'commentForm',
  validate
})(EditCommentForm);
