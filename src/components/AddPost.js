import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPost = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
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
        <label>Category</label>
        <div>
          <Field
            name="category"
            component="input"
            type="text"
            placeholder="redux"
          />
        </div>
      </div>
      <div>
        <label>My Two Cents</label>
        <div>
          <Field name="postBody" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(AddPost);
