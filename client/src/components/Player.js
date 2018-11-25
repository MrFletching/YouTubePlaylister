import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import './Player.css';

class Player extends Component {
  render() {
    const watchPlaylistVideo = this.props.playlists.watchPlaylistVideo;

    if(!watchPlaylistVideo) {
      return (<div className="Player"></div>);
    }

    const videoID = watchPlaylistVideo.video.id;

    const opts = {
      height: '400',
      width: '711',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className="Player" key={watchPlaylistVideo._id}>
        <YouTube
          videoId={videoID}
          opts={opts}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps, {})(Player);