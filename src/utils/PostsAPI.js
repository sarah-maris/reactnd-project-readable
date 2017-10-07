
const api = "http://localhost:5001/"
const uuidv1 = require('uuid/v1');

const headers = {
  'Authorization': "myToken1234",
  'Content-Type': 'application/json'
}

const showError = (error) =>
  console.log('fetch failed: ' , error.statusText);

// requests to get data
export const getCats = () =>
  fetch(`${ api }categories`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
  .catch( error => showError(error));

export const getCatPosts = (cat) =>
  fetch(`${ api }${ cat }/posts`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
  .then(data => console.log("Category Posts", data))
  .catch( error => showError(error));

export const getPosts = () =>
  fetch(`${ api }posts`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
  .catch( error => showError(error));

export const getPostDetails = (postId) =>
  fetch(`${ api}posts/${postId}`, {headers} )
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
  .then( data => console.log("Post Details", data, data.id))
  .catch( error => showError(error));

export const getComments = (postId) =>
  fetch(`${api}posts/${postId}/comments`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("All Comments", data))
    .catch( error => showError(error));

export const getCommentDetails = (commentId) =>
  fetch(`${api}comments/${commentId}`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Comment Details", data))
    .catch( error => showError(error));

// requests to add data
export const sendPost = (title, body, author, category) =>
  fetch(`${api}posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: uuidv1(),
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Add Post", data))
  .catch( error => showError(error));

  export const sendComment = (body, author, parentId) =>
    fetch(`${api}comments`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: uuidv1(),
        timestamp: Date.now(),
        body: body,
        author: author,
        parentId: parentId
      })
    })
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Comment edit", data))
    .catch( error => showError(error));

// requests to edit data
export const editPost = (postId, title, body, author, category) =>
  fetch(`${ api}posts/${postId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      lastEdit: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Add Post", data))
  .catch( error => showError(error));

export const editComment = (commentId, body) =>
  fetch(`${api}comments/${commentId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      timestamp: Date.now(),
      body: body
     })
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Comment edit", data))
  .catch( error => showError(error));

export const votePost = (postId, vote) =>
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
  .then(data => console.log("Post Details", data))
  .catch( error => showError(error));

  export const voteComment = (commentId, vote) =>
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
    .then(data => console.log("Comment Details", data))
    .catch( error => showError(error));

// requests to delete data
export const deletePost = (postId) =>
  fetch(`${api}posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Delete Post", data))
  .catch( error => showError(error));

export const deleteComment = (commentId) =>
  fetch(`${api}comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Delete Comment", data))
  .catch( error => showError(error));
