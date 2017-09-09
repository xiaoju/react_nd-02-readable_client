import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as ReadableAPI from '../utils/ReadableAPI'
import { connect } from 'react-redux'

// used to count the number of posts (in categories panel)
// and number of comments (in Posts view)

class Count extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Number of {this.props.ofWhat}:
      </div>
    )
  }
}

Count.propTypes = {
  ofWhat: PropTypes.oneOf(['post', 'comment']).isRequired,
  id: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
  'CommentIndex': state.Index.CommentIndex, // to show number of comments per post
  'CatIndex': state.Index.CatIndex          // to show number of posts per category
});

export default connect(
  mapStateToProps
)(Count)
