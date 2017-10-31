import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {

    const errors = {};

    if (!values.author) {
        errors.author = 'Post author'
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

const AddCommentForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <Field
        name="author"
        type="text"
        placeholder="Your Name"
        className="comment-form-author"
        label="Author"
        component={renderInputField}
      />
      <Field
        name="body"
        component="textarea"
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
})(AddCommentForm);
