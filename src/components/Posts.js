import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import Score from '../components/Score'
import Count from '../components/Count'

class Posts extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="posts">
        <h2>List of posts</h2>
          <ul>
            <strong>
              <Link to={`/${this.state.selectedCat}`}>Unselect all posts</Link>
              <br />
              <Link to='/newPost'>New Post</Link>
              <li>Filter per date BUTTON</li>
              <li>Filter per score BUTTON</li>
              <li>Filter ascending/descending BUTTON</li>
            </strong>
          </ul>
          {this.state.posts.map((myPost) => (

            <ul key={myPost.id}>
              <li className='title'>{myPost.title}</li>
              <li className='author'>Author: {myPost.author}</li>
              {/* <li>{myPost.id}</li> */}
              {/* <li>Time stamp: {myPost.timestamp}</li> */}
              {/* <li>{myPost.body}</li> */}
              {/* <li>Category: {myPost.category}</li> */}
              <Score OfWhat='post' id={myPost.id}/>   {/* score of this post */}
              <Count ofWhat='comment' id={myPost.id}/>  {/* number of comments attached to this post  */}
              {/* <li>Deleted: {JSON.stringify(myPost.deleted)}</li> */}

              <Link to={`/${myPost.category}/${myPost.id}`}>More...</Link>
              <br />
              <Link to={`/${this.state.selectedCat}`}>Unselect this post</Link>
              {/* should only show this link for the selected post */}

            </ul>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  'SelectedCat': state.ui.SelectedCat,     // required to filter per category which posts are shown
  'Posts': state.Posts,                   // these are the posts that will be listed on screen
  'CatIndex': state.Index.CatIndex,              // to show easily the PostsList for each (or several) category
  'SelectedPost': state.ui.SelectedPost      // required to underline in PostsLists which Post is currently shown in PostsDetails
});

export default connect(
  mapStateToProps
)(Posts)
