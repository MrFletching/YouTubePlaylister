import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Playlist from './components/Playlist';

import store from './store';

import './App.css';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="body">
            <Sidebar />
            <div className="content">
              <Player />
              <Playlist />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
