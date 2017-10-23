import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddComment = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Author</label>
        <div>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Your Name"
          />
        </div>
      </div>
      <div>
        <label>My Two Cents</label>
        <div>
          <Field name="body"
            component="textarea"
            type="text"
          placeholder="Your comment"/>
        </div>
      </div>
      <div>
        <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'addCommentForm',
})(AddComment);
