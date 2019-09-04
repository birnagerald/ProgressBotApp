import {
  ANIME_REQUEST,
  ANIME_RECEIVED,
  ANIME_ERROR,
  ANIME_UNLOAD,
  ANIME_UPDATED
} from "../actions/constants";

export default (state = { anime: null, isFetching: false }, action) => {
  switch (action.type) {
    case ANIME_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ANIME_RECEIVED:
      return {
        ...state,
        anime: action.data,
        isFetching: false
      };
    case ANIME_ERROR:
    case ANIME_UNLOAD:
      return {
        ...state,
        anime: null,
        isFetching: false
      };
    case ANIME_UPDATED:
      return {
        ...state,
        anime: action.anime,
        isFetching: false
      };
    default:
      return state;
  }
};
