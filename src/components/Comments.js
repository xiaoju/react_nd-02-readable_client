import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import Score from '../components/Score'

class Comments extends Component {

  state = {}

  componentDidMount() {
    ReadableAPI.getComments(this.state.selectedPost)
      .then((myArray) => this.setState({'comments': myArray}))
    }

  render() {

    return (
      <div className='comments'>
        <h3>Comments</h3>
          <li>Number of comments: xxx</li>
          {this.state.comments.map((myComment) => (
            <ul key={myComment.id}>
              <li className='author'>xxxx author xxx {myComment.author}</li>
              {/* <li>Id: {myComment.id}</li> */}
              <li className='timeStamp'>Time stamp{myComment.timestamp}</li>
              <li className='content'>Body: {myComment.body}</li>
              <li className='score'>Current Score: {myComment.voteScore}</li>
              <Score ofWhat='comment' id={myComment.voteScore}/>  {/* score of this comment  */}
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

const mapStateToProps = (state, props) => ({
  'Comments': state.Comments
});

export default connect(
  mapStateToProps
)(Comments)
