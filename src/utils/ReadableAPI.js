
// const api = "http://localhost:5001"
const api = "//localhost:5001"

/**
 * Since tests run without the dom (and thus without window.localStorage)
 *  create a storage placeholder only when tests are running to polyfill missing global
 */
// let token;
// let storage;
// if (process.env.NODE_ENV === 'test') {
//   token = null;
//   storage = { token:  null };
// } else {
//   token = localStorage.token;
//   storage = localStorage;
// }
//
// // Generate a unique token for storing your bookshelf data on the backend server.

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
// Get all of the categories available for the app.
// List is found in categories.js of the backend server code.
// Feel free to extend this list as you desire.
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

// GET /:category/posts
// Get all of the posts for a particular category
export const getThesePosts = (category) =>
  fetch(`${api}/books/${category}/posts`, { headers })
    .then(res => res.json())

// GET /posts
// Get all of the posts.
// Useful for the main page when no category is selected.
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

// POST /posts
// Add a new post
// id: UUID should be fine, but any unique id will work
// timestamp: timestamp in whatever format you like, you can use Date.now() if you like
// title: String
// body: String
// author: String
// category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const postPost = (payload) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body : JSON.stringify( payload )
    })
    .then(res => res.json())
// TODO error handling as per https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// fetch('flowers.jpg')
//   .then((res) => { if(res.ok)
//     {return res.json();}
//     throw new Error('Network response was not ok.');
//   })
//   .then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   })
//   .catch(function(error) {
//     console.log('There has been a problem with your fetch operation: ' + error.message);
//   });


// GET /posts/:id
// Get the details of a single post
export const getOnePost = (post_id) =>
  fetch(`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())

// POST /posts/:id
// Used for voting on a post
// option: String, either "upVote" or "downVote"
export const votePost = (post_id, option) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({'option': `${option}`})
    })
    .then(res => res.json())

// export const upvotePost = (postId) => fetch(`${api}/posts/${postId}`, {
//     headers: {
//         // ...headers.headers,
//         ...headers,
//         "Content-Type": "application/json",
//     },
//     method: 'post',
//     body: JSON.stringify({option: "upVote"}),
// })

// PUT /posts/:id
// Edit the details of an existing post
// title: String
// body: String
export const editPost = (post_id, payload) =>
  fetch(`${api}/posts/${post_id}`, {
    method: 'PUT',
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body : JSON.stringify( payload )
    })
    .then(res => res.json())

// DELETE /posts/:id
// USAGE:
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.

// GET /posts/:id/comments
// Get all the comments for a single post
export const getComments = (post_id) =>
  fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then(res => res.json())

// POST /comments
// Add a comment to a post
// id: Any unique ID. As with posts, UUID is probably the best here.
// timestamp: timestamp. Get this however you want.
// body: String
// owner: String
// parentId: Should match a post id in the database.

// GET /comments/:id
// Get the details for a single comment
export const getCommentDetails = (comment_id) =>
  fetch(`${api}/comments/${comment_id}`, { headers })
    .then(res => res.json())

// POST /comments/:id
// Used for voting on a comment.

// PUT /comments/:id
// Edit the details of an existing comment
// timestamp: timestamp. Get this however you want.
// body: String

// DELETE /comments/:id
// Sets a comment's deleted flag to 'true'
