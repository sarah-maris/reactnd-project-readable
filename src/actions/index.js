export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENT_DETAILS = 'GET_COMMENT_DETAILS'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_POST = 'EDIT_POST'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_POST = 'VOTE_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function getCategories() {
  return {
    type: GET_CATEGORIES
  }
}

export function getCategoryPosts(category) {
  return {
    type: GET_CATEGORY_POSTS,
    category
  }
}

export function getPosts() {
  return {
    type: GET_POSTS
  }
}

export function getPostDetails(postId) {
  return {
    type: GET_CATEGORY_POSTS,
    postId
  }
}

export function getComments(postId) {
  return {
    type: GET_COMMENTS,
    postId
  }
}

export function getCommentDetails(commentId) {
  return {
    type: GET_COMMENT_DETAILS,
    commentId
  }
}

export function addPost({id, timestamp, title, body, author, category}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function addComment({id, timestamp, body, author, parentId}) {
  return {
    type: ADD_COMMENT,
    id,
    timestamp,
    body,
    author,
    parentId
  }
}

export function editPost(postId, title, body, author, category) {
  return {
    type: EDIT_POST,
    //lastEdit,
    postId,
    title,
    body,
    author,
    category
  }
}

export function editComment(commentId, body) {
  return {
    type: EDIT_COMMENT,
    //timestamp,
    commentId,
    body
  }
}

export function votePost(postId, vote) {
  return {
    type: VOTE_POST,
    postId,
    vote
  }
}

export function voteComment(commentId, vote) {
  return {
    type: VOTE_COMMENT,
    commentId,
    vote
  }
}

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  }
}
