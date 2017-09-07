import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'

class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
          {
            name: 'react',
            path: 'react'
          },
          {
            name: 'redux',
            path: 'redux'
          },
          {
            name: 'udacity',
            path: 'udacity'
          }
      ],
      selectedPath: 'redux',
      selectedPost: '6ni6ok3ym7mf1p33lnez',
      postTitle: '',
      postBody: '',
      postAuthor: '',
      postPath: 'udacity'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    var payload = {
      id: Math.random().toString(36).substr(-20),
      timestamp: Date.now(),
      title: this.state.postTitle,
      body: this.state.postBody,
      author: this.state.postAuthor,
      path: this.state.postPath
    };
    ReadableAPI.postPost(payload)
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
            Category:
            {/* initially, the form comes with the current active category prefilled.
              As soon as user type selected another category, this the one that show. */}
             <select name='postPath' value={this.state.postPath||this.state.selectedPath} onChange={this.handleChange} >
               {this.state.categories.map((item) => (
                   <option key={item.path} value={item.path}>{item.path}</option>
               ))}
             </select>
          </label>
          <br />
          <label>
            Author:
            <input name='postAuthor' type='text' value={this.state.postAuthor} onChange={this.handleChange}
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

          <Link to={`/${this.state.selectedPath}/${this.state.selectedPost}`}>Cancel</Link>
      </div>
    )
  }
}

export default NewPost
