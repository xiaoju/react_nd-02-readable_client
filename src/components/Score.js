import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as ReadableAPI from '../utils/ReadableAPI'

// used to show the score of posts (in Posts panel)
// and of comments (in Comments panel)

class Score extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Score of {this.props.ofWhat}:
      </div>
    )
  }
}

Score.propTypes = {
  ofWhat: PropTypes.oneOf(['post', 'comment']).isRequired,
  id: PropTypes.string.isRequired
}

export default Score
