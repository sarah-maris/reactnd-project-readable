import {
  ADD_POST,
} from '../actions'

const initialAppState = {
  posts : []
}

function posts(state=initialAppState, action) {

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

export default posts
