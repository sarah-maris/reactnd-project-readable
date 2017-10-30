import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {
  ADD_POST,
  ADD_COMMENT,
  DELETE_POST,
  DELETE_POST_COMMENTS,
  DELETE_COMMENT,
  GET_ALL_POSTS,
  GET_CATEGORIES,
  SET_CATEGORY,
  GET_POST_COMMENTS,
  UPDATE_POST,
  UPDATE_COMMENT,
  VOTE_POST,
  INCREMENT_COMMENTS,
  DECREMENT_COMMENTS
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
      return state.map((post) => post.id === action.postId
        ? {...post, title: action.title, body:action.body}
        : post)

    case VOTE_POST:
      return state.map(
         (post) => post.id === action.post.id ? action.post : post )

    case DECREMENT_COMMENTS:
      return state.map((post) => post.id === action.postId
        ?  {...post, commentCount: post.commentCount - 1}
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

    case DELETE_POST_COMMENTS:
      const newState = Object.assign( {}, state)
      delete newState[action.postId]
      return newState

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

function category (state = "", action) {

  switch (action.type) {
    case SET_CATEGORY:
      return action.category

    default:
      return state
  }
}

export default combineReducers({posts,
  comments,
  categories,
  category,
  form})
