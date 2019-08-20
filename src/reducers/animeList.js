import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_ADD,
  ANIME_LIST_RECEIVED,
  ANIME_LIST_ERROR
} from "../actions/constants";

export default (state = { animes: null, isFetching: false }, action) => {
  switch (action.type) {
    case ANIME_LIST_REQUEST:
      state = {
        ...state,
        isFetching: true
      };
      return state;
    case ANIME_LIST_RECEIVED:
      state = {
        ...state,
        animes: action.data["hydra:member"],
        isFetching: false
      };
      return state;
    case ANIME_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        animes: null
      };
    case ANIME_LIST_ADD:
      state = {
        ...state,
        // animes: state.animes ? state.animes.concat(action.data) : state.animes
        animes: [...state.animes, action.anime]
      };
      return state;
    default:
      return state;
  }
};
