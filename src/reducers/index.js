import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {
  ADD_POST,
  ADD_COMMENT,
  DELETE_POST,
  DELETE_COMMENT,
  GET_ALL_POSTS,
  GET_CATEGORIES,
  GET_POST_COMMENTS,
  UPDATE_POST,
  UPDATE_COMMENT,
  INCREMENT_COMMENTS
} from '../actions'

function posts(state = [], action) {

  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        action.post
      ]

    case DELETE_POST:
      return state.filter((post) => post.id !== action.postId)

    case GET_ALL_POSTS:
      return action.posts

    case UPDATE_POST:
      return state.map((post) => post.id === action.post.id
        ? action.post
        : post)

    case INCREMENT_COMMENTS:
      return state.map((post) => post.id === action.postId
        ?  {...post, commentCount: post.commentCount + 1}
        : post)

    default:
      return state
  }
}

function comments(state = {}, action) {

  switch (action.type) {

    case ADD_COMMENT:
      const comment = action.comment;
      const parentId = comment.parentId;
      return {
        ...state,
        [parentId]: [
          ...state[parentId],
          comment
        ]
      }

    case DELETE_COMMENT:
      return {
        ...state,
        [action.parentId]: state[action.parentId].filter((comment) => comment.id !== action.commentId)
      }

    case GET_POST_COMMENTS:
      const postId = action.postId;
      return {
        ...state,
        [postId]: action.comments
      }

    case UPDATE_COMMENT:
      const commentId = action.comment.id
      const prnId = action.comment.parentId;
      return {
        ...state,
        [prnId]: state[prnId].map((comment) => comment.id === commentId
          ? action.comment
          : comment)
      }

    default:
      return state
  }
}

function categories(state = [], action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories.categories

    default:
      return state
  }
}

export default combineReducers({posts, comments, categories, form})
