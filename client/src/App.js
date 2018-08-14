import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Playlist from './components/Playlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <div className="content">
          <Player />
          <Playlist />
        </div>
      </div>
    );
  }
}

export default App;
