import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostDetails extends Component {

  componentDidMount() {
    ReadableAPI.getComments(this.state.selectedPost)
      .then((myArray) => this.setState({'comments': myArray}))

    // ReadableAPI.getOnePost(this.state.selectedPost)
    //   .then((myArray) => this.setState())       // only change state for that post e.g. this.state.posts[1]
    }

  render() {

    return (
      <div className='postDetails'>
        <h2>PostDetails</h2>
        <ul>
          <li className='title'>xxx (title) xxx</li>
          <li className='author'>xxx (author) xxx</li>
          {/* <li>Id: {myPost.id}</li> */}
          <li className='timeStamp'>xxx time stamp xxx</li>
          {/* <li>Category: xxx</li> */}
          <li className='score'>xxx score xxx</li>
          <li className='count'>xxx comments xxx</li>
          {/* <li>Deleted: xxx</li> */}
        </ul>
          <p className='content'>xxx (body) xxx</p>
          <ul><strong>
            <li>EDIT post</li>
            <li>DELETE post</li>
            <li>UP post</li>
            <li>DOWN post</li>
            <li>ADD comment</li>
          </strong></ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  'selectedPost': state.ui.selectedPost
});

export default connect(
  mapStateToProps
)(PostDetails)
