import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlaylist, watchPlaylistVideo } from '../actions/playlistsActions';
import PlaylistTable from './PlaylistTable';
import './Playlist.css';

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.onWatchVideo = this.onWatchVideo.bind(this);
  }

  componentDidMount() {
    if(this.props.match.params.playlistID) {
      this.props.loadPlaylist(this.props.match.params.playlistID);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.playlistID !== nextProps.match.params.playlistID) {
      this.props.loadPlaylist(nextProps.match.params.playlistID);
    }
  }

  onWatchVideo(playlistVideo) {
    console.log("calling watchPlaylistVideo");
    this.props.watchPlaylistVideo(playlistVideo);
    console.log("called watchPlaylistVideo");
  }

  render() {
    const { playlist } = this.props.playlists;

    if(!playlist) {
      return (<div className="Playlist"></div>);
    }

    const playlistVideos = playlist.videos;
    const playlistVideosCount = playlistVideos.length;
    const videosNoun = playlistVideosCount === 1 ? 'video' : 'videos';

    const totalDurationS = playlistVideos.reduce((sum, playlistVideo) => sum + playlistVideo.video.duration, 0);
    const totalDurationM = Math.floor(totalDurationS / 60);
    const minutesNoun = totalDurationM === 1 ? 'minute' : 'minutes';
    
    return (
      <div className="Playlist">
        <div>
          <h2>{playlist.name}</h2>
          <div className="meta">{playlistVideosCount} {videosNoun}, {totalDurationM} {minutesNoun}</div>

          <PlaylistTable playlistVideos={playlist.videos} onWatchVideo={this.onWatchVideo} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps, { loadPlaylist, watchPlaylistVideo })(Playlist);