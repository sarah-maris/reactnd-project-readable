import { combineReducers } from 'redux';

import {
  ADD_POST,
  ADD_COMMENT,
  GET_CATEGORIES
} from '../actions'

function posts(state=[], action) {

  switch (action.type) {
    case ADD_POST:
      return [...state, {
          id: action.id,
          timestamp: action.timestamp,
          title: action.title,
          body: action.body,
          author: action.author,
          category:  action.category
        }]

    default:
      return state
  }
}

function comments(state=[], action) {

  switch (action.type) {
    case ADD_COMMENT:
      return [...state, {
          id: action.id,
          timestamp: action.timestamp,
          body: action.body,
          author: action.author,
          parentId:  action.parentId
        }]

    default:
      return state
  }
}

function categories (state=[], action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories

    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  categories
})
