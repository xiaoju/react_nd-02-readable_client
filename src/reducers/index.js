import { combineReducers } from 'redux';

import {
  POST_IN,
  POST_OUT,
  POST_FLUSH,
  COMMENT_IN,
  COMMENT_OUT,
  COMMENT_FLUSH,
  SELECT_POST,
  DESELECT_POST,
  DESELECT_ALL_POST,
  SELECT_CATEGORY,
  DESELECT_CATEGORY,
  DESELECT_ALL_CATEGORY,
  NEW_CATEGORY,
  COMMENT_TO_COMMENTINDEX,
  COMMENT_EX_COMMENTINDEX,
  POST_EX_COMMENTINDEX,
  POST_TO_CATINDEX,
  POST_EX_CATINDEX
} from '../actions'

const emptyState = {
  'ui': {
    'Caching': 'none',
    'SelectedCat': [],
    'SelectedPost': [],
    'CurrentTitle': '',
    'CurrentAuthor': '',
    'CurrentPath': '',
    'FetchingPosts': false,
    'WaitingForBackend': false
  },
  'Categories': [],
  'Posts': [],
  'Comments': [],
  'Index': {
    'CommentIndex': [],
    'CatIndex': []
  }
}

function uiReducer(state = emptyState.ui, action){
  const {postId, path} = action
  switch (action.type){
    case SELECT_POST:
      return {
        ...state,
        'SelectedPost': state.SelectedPost.push(action.postId)
      }

    case DESELECT_POST:
      return {
        ...state,
        'SelectedPost': state.SelectedPost.filter((thisId) => (thisId !== postId))
      }

    case DESELECT_ALL_POST:
      return {
        ...state,
        'SelectedPost': []
      }

    case SELECT_CATEGORY:
      return {
        ...state,
        'SelectedPath': state.SelectedCat.push(action.path)
      }

    case DESELECT_CATEGORY:
      return {
        ...state,
        'SelectedPath': state.SelectedCat.filter((thisPath)=>(thisPath !== path))
      }

    case DESELECT_ALL_CATEGORY:
      return {
        ...state,
        'SelectedCat': []
      }

    default:
      return state
  }
}

function categoryReducer(state = emptyState.Categories, action){
  switch (action.type){
    case NEW_CATEGORY:
      const {id, name, path} = action
      return {
          ...state,
          [id]: { id, name, path}
      }

    default:
      return state
    }
  }

function postsReducer(state = emptyState.Posts, action) {
  const {id, timestamp, title, body, author, category, voteScore} = action
  switch (action.type) {
    case POST_IN:
      return {
          ...state,
          [id]: {id, timestamp, title, body, author, category, voteScore}
          }

    case POST_OUT:
      return {
        'Posts': state.filter((thisPost) => (thisPost.id !== id))
      }

    case POST_FLUSH:
      return {}

    default:
      return state
  }
}

function commentsReducer (state = emptyState.Comments, action){
  const {id, timestamp, body, author, category} = action
  switch (action.type) {

    case COMMENT_IN:
      return {
        ...state,
        [id]: {id, timestamp, body, author, category}
      }

    case COMMENT_OUT:
      return state.filter((thisComment) => (thisComment.id !== id))

    case COMMENT_FLUSH:
      return {}

    default:
      return state
  }
}

function indexReducer(state = emptyState.Index, action){
  const {postId, commentId, catId} = action
  switch (action.type) {
    case COMMENT_TO_COMMENTINDEX:

      return {
        ...state,
        'commentIndex': {
          ...state.commentIndex,
          [commentId]: {postId, commentId}
        }
      }

    case COMMENT_EX_COMMENTINDEX:
      return {
        ...state,
        'CommentIndex': state.filter((thisEntry) => (thisEntry.commentId !== commentId))
      }

    case POST_EX_COMMENTINDEX:
      return {
        ...state,
        'CommentIndex': state.filter((thisEntry)=>(thisEntry.postId !== postId))
      }

    case POST_TO_CATINDEX:
      return {
        ...state,
        'CatIndex': {
          ...state.Catindex,
          [postId]: {postId, catId}
        }
      }

    case POST_EX_CATINDEX:
      return state.CatIndex.filter((thisEntry)=>(thisEntry.postId !== postId))

    default:
      return state
  }

}

export default combineReducers({
  uiReducer,
  postsReducer,
  commentsReducer,
  categoryReducer,
  indexReducer
})
