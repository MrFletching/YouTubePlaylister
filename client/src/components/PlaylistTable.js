import React, { Component } from 'react';

class PlaylistTable extends Component {
  render() {
    return (
      <table className="playlist-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Channel</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A programming video</td>
            <td>CodeAcademy</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td>Another programming video</td>
            <td>CodeAcademy</td>
            <td>1:52</td>
          </tr>
          <tr>
            <td>How to code</td>
            <td>PhpTuts</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td>OOP basics</td>
            <td>CodeAcademy</td>
            <td>13:57</td>
          </tr>
          <tr>
            <td>A programming video</td>
            <td>CodeAcademy</td>
            <td>12:00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PlaylistTable;


        