import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails'
import NewPost from '../components/NewPost'
import '../App.css';

class App extends Component {

  // TODO expand state structure as per http://jamesknelson.com/5-types-react-application-state/
  state = {
    categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
    ],
    Posts: {
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
    Comments: {
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
    },
    'Communication': {
        updatingPostslist: false,
        waitingForBackend: false
    },
    // categoriesPanel: wide/narrow/hide,
    // showPostslist: half,
    // showDetails: full,
    // showComments: hide,
    // category: category,
    // post_id: post_id,ß
    selectedPath: '',
    selectedPost: '',
    newPost: {
      title: '',
      body: '',
      author: ''
    }
    // editingPost: false
    }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path='/newpost'
            render={({match}) => (
              <div>
                <NewPost/>
              </div>
            )}/>

          <Route
            path='/:category?/:post_id?'
            render={({match}) => (
              <div>
                <Categories
                  category={match.params.category}/>
                  {/* underline the selected cat */}
                <Posts
                  category={match.params.category}/>
                  {/* show posts for this cat only */}
                <PostDetails
                  post_id={match.params.post_id}/>
              </div>
            )}/>

          </Switch>
      </div>
    );
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect()(App);
