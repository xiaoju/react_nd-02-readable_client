import React, { Component } from 'react'

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className="settings">
        <h2>Settings</h2>
        <ul>
          <li>Backend URL: <pre>http://localhost:5001/</pre></li>
          <li>State caching: <pre>all / <strong>none</strong> / dynamic</pre></li>
          <li>Offline use: <pre><strong>disabled</strong> / enabled</pre></li>
        </ul>
      </div>
    )
  }
}

export default Settings
