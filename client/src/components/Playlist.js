import React, { Component } from 'react';
import PlaylistTable from './PlaylistTable';

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <h2>Programming</h2>
        <div className="meta">5 videos, 42 Minutes</div>

        <PlaylistTable />
      </div>
    );
  }
}

export default Playlist;