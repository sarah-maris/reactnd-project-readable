import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import { loadAllPosts, loadCategoryPosts } from '../actions'
import AddPost from './AddPost'
import { withRouter } from 'react-router-dom'

class PostList extends Component {

  state = {
    posts: [],
    category: this.props.match.params.category,
    listState: {}
  }

  componentDidMount() {
  console.log(this.state.category,"STATE")
    this.state.category === 'all' ?
      this.props.getAllPosts() :
      this.props.getCatPosts(this.state.category)
  }

  render() {
  //  this.props.match.params.postId
    const { listState, posts } = this.props
    //const posts = posts || []

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
        {
          sortPosts().map((post) => (
            <PostSummary
              post={post}
              key={post.id}
            />
        ))}
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
    getAllPosts: () => dispatch(loadAllPosts()),
    getCatPosts: (category) => dispatch(loadCategoryPosts(category))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList))
