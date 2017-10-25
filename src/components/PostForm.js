import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class PostForm extends Component {

  render() {

    const { handleSubmit, categories } = this.props

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
              component="select"
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
            placeholder="Your comment"/>
          </div>
        </div>
        <div>
          <button type="submit" >Submit</button>
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

PostForm = connect(
  mapStateToProps
)(PostForm)

export default reduxForm({
  form: 'postForm'
})(PostForm)
