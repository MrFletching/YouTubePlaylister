import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>YouTube Playlister</h1>
        </div>
        <div className="sidebar">
          <h3>Playlists</h3>
          <ul>
            <li>Programming</li>
            <li>Music Videos</li>
            <li>Mathematics</li>
          </ul>
        </div>
        <div className="content">
          <div className="player">
            Player goes here
          </div>
          <div className="playlist">
            <h2>Programming</h2>
            <div className="meta">5 videos, 42 Minutes</div>

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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
