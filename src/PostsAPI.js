
const api = "http://localhost:5001/"
const uuidv1 = require('uuid/v1');

const headers = {
  'Authorization': "myToken1234",
  'Content-Type': 'application/json'
}
// requests to get data
export const getCats = () =>
  fetch(`${ api }categories`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Categories", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

export const getCatPosts = (cat) =>
  fetch(`${ api }${ cat }/posts`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Category Posts", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

export const getPosts = () =>
  fetch(`${ api }posts`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then( data => console.log("All Posts", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

export const getPostDetails = (postId) =>
  fetch(`${ api}posts/${postId}`, {headers} )
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Post Details", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

export const getComments = (postId) =>
  fetch(`${api}posts/${postId}/comments`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("All Comments", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

export const getCommentDetails = (commentId) =>
  fetch(`${api}comments/${commentId}`, {headers})
    .then(res => {
      if (!res.ok) {
        throw res
      } else  return res.json()
    })
    .then(data => console.log("Comment Details", data))
    .catch(function(error) {
      console.log('fetch failed: ' ,  error.statusText);
    });

// requests to add data
export const addPost = (post) =>
  fetch(`${api}posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      id: uuidv1(),
      timestamp: Date.now(),
      title: `${post.title}`,
      body: `${post.body}`,
      author: `${post.author}`,
      category:  `${post.category}`
     }),
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Add Post", data))
  .catch(function(error) {
    console.log('fetch failed: ' ,  error.statusText);
  });


export const editComment = (comment) =>
  fetch(`${api}comments/${comment.id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      timestamp: `${comment.timestamp}`,
      body: `${comment.body}` })
  })
  .then(res => {
    if (!res.ok) {
      throw res
    } else  return res.json()
  })
  .then(data => console.log("Comment edit", data))
  .catch(function(error) {
    console.log('fetch failed: ' ,  error.statusText);
  });
