import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'

class Posts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      'selectedPath': 'redux',
      'selectedPost': '6ni6ok3ym7mf1p33lnez',
      'posts': []
    }
    // this.upvotePost = this.upvotePost.bind(this)
    // this.downvotePost = this.downvotePost.bind(this)
  }

  componentDidMount() {
    ReadableAPI.getAllPosts()
      .then((myArray) => this.setState({'posts': myArray}))
    }

  // upvotePost() {
  //   ReadableAPI.votePost(`${myPost.id}`,'upVote')
  // }
  //
  // downvotePost(){
  //   ReadableAPI.votePost(`${myPost.id}`,'downVote')
  // }

  render() {

    return (
      <div className="xxx">
        <h2>List of posts</h2>
          <ul>
            <strong>
              <Link to={`/${this.state.selectedPath}`}>Unselect all posts</Link>
              <br />
              <Link to='/newPost'>New Post</Link>
              <li>Filter per date BUTTON</li>
              <li>Filter per score BUTTON</li>
              <li>Filter ascending/descending BUTTON</li>
            </strong>
          </ul>
          {this.state.posts.map((myPost) => (

            <ul key={myPost.id}>
              <li>Title: <strong>{myPost.title}</strong></li>
              <li>Author: {myPost.author}</li>
              {/* <li>{myPost.id}</li> */}
              {/* <li>Time stamp: {myPost.timestamp}</li> */}
              {/* <li>{myPost.body}</li> */}
              {/* <li>Category: {myPost.category}</li> */}
              <li>Current score: {myPost.voteScore}</li>
              <li>Number of comments: xxx</li>
              {/* <li>Deleted: {JSON.stringify(myPost.deleted)}</li> */}

              {/* <button name='upPost' onClick={this.upvotePost}>
                Upvote post
              </button>

              <button name='downPost' onClick={this.downvotePost}>
                Downvote Post
              </button> */}

              <Link to={`/${myPost.category}/${myPost.id}`}>More...</Link>
              <br />
              <Link to={`/${this.state.selectedPath}`}>Unselect this post</Link>
              {/* should only show this link for the selected post */}

            </ul>
          ))}
      </div>
    )
  }
}

export default Posts
