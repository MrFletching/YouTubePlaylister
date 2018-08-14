import React, { Component } from 'react';
import './PlaylistTable.css';

class PlaylistTable extends Component {
  render() {
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
          <tr>
            <td>A programming video</td>
            <td>CodeAcademy</td>
            <td className="col-duration">12:00</td>
          </tr>
          <tr>
            <td>Another programming video</td>
            <td>CodeAcademy</td>
            <td className="col-duration">1:52</td>
          </tr>
          <tr>
            <td>How to code</td>
            <td>PhpTuts</td>
            <td className="col-duration">12:00</td>
          </tr>
          <tr>
            <td>OOP basics</td>
            <td>CodeAcademy</td>
            <td className="col-duration">13:57</td>
          </tr>
          <tr>
            <td>A programming video</td>
            <td>CodeAcademy</td>
            <td className="col-duration">12:00</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PlaylistTable;


        