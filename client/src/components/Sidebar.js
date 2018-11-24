import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlaylists } from '../actions/playlistsActions';
import './Sidebar.css';

class Sidebar extends Component {

  componentDidMount() {
    this.props.loadPlaylists();
  }

  render() {
    const playlists = this.props.playlists.playlists;
    let playlist_lis = null;

    if(playlists) {
      playlist_lis = playlists.map((playlist) => (<li key={playlist._id}>{playlist.name}</li>));
    }

    return (
      <div className="Sidebar">
        <h3>Playlists</h3>
        <ul>
          {playlist_lis}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps, { loadPlaylists })(Sidebar);



