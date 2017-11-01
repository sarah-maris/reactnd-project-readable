import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import { loadPosts } from '../actions'
import AddPost from './AddPost'
import { withRouter } from 'react-router-dom'

class PostList extends Component {

  state = {
    posts: [],
    // set default categoy to "all"
    category: this.props.match.url.slice(1) || 'all',
    listState: {}
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getPosts(this.state.category)
  }


  componentWillReceiveProps({location}) {

    const path = this.props.location.pathname
    if(location.pathname !== path) {
        this.setState({category: location.pathname.slice(1) })
        this.props.getPosts(location.pathname.slice(1))
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
    getPosts: (category) => dispatch(loadPosts(category))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList))
