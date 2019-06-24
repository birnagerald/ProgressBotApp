import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RECEIVED,
  EPISODE_LIST_ERROR,
  EPISODE_LIST_UNLOAD
} from "../actions/constants";

export default (state = { episodeList: null, isFetching: false }, action) => {
  switch (action.type) {
    case EPISODE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case EPISODE_LIST_RECEIVED:
      return {
        ...state,
        episodeList: action.data["hydra:member"],
        isFetching: false
      };
    case EPISODE_LIST_ERROR:
    case EPISODE_LIST_UNLOAD:
      return {
        ...state,
        episodeList: null,
        isFetching: false
      };
    default:
      return state;
  }
};
