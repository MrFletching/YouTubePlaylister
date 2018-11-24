import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Router>
          <div className="App">
            <Header />
            <div className="body">
              <Sidebar />
              <div className="content">
                <Player />
                <Route exact path="/playlists/:playlistID" component={Playlist} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
