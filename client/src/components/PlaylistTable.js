import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlaylistTable.css';

class PlaylistTable extends Component {

  secondsToTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    return minutes + ':' + seconds;
  }

  render() {
    const { playlistVideos, playlists } = this.props;
    const watchPlaylistVideo = playlists.watchPlaylistVideo;

    const videoRows = playlistVideos.map((playlistVideo) => {
      const video = playlistVideo.video;
      const duration = this.secondsToTime(video.duration);
      const playing = watchPlaylistVideo && playlistVideo._id === watchPlaylistVideo._id;
      const playingClass = playing ? 'playing' : '';

      return (
        <tr key={playlistVideo._id} className={playingClass} onClick={() => this.props.onWatchVideo(playlistVideo)}>
          <td>{video.title}</td>
          <td>{video.channel}</td>
          <td className="col-duration">{duration}</td>
        </tr>
      )
    });

    return (
      <table className="PlaylistTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Channel</th>
            <th className="col-duration">Duration</th>
          </tr>
        </thead>
        <tbody>
          {videoRows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists
});

export default connect(mapStateToProps, {})(PlaylistTable);


        