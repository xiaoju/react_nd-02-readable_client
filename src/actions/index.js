export const POST_IN = 'POST_IN'        // add a new post (or update an existing one) to the posts list
export const POST_OUT = 'POST_OUT'       // remove one post from the list of posts
export const POST_FLUSH = 'POST_FLUSH'   // remove all posts from the view, e.g. when changing category.
export const MOVE_CATEGORY = 'MOVE_CATEGORY'  // change the category associated with a post and its comments

export const COMMENT_IN = 'COMMENT_IN'
export const COMMENT_OUT = 'COMMENT_OUT'
export const COMMENT_FLUSH = 'COMMENT_FLUSH'  // remove all comments from the view, e.g. when selecting another post

export const SELECT_POST = 'SELECT_POST'        // if several posts are selected, don't show PostDetails, only PostsList
export const DESELECT_POST = 'DESELECT_POST'
export const DESELECT_ALL_POST = 'DESELECT_ALL_POST'

export const SELECT_CATEGORY = 'SELECT_CATEGORY'          // only ONE category can be selected at same time
export const DESELECT_CATEGORY = 'DESELECT_CATEGORY'
export const DESELECT_ALL_CATEGORY = 'DESELECT_ALL_CATEGORY'

export const NEW_CATEGORY = 'NEW_CATEGORY'
// TODO deleting and renaming categories, moving posts to other categories.
export const EDIT_CATEGORY = 'EDIT_CATEGORY'  // change path and name (for this easier if a category_index exists and doesn't change...)
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
    // before remove category, check no post belongs to it.
    // All post from this category will need be first transferred to another
    // category, or be deleted, as a post CANNOT have no category.

export const COMMENT_TO_COMMENTINDEX = 'COMMENT_TO_COMMENTINDEX'
// because a comment was added to a post, or when first populating CommentIndex, or a post was deleted
export const COMMENT_EX_COMMENTINDEX = 'COMMENT_EX_COMMENTINDEX' // comment exits from CommentIndex, because comment or post was deleted
export const POST_EX_COMMENTINDEX = 'POST_EX_COMMENTINDEX' // remove in one go all occurences of a post in commentsIndex (), becuase it was deleted
export const POST_TO_CATINDEX = 'POST_TO_CATINDEX' // add post to CatIndex, because a post was created, or when first populating the index
export const POST_EX_CATINDEX = 'POST_EX_CATINDEX' // remove from CatIndex, because post was deleted

export function postIn ({id, timestamp, title, body, author, category}) {
  return {
    type: POST_IN,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function postOut ({id}) {
  return {
    type: POST_OUT,
    id
  }
}
// when you delete a post, you need to POST_OUT (remove from view), COMMENT_FLUSH and update the 2 indexes.

export function postFlush(){
  return {
    type: POST_FLUSH
  }
}

export function commentIn({id}){
  return {
    type: COMMENT_IN,
    id
  }
}

export function commentOut({id}){
  return {
    type: COMMENT_OUT,
    id
  }
}

export function commentFlush(){
  return {
    type: COMMENT_FLUSH
  }
}

export function selectPost({postId}){
  return {
    type: SELECT_POST,
    postId
  }
}

export function deselectPost({postId}){
  return {
    type: DESELECT_POST,
    postId
  }
}

export function deselectAllPost(){
  return {
    type: DESELECT_ALL_POST
  }
}

export function selectCategory({path}){
  return {
    type: SELECT_CATEGORY,
    path
  }
}

export function deselectCategory({path}){
  return {
    type: DESELECT_CATEGORY,
    path
  }
}

export function deselectAllCategory(){
  return {
    type: DESELECT_ALL_CATEGORY
  }
}

export function newCategory({id, name, path}){
  return {
    type: NEW_CATEGORY,
    id,
    name,
    path
  }
}

export function commentToCommentindex({postId,commentId}){
  return {
    type: COMMENT_TO_COMMENTINDEX,
    postId,
    commentId
  }
}

export function commentExCommentindex({commentId}){
  return {
    type: COMMENT_EX_COMMENTINDEX,
    commentId
  }
}

export function postExCommentindex({postId}){
  return {
    type: POST_EX_COMMENTINDEX,
    postId
  }
}

export function postToCatindex({postId, catId}){
  return {
    type: POST_TO_CATINDEX,
    postId,
    catId
  }
}

export function postExCatindex({postId}){
  return {
    type: POST_EX_CATINDEX,
    postId
  }
}

//TODO have a try with arrow function syntax for these action creators:
// const loadProfile = user => ({
//   type: LOAD_PROFILE,
//   user
// });
