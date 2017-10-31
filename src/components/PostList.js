import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostSummary from './PostSummary'
import { loadPosts } from '../actions'

class PostList extends Component {

  state = {
    posts: [],
    listState: {}
  }

  componentDidMount() {
    this.props.loadAllPosts()
  }

  render() {
    const { posts, listState } = this.props

    // filter posts by chosen category
    const catPosts =  posts.filter((post) => listState.category === post.category || listState.category === 'all' )

    // sort posts based on user input
    const sortPosts = () => {
      switch (listState.sortType) {
        case "votesUp" :
            return catPosts.sort((a, b) => (b.voteScore-a.voteScore))

        case "votesDown" :
            return catPosts.sort((a, b) => (a.voteScore-b.voteScore))

        case "recentUp" :
            return catPosts.sort((a, b) => (b.timestamp-a.timestamp))

        case "recentDown" :
            return catPosts.sort((a, b) => (a.timestamp-b.timestamp))

       case "titleUp" :
        catPosts.sort((a, b) => {
          const aTitle=a.title.toLowerCase(), bTitle=b.title.toLowerCase()
          if (aTitle < bTitle)
              return -1
          if (aTitle > bTitle)
              return 1
          return 0
        })
        return catPosts

        case "titleDown" :
         catPosts.sort((a, b) => {
           const aTitle=a.title.toLowerCase(), bTitle=b.title.toLowerCase()
           if (aTitle < bTitle)
               return 1
           if (aTitle > bTitle)
               return -1
           return 0
         })
         return catPosts

        default :
          return catPosts

      }
    }

    return (
      <section className="posts-list">
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
    loadAllPosts: () => dispatch(loadPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)
