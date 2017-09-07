

state = {
  'Ui': {
    // 'caching: 'all' // local state keeps a complete copy of all posts and commments, mirrored from backend
    'caching': 'none' // local state only contains the posts and comments currently on screen.
    // 'caching': 'rolling' // local state only contains the posts and comments that are worth keeping further (recently/often watched stuff, recently created contend)
    selectedPath: '',
    selectedPost: '',
    currentBody: '',    // for newPost.js, editPost.js, newComment.js, editComment.js
    currentTitle: '',   // for newPost.js, editPost.js
    currentAuthor: '',  // for newPost.js
    currentPath: ''     // for newPost.js
    },
  'Communication': {
    updatingPostslist: false,   // TODO find a way to revert optimistic updates
    //that failed, and store update request locally to retry as soon as back online.
    waitingForBackend: false    // showing spinner
    },
  PostToComment: {
    {postId: '8xf0y6ziyjabvozdd253nd', commentId: '894tuq4ut84ut8v4t8wun89g'},
    {postId: '6ni6ok3ym7mf1p33lnez', commentId: '8tu4bsun805n8un48ve89'}
  },
  CatToPost: {
    {catId: 1, postId: '8xf0y6ziyjabvozdd253nd'},
    {catId: 2, postId: '6ni6ok3ym7mf1p33lnez'}
  }
  'Categories': {
    {catId: '1', name: 'react', path: 'react'},
    {catId: '2', name: 'redux', path: 'redux'},
    {catId: '3', name: 'udacity', path: 'udacity'}
  },
  'Posts': {          // maybe better with array of objects so can easily array.filter(()=>()) ?
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      timestamp: 1467166872634,
      title: 'Udacity is the best place to learn React',
      body: 'Everyone says so after all.',
      author: 'thingtwo',
      category: 'react',
      voteScore: 6,
      deleted: false
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      timestamp: 1468479767190,
      title: 'Learn Redux in 10 minutes!',
      body: 'Just kidding. It takes more than 10 minutes to learn technology.',
      author: 'thingone',
      category: 'redux',
      voteScore: -5,
      deleted: false
    }
  },
  'Comments': {
    "894tuq4ut84ut8v4t8wun89g": {
      id: '894tuq4ut84ut8v4t8wun89g',
      parentId: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1468166872634,
      body: 'Hi there! I am a COMMENT.',
      author: 'thingtwo',
      voteScore: 6,
      deleted: false,
      parentDeleted: false
    },
    "8tu4bsun805n8un48ve89": {
      id: '8tu4bsun805n8un48ve89',
      parentId: "8xf0y6ziyjabvozdd253nd",
      timestamp: 1469479767190,
      body: 'Comments. Are. Cool.',
      author: 'thingone',
      voteScore: -5,
      deleted: false,
      parentDeleted: false
    }
  }
}
