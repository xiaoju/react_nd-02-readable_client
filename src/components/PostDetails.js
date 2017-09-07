import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostDetails extends Component {

  state = {
    'selectedPath': 'redux/abc', // ''
    'selectedPost': '8xf0y6ziyjabvozdd253nd', // ''
    'posts': [],
    'comments': []
  }

  componentDidMount() {
    ReadableAPI.getComments(this.state.selectedPost)
      .then((myArray) => this.setState({'comments': myArray}))

    // ReadableAPI.getOnePost(this.state.selectedPost)
    //   .then((myArray) => this.setState())       // only change state for that post e.g. this.state.posts[1]
    }

  render() {

    return (
      <div className="xxx">
        <h2>PostDetails</h2>
          <ul>
            <li>Title: <strong>xxx</strong></li>
            <li>Author: xxx</li>
            {/* <li>Id: {myPost.id}</li> */}
            {/* <li>Time stamp: xxx</li> */}
            <li>Body: xxx</li>
            {/* <li>Category: xxx</li> */}
            <li>Current score: xxx</li>
            <li>Number of comments: xxx</li>
            {/* <li>Deleted: xxx</li> */}
          </ul>
            <ul><strong>
              <li>Edit post BUTTON</li>
              <li>Delete post BUTTON</li>
              <li>Upvote post BUTTON</li>
              <li>Downvote post BUTTON</li>
              <li>Create comment BUTTON</li>
            </strong></ul>

        <h3>Comments</h3>
          <li>Number of comments: xxx</li>
          {this.state.comments.map((myComment) => (
            <ul key={myComment.id}>
              <li><strong>Author: {myComment.author}</strong></li>
              {/* <li>Id: {myComment.id}</li> */}
              <li>Time stamp{myComment.timestamp}</li>
              <li>Body: {myComment.body}</li>
              <li>Current Score: {myComment.voteScore}</li>
              {/* <li>Parent Id: {JSON.stringify(myComment.parentId)}</li> */}
              {/* <li>Deleted: {JSON.stringify(myComment.deleted)}</li> */}
              {/* <li>Parent deleted: {JSON.stringify(myComment.parentDeleted)}</li> */}
              <strong>
                <li>Delete comment BUTTON</li>
                <li>Edit comment BUTTON</li>
                <li>Upvote comment BUTTON</li>
                <li>Downvote comment BUTTON</li>
              </strong>
            </ul>
          ))}
      </div>
    )
  }
}


export default PostDetails
