import { combineReducers } from 'redux';

import playlistsReducer from './playlistsReducer';

export default combineReducers({
  playlists: playlistsReducer
});