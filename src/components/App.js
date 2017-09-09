import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails'
import Comments from '../components/Comments'
import NewPost from '../components/NewPost'
import Settings from '../components/Settings'
import '../App.css';

class App extends Component {

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
            path='/settings'
            render={() => (
              <div>
                <Settings />
              </div>
            )}/>

          <Route
            path='/:category?/:post_id?'
            render={({match}) => (
              <div className='flex-container'>
                <Categories
                  category={match.params.category}/>
                <Posts
                  category={match.params.category}/>
                <div className='PostDetails-Comments'>
                  <PostDetails
                    post_id={match.params.post_id}/>
                  <Comments
                    post_id={match.params.post_id}/>
                </div>
              </div>
            )}/>
          </Switch>
      </div>
    );
  }
}

export default connect()(App);
