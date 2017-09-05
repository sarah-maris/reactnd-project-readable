
const api = "http://localhost:5001/"

const headers = {
  'Authorization': "myToken1234"
}

export const getCats = () =>
  fetch(`${api}categories`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getCatPosts = (cat) =>
  fetch(`${api}${cat}/posts`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getPosts = () =>
  fetch(`${api}posts`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getPostDetails = (postId) =>
  fetch(`${api}posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => console.log(data))

export const getComments = (postId) =>
  fetch(`${api}posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => console.log("Comment", data))

export const getCommentDetails = (commentId) =>
  fetch(`${api}comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => console.log("Comment Details", data))
