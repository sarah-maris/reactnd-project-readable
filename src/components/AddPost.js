import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddPost = props => {
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
        <label>I want to talk about</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Post title"
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
  form: 'addPostForm',
})(AddPost);
