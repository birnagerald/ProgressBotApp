import {
  EPISODE_REQUEST,
  EPISODE_RECEIVED,
  EPISODE_ERROR,
  EPISODE_UNLOAD,
  EPISODE_UPDATED
} from "../actions/constants";

export default (state = { episode: null, isFetching: false }, action) => {
  switch (action.type) {
    case EPISODE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case EPISODE_RECEIVED:
      return {
        ...state,
        episode: action.data,
        isFetching: false
      };
    case EPISODE_ERROR:
    case EPISODE_UNLOAD:
      return {
        ...state,
        episode: null,
        isFetching: false
      };
    case EPISODE_UPDATED:
      return {
        ...state,
        episode: action.episode
      };
    default:
      return state;
  }
};
