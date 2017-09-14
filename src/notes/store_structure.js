// this file is only documentation, this file isn't run by the app.
// emptyState is defined in Reducers/index.js
// here is just for reference
emptyState = {
  'ui': {
    'Caching': 'none',
    'SelectedCat': [],
    'SelectedPost': [],
    'typedTitle': '',
    'typedBody': '',
    'typedAuthor': '',
    'typedCat': [],
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

state = {
  'ui': {
    // 'caching: 'all' // local state keeps a complete copy of all posts and commments, mirrored from backend.
    'Caching': 'none', // local state only contains the indexes (CommentsIndex, CatIndex) and the posts and comments currently on screen
    // 'caching': 'dynamic' // local state only contains the posts and comments that are worth keeping further (recently/often watched stuff, recently created content)
    // should we setup 2 levels of caching: 'none' caching to state, but full caching into local.storage for offline use.
    // later, we should only load the first posts, and download further as user is scrolling down.
    'offlineUse': 'disabled',      // full caching of posts and comments into local.storage for offline use.
    'SelectedCat': ['eradaaaaaaaaaaaesd', 'eradcccccccccccesd']     // none, one, or several paths can be selected.
    'SelectedPost': ['8xf0y6ziyjabvozdd253nd', 'qqqqqqqqqqqqqqqqqqqq'],   // il only one Post selected, show its details and comments. If none or several, only show the PostsList.
    'typedBody': '',    // for newPost.js, editPost.js, newComment.js, editComment.js
    'typedTitle': '',   // for newPost.js, editPost.js
    'typedAuthor': '',  // for newPost.js
    'typedCat': [],    // for newPost.js  for now I only use the first is the array, as dont support multiple cat per post yet. Later I can save this array as a single string into the backend, as backend only support one cat per post.
    'fetchingPosts': false,   // TODO implement optimistic updates
    //that failed, and store update request locally to retry as soon as back online.
    'WaitingForBackend': false    // showing spinner
  },
  'index': {
    'CommentIndex': [   // to allow showing number of comments per post
      // while Comments only contains the comments currently shown on screen,
      // this Commentindex lists all comments curently on backend server (or soon to be).
      '894tuq4ut84ut8v4t8wun89g': {postId: '8xf0y6ziyjabvozdd253nd', commentId: '894tuq4ut84ut8v4t8wun89g'},
      '8tu4bsun805n8un48ve89': {postId: '6ni6ok3ym7mf1p33lnez', commentId: '8tu4bsun805n8un48ve89'}
    ],
    'CatIndex': [   // to allow showing number of posts per category,
      // and showing easily the PostsList for each category
      // OK to have several categories for one post. Then several lines in table for this post.
      '8xf0y6ziyjabvozdd253nd': {postId: '8xf0y6ziyjabvozdd253nd', catId: 'eradaaaaaaaaaaaesd'},
      '6ni6ok3ym7mf1p33lnez': { postId: '6ni6ok3ym7mf1p33lnez', catId: 'eradbbbbbbbbbbbesd'},
      'qqqqqqqqqqqqqqqqqqqq': {postId: 'qqqqqqqqqqqqqqqqqqqq', catId: 'eradcccccccccccesd'}
    ]
  },
  'Categories': [     // NB names can be the same if different path
    // id is necessary to ease editing of categories. e.g. if both name and path are edited by user
    'eradaaaaaaaaaaaesd': { 'catId': 'eradaaaaaaaaaaaesd', 'name': 'react', 'path': 'react'},
    'eradbbbbbbbbbbbesd': { 'catId': 'eradbbbbbbbbbbbesd', 'name': 'redux', 'path': 'redux'},
    'eradcccccccccccesd': { 'catId': 'eradcccccccccccesd', 'name': 'udacity', 'path': 'udacity'},
    'eraddddddddddddesd': { 'catId': 'eraddddddddddddesd', 'name': 'trolls', 'path': 'react/trolls'},
    'eraeeeeeeeeeeeeesd': { 'catId': 'eraeeeeeeeeeeeeesd', 'name': 'trolls', 'path': 'udacity/trolls'}
  ],
  'Posts': [
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
    // "6ni6ok3ym7mf1p33lnez": {
    //   id: '6ni6ok3ym7mf1p33lnez',
    //   timestamp: 1468479767190,
    //   title: 'Learn Redux in 10 minutes!',
    //   body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    //   author: 'thingone',
    //   category: 'redux',
    //   voteScore: -5,
    //   deleted: false
    // },
    "qqqqqqqqqqqqqqqqqqqq": {
      id: 'qqqqqqqqqqqqqqqqqqqq',
      timestamp: 1467111872111,
      title: 'Another post',
      body: 'This is my body',
      author: 'xiaoju',
      category: 'react',
      voteScore: 1,
      deleted: false
    }
  ],
  'Comments': [     // in this example the comments should be deleted from state as currently selected 2 posts
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
  ]
}
