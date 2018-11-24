import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Player.css';

class Player extends Component {
  render() {
    const { videoID } = this.props;

    const opts = {
      height: '400',
      width: '711',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <div className="Player">
        <YouTube
          videoId={videoID}
          opts={opts}
          />
      </div>
    );
  }
}

export default Player;