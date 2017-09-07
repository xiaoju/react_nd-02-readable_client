# Readable

Readable is a webapp to
// TODO
I built this project as part of the [React Udacity NanoDegree](https://www.udacity.com/course/react-nanodegree--nd019) [_MOOC_](https://en.wikipedia.org/wiki/Massive_open_online_course), of which I joined the first cohort starting july 2017. This was the second 'project' out of three, focused on [Redux](http://redux.js.org/).

## Try the app

### Online
`readable.xiaoju.io`

### Locally
0. Pre-requisites: git, node.js and npm are installed on you local machine.

2. In a first terminal window: clone the files to a local folder, install the backend server and run it:
  `git clone https://github.com/xiaoju/react_nd-02-readable_server.git`

  `cd react_nd-02-readable_server`

  `npm Install`

  `node server`

  Unless modified in `config.js`, server will use port 5001.

3. In a second terminal window: clone, install and run the app itself:

  `git clone https://github.com/xiaoju/react_nd-02-readable_client.git`

  `cd react_nd-02-readable_server`

  `npm Install`

  `npm start`

4. If your browser doesn't open the app automatically, visit the page at
// TODO
http://localhost:3000/ (possibly with another port number).  

## App architecture

front end : a local node_js server serving the app

back end: node server

### Project requirement
All app state must be managed through Redux. This as a Udacity requirement, due to this class being focused on Redux. It is clear that a production app could keep some state within components, for example for UI components.

### Language and framework
This project is written in JavaScript, leveraging the [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/) frameworks.
It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Files
```
+--public/    
 |-- index.html
 |-- favicon.ico - React Icon
+-- src/
 +-- components/ - React components
  |-- SearchBar.js - render the searchBar
  |-- EachShelf.js - render the shelves: read, currentlyReading, wantToRead and searchResults
  |-- BookComponent.js - render the book thumbnails: image, title, author, etc
 +-- icons/
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - The root.
 |-- App.css - Styles.
 |-- App.test.js - Used for testing. Provided with Create React App.
  +-- utils/ - utility files used by several React components
   |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
   |-- Utils.js - A simple layer on top of BooksAPI.js
 |-- index.js - Used for DOM rendering only.
 |-- index.css - Global styles.
 |-- todo.md - untracked list of issues (submit new bugs on 'GitHub Issues' only)
|-- .gitignore
|-- README.MD - This README file.
|-- package.json - npm package manager file.
```

### Backend

[Backend code](https://github.com/udacity/reactnd-project-readable-starter) entirely provided by Udacity, the shortcomings of which had to be corrected through the _client_ app, especially:
- no API endpoint for 'number of comments',
- suboptimal API endpoint naming choices ('category' name follows directly the root '/' ),
- API outputs not [normalized](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html).

# available categories

Create, edit and delete categories directly within the code of the backend, file `categories.js`.

Following keywords cannot be used as category names , as they would interfere with the routing in the client app):
- `newPost`,
- `editComment`,
- `editPost`.

# API

Use an Authorization header to work with your own data:

`fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})`

The following endpoints are available:  

`GET /categories`  
  **USAGE:**   
    Get all of the categories available for the app. List is found in categories.js.
    Feel free to extend this list as you desire.    

`GET /:category/posts`  
  **USAGE:**    
    Get all of the posts for a particular category   

`GET /posts`  
  **USAGE:**    
    Get all of the posts. Useful for the main page when no category is selected.  

`POST /posts`  
  **USAGE:**  
    Add a new post  

  **PARAMS:**   
    id - UUID should be fine, but any unique id will work  
    timestamp - timestamp in whatever format you like, you can use Date.now() if you like  
    title - String  
    body - String  
    owner - String  
    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.  

`GET /posts/:id`  
  **USAGE:**  
    Get the details of a single post  

`POST /posts/:id`  
  **USAGE:**  
    Used for voting on a post  

  **PARAMS:**  
    option - String: Either "upVote" or "downVote"  

`PUT /posts/:id`  
  **USAGE:**  
    Edit the details of an existing post  

  **PARAMS:**  
    title - String  
    body - String  

`DELETE /posts/:id`  
  **USAGE:**  
    Sets the deleted flag for a post to 'true'.   
    Sets the parentDeleted flag for all child comments to 'true'.  

`GET /posts/:id/comments`  
  **USAGE:**  
    Get all the comments for a single post  

`POST /comments`  
  **USAGE:**  
    Add a comment to a post  

  **PARAMS:**  
    id: Any unique ID. As with posts, UUID is probably the best here.  
    timestamp: timestamp. Get this however you want.  
    body: String  
    owner: String  
    parentId: Should match a post id in the database.  

`GET /comments/:id`  
  **USAGE:**  
    Get the details for a single comment  

`POST /comments/:id`  
  **USAGE:**  
    Used for voting on a comment.  

`PUT /comments/:id`  
  **USAGE:**  
    Edit the details of an existing comment  

  **PARAMS:**  
    timestamp: timestamp. Get this however you want.  
    body: String  

`DELETE /comments/:id`  
  **USAGE:**  
    Sets a comment's deleted flag to 'true'
