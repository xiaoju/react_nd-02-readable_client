import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import PropTypes from 'prop-types';
import Count from '../components/Count'

class Categories extends Component {

  // componentDidMount() {
  //   ReadableAPI.getCategories()
  //     .then((res) => this.setState(res))
  //   }

  render() {
    return (
      <div className="categories">
        <h2>List of categories</h2>
        {this.state.categories.map((item) => (
          <li key={item.path}>{item.path} - <strong>Select BUTTON</strong>
            <Count ofWhat='posts' id={item.path}/>  {/* number of posts attached to this category  */}
          {/* TODO a button that change state, 'selectedCat' to that value: {item.path} */}
          </li>
        ))}
        <li><strong>Selected Category: {this.props.category}</strong></li>
        <Link to='/'>Unselect all categories</Link>
        {/* TODO shouldn't show this link when already no cat is selected (that is on '/'), only when on '/:category' */}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  'SelectedCat': state.ui.SelectedCat,
  'Categories': state.Categories
});
// SelectedCat is used to underline in the view which categories are currently selected

export default connect(
  mapStateToProps
)(Categories)
