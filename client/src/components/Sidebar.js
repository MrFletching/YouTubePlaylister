import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h3>Playlists</h3>
        <ul>
          <li>Programming</li>
          <li>Music Videos</li>
          <li>Mathematics</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;



