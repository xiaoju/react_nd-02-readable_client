import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'

class EditPost extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    var payload = {
      title: this.state.postTitle,
      body: this.state.postBody
    };
    ReadableAPI.editPost(payload)
    // .then((res) => console.log(res))
    // TODO add redirect to the detail page of this post
    // TODO use UUID for id
  }

  handleChange(event){
    // as per https://facebook.github.io/react/docs/forms.html
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input name='postTitle' type='text' value={this.state.postTitle} onChange={this.handleChange}
            required />
          </label>
          <br />
          <label>
            Body:
            <input name='postBody' type='text' value={this.state.postBody} onChange={this.handleChange}
            required />
            {/* //TODO body should be textarea */}
          </label>
          <br />
          <input type='submit' value='Post!' />
        </form>

        <br />
          <li>Author: {this.state.postAuthor}</li>
          <li>Category: {this.state.postPath}</li>
        <br />

          <Link to={`/${this.state.selectedCat}/${this.state.selectedPost}`}>Cancel</Link>
      </div>
    )
  }
}

export default EditPost
