import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'
import PropTypes from 'prop-types';

class Categories extends Component {

  state = {
    'categories': [],
    'selectedPath': 'redux'
  }

  componentDidMount() {
    ReadableAPI.getCategories()
      .then((res) => this.setState(res))
    }

  render() {
    return (
      <div className="xxx">
        <h2>List of categories</h2>
        {this.state.categories.map((item) => (
          <li key={item.path}>{item.path}
            - <strong>Select this path BUTTON</strong></li>
            // TODO a button that change state, 'selectedPath' to that value: {item.path}
          ))}
        <li><strong>Selected path: {this.props.category}</strong></li>
        <Link to='/'>Unselect all categories</Link>
        {/* TODO shouldn't show this link when already no cat is selected (that is on '/'), only when on '/:category' */}
      </div>
    )
  }
}

Categories.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Categories
