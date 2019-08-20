import {
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RECEIVED,
  EPISODE_LIST_ERROR,
  EPISODE_LIST_UNLOAD,
  EPISODE_ADDED,
  EPISODE_REMOVED
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
    case EPISODE_ADDED:
      return {
        ...state,
        episodeList: [...state.episodeList, action.episode]
      };
    case EPISODE_REMOVED:
      return {
        ...state,
        episodeList: state.episodeList.filter(
          episode => episode.id !== action.episodeId
        )
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
