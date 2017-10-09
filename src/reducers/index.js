import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_COMMENT,
  GET_ALL_POSTS,
  GET_CATEGORIES,
  GET_POST_COMMENTS,
  VOTE_POST
} from '../actions'

function posts(state=[], action) {

  switch (action.type) {
    case ADD_POST:
      return [...state, action.post]

    case GET_ALL_POSTS:
      return action.posts

    case VOTE_POST:
      return state.map(
         (post) => post.id === action.post.id ? action.post : post )

    default:
      return state
  }
}

function comments(state={}, action) {

  switch (action.type) {

    case ADD_COMMENT:
      let comment = action.comment;
      console.log(comment)
      let parentId = comment.parentId;
      return {...state, [parentId]: [...state[parentId],  comment]}

    case GET_POST_COMMENTS:
      let id = action.postId;
      return  {...state,  [id]: action.comments }

    default:
      return state
  }
}

function categories (state=[], action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories.categories

    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  categories
})
