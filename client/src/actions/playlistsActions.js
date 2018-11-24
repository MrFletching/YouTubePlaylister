import axios from 'axios';

import { LOAD_PLAYLISTS_COMPLETE, LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_COMPLETE } from './types';

// Load playlists
export const loadPlaylists = () => (dispatch) => {
  axios
    .get('/api/playlists')
    .then((res) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: res.data}))
    .catch((err) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: null}));
};

// Load playlist
export const loadPlaylist = (playlistID) => (dispatch) => {
  dispatch({type: LOAD_PLAYLIST_REQUEST});
  axios
    .get('/api/playlists/'+playlistID)
    .then((res) => dispatch({type: LOAD_PLAYLIST_COMPLETE, payload: res.data}))
    .catch((err) => dispatch({type: LOAD_PLAYLIST_COMPLETE, payload: null}));
};