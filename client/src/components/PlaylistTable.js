import React, { Component } from 'react';
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
    const { playlistVideos } = this.props;

    const videoRows = playlistVideos.map((playlistVideo) => (
      <tr key={playlistVideo._id}>
        <td>{playlistVideo.video.title}</td>
        <td>{playlistVideo.video.channel}</td>
        <td className="col-duration">{this.secondsToTime(playlistVideo.video.duration)}</td>
      </tr>
    ));

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

export default PlaylistTable;


        