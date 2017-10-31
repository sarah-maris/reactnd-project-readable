import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCategories, setCategory, setSort } from '../actions'
import AddPost from './AddPost'
import PostSort from './PostSort'

class Sidebar extends Component {

  render() {

    return (

        <div>
          <PostSort />
          <AddPost />
        </div>
      )
    }
}

export default Sidebar
