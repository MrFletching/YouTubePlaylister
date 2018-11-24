import axios from 'axios';

import { LOAD_PLAYLISTS_COMPLETE } from './types';

// Load playlists
export const loadPlaylists = () => (dispatch) => {
  axios
    .get('/api/playlists')
    .then((res) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: res.data}))
    .catch((err) => dispatch({type: LOAD_PLAYLISTS_COMPLETE, payload: null}));
};