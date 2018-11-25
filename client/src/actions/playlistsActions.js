import axios from 'axios';

import { LOAD_PLAYLISTS_COMPLETE, LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_COMPLETE, SELECT_PLAYLIST_VIDEO } from './types';

// Load playlists
export const loadPlaylists = () => (dispatch) => {
  axios
    .get('/api/playlists')
    .then((res) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: res.data}))
    .catch((err) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: null}));
};

// Load playlist
export const loadPlaylist = (playlistID) => (dispatch) => {
  dispatch({type: LOAD_PLAYLIST_REQUEST, payload: playlistID});
  axios
    .get('/api/playlists/'+playlistID)
    .then((res) => dispatch({type: LOAD_PLAYLIST_COMPLETE, payload: res.data}))
    .catch((err) => dispatch({type: LOAD_PLAYLIST_COMPLETE, payload: null}));
};

// Watch playlist video
export const watchPlaylistVideo = (playlistVideo) => (dispatch) => {
  dispatch({type: SELECT_PLAYLIST_VIDEO, payload: playlistVideo});
}

// Add video to playlist
export const addVideoToPlaylist = (playlistID, videoID) => (dispatch) => {
  axios
    .post('/api/playlists/'+playlistID+'/videos', {id: videoID})
    .then((res) => dispatch(loadPlaylist(playlistID)))
    .catch((err) => console.error("Failed to add video to playlist"));
}