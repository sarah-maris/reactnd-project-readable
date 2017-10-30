import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class AddPostForm extends Component {

  render() {

    const { handleSubmit, categories } = this.props

    return (
      <form onSubmit={handleSubmit} className="post-form">
        <div>
          <label>Author</label>
          <div>
            <Field
              name="author"
              component="input"
              type="text"
              placeholder="Your Name"
              className="post-form-author"
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
              className="post-form-title"
            />
          </div>
        </div>
        <div>
          <label>Category</label>
          <div>
            <Field
              name="category"
              component="select"
              className="post-form-category"
            >
              <option/>
              {categories.map((category, index) => (
                <option
                  value={category.name}
                  key={index}>{category.name}
                </option>
              ))}
            </Field>
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

AddPostForm = connect(
  mapStateToProps
)(AddPostForm)

export default reduxForm({
  form: 'postForm'
})(AddPostForm)
