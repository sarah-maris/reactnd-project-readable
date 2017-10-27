export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST_DETAILS = 'GET_POST_DETAILS'
export const GET_POST_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENT_DETAILS = 'GET_COMMENT_DETAILS'
export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'

// API params
const api = "http://localhost:5001/"
const headers = {
  'Authorization': "myToken1234",
  'Content-Type': 'application/json'
}
const showError = (error) =>
  console.log('fetch failed: ' , error.statusText);

// load posts
const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts
  }
}

export const loadPosts = () => {
  return dispatch => {
    fetch(`${ api }posts`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
      .then(json => dispatch(getAllPosts(json)))
      .catch( error => showError(error));
  }
}

// load categories
const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}
export const loadCategories = () => {
  return dispatch => {
    fetch(`${ api }categories`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
    .then(json => dispatch(getCategories(json)))
    .catch( error => showError(error));
  }
}

// load post comments
const getPostComments = (postId, comments)  => {
  return {
    type: GET_POST_COMMENTS,
    postId,
    comments
  }
}

export const loadPostComments = (postId) => {
  return dispatch => {
      fetch(`${api}posts/${postId}/comments`, {headers})
      .then(res => {
        if (!res.ok) {
          throw res
        } else  return res.json()
      })
      .then(json => dispatch(getPostComments(postId, json)))
      .catch( error => showError(error));
  }
}

export function getCategoryPosts(category) {
  return {
    type: GET_CATEGORY_POSTS,
    category
  }
}

export function getPostDetails(postId) {
  return {
    type: GET_CATEGORY_POSTS,
    postId
  }
}

export function getCommentDetails(commentId) {
  return {
    type: GET_COMMENT_DETAILS,
    commentId
  }
}

// requests to add data
function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export const sendPost = (post) => {
  return dispatch => {
  fetch(`${api}posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(json => dispatch(addPost(json)))
  .catch( error => showError(error));
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}
export const sendComment = (comment) => {
  return dispatch => {
  fetch(`${api}comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(json => dispatch(addComment(json)))
  .catch( error => showError(error));
  }
}

// used for editing and voting
const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post
  }
}

export const editPost = (post) => {
  return dispatch => {
  fetch(`${api}posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(json => dispatch(updatePost(json)))
  .catch( error => showError(error));
  }
}

const updateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment
  }
}

export const editComment = (comment) => {
  return dispatch => {
  fetch(`${api}comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: comment.id,
      timestamp: comment.timestamp,
      body: comment.body,
      author: comment.author,
      parentId: comment.parentId
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(json => dispatch(updateComment(json)))
  .catch( error => showError(error));
  }
}

// voting
export const sendPostVote = (postId, vote) => {
  return dispatch => {
   fetch(`${ api}posts/${postId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          option: vote
        })
      })
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(post => dispatch(updatePost(post)))
    .catch( error => showError(error));
  }
}


export const sendCommentVote = (commentId, vote) => {
  return dispatch => {
   fetch(`${ api}comments/${commentId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          option: vote
        })
      })
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(comment => dispatch(updateComment(comment)))
    .catch( error => showError(error));
  }
}

const deletePost = (postId) => {
  console.log("destory")
  return {
    type: DELETE_POST,
    postId
  }
}

export const destroyPost = (postId) => {

  return dispatch => {
    fetch(`${api}posts/${postId}`, {
      method: 'DELETE',
      headers: headers
    })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then( () => dispatch(deletePost(postId)))
  .catch( error => showError(error));
  }
}

const deleteComment = (commentId, parentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    parentId
  }
}

export const destroyComment = (commentId, parentId) => {
  return dispatch => {
    fetch(`${api}comments/${commentId}`, {
      method: 'DELETE',
      headers: headers
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(json => dispatch(deleteComment(json, parentId)))
  .catch( error => showError(error));
  }
}
