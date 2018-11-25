import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPlaylist, watchPlaylistVideo, addVideoToPlaylist } from '../actions/playlistsActions';
import PlaylistTable from './PlaylistTable';
import './Playlist.css';

class Playlist extends Component {

  constructor(props) {
    super(props);

    this.state = {
      addVideoValue: ''
    };

    this.onWatchVideo = this.onWatchVideo.bind(this);
    this.onAddVideo = this.onAddVideo.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
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
    this.props.watchPlaylistVideo(playlistVideo);
  }

  onAddVideo(event) {
    event.preventDefault();
    let urlString = this.state.addVideoValue;

    let videoID = this.state.addVideoValue;

    try {
      let url = new URL(urlString);
      videoID = url.searchParams.get("v");
    } catch(e) {
      // Failed to convert input to URL
    }

    if(/^[a-zA-Z0-9]+$/.test(videoID)) {
      this.props.addVideoToPlaylist(this.props.playlists.playlist._id, videoID);
    } else {
      console.error("Not a valid video ID");
    }
  }

  onChangeInput(event) {
    this.setState({
      addVideoValue: event.target.value
    });
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
        <h2>{playlist.name}</h2>
        <div className="meta">{playlistVideosCount} {videosNoun}, {totalDurationM} {minutesNoun}</div>

        <PlaylistTable playlistVideos={playlist.videos} onWatchVideo={this.onWatchVideo} />
        <form onSubmit={this.onAddVideo}>
          Add video to playlist:
          <input id="add-video" type="text" placeholder="https://www.youtube.com/watch?v=QJYmyhnaaek" onChange={this.onChangeInput} />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps, { loadPlaylist, watchPlaylistVideo, addVideoToPlaylist })(Playlist);