import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import { loadPosts, setCategory } from '../actions'
import AddPost from './AddPost'
import { withRouter } from 'react-router-dom'

class PostList extends Component {

  state = {
    posts: [],
    listState: {}
  }

  setCat = (catName) => this.props.changeCat(catName)

  componentDidMount() {
    this.props.getPosts(this.props.listState.category)
  }

  componentWillReceiveProps({location}) {
    const newCat = location.pathname !== '/'? location.pathname.slice(1) : 'all'
    const oldCat = this.props.listState.category
    if(newCat !== oldCat) {
      this.setCat(newCat)
      this.props.getPosts(newCat)
    }
  }

  render() {

    const { listState, posts } = this.props

    // sort posts based on user input
    const sortPosts = () => {
      switch (listState.sortType) {
        case "votesUp" :
            return posts.sort((a, b) => (b.voteScore-a.voteScore))

        case "votesDown" :
            return posts.sort((a, b) => (a.voteScore-b.voteScore))

        case "recentUp" :
            return posts.sort((a, b) => (b.timestamp-a.timestamp))

        case "recentDown" :
            return posts.sort((a, b) => (a.timestamp-b.timestamp))

       case "titleUp" :
        posts.sort((a, b) => {
          const aTitle=a.title.toLowerCase(), bTitle=b.title.toLowerCase()
          if (aTitle < bTitle)
              return -1
          if (aTitle > bTitle)
              return 1
          return 0
        })
        return posts

        case "titleDown" :
          posts.sort((a, b) => {
           const aTitle=a.title.toLowerCase(), bTitle=b.title.toLowerCase()
           if (aTitle < bTitle)
               return 1
           if (aTitle > bTitle)
               return -1
           return 0
          })
          return posts

        default :
          return posts

      }
    }

    return (
      <section className="posts-list">
        <AddPost />
        { posts.length > 0 ?
          sortPosts().map((post) => (
            <PostSummary
              post={post}
              key={post.id}
            />
          )) : <div className="not-available">
            No posts are available.  <br/>
            <em>Please start a new conversation.</em>
          </div>}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    listState: state.listState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCat: (category) => dispatch(setCategory(category)),
    getPosts: (category) => dispatch(loadPosts(category))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList))
