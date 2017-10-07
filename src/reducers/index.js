import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_COMMENT,
  GET_ALL_POSTS,
  GET_CATEGORIES,
  GET_POST_COMMENTS
} from '../actions'

function posts(state=[], action) {

  switch (action.type) {
    case ADD_POST:
      return [...state, action.post]

    case GET_ALL_POSTS:
      return action.posts

    default:
      return state
  }
}

function comments(state={}, action) {

  switch (action.type) {

    case ADD_COMMENT:
      let comment = action.comment;
      let parentId = comment.parentId;
      return {...state,
        [parentId]: [ ...state,
        comment
        ]
      }

    case GET_POST_COMMENTS:
      let id = action.postId;
      console.log(id)
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
