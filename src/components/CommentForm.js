import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CommentForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <div>
        <label>Author</label>
        <div>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Your Name"
            className="comment-form-author"
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
            className="comment-form-body"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="comment-form-button" >Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'commentForm',
})(CommentForm);
