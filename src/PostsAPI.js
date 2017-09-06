
const api = "http://localhost:5001/"

const headers = {
  'Authorization': "myToken1234",
  'Content-Type': 'application/json'
}

export const getCats = () =>
  fetch(`${ api }categdories`, {headers})
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
