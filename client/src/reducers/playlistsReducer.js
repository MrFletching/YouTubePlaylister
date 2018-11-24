import { LOAD_PLAYLISTS_COMPLETE, LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_COMPLETE, SELECT_PLAYLIST_VIDEO } from '../actions/types';

const initialState = {
  playlists: null,
  playlist: null,
  watchPlaylistVideo: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_PLAYLISTS_COMPLETE:
      return {
        ...state,
        playlists: action.payload
      }
    case LOAD_PLAYLIST_REQUEST:
      return {
        ...state,
        playlist: null
      }
    case LOAD_PLAYLIST_COMPLETE:
      return {
        ...state,
        playlist: action.payload
      };
    case SELECT_PLAYLIST_VIDEO:
      return {
        ...state,
        watchPlaylistVideo: action.payload
      }
    default:
      return state;
  }
}