import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_RECEIVED,
  ANIME_LIST_ERROR,
  ANIME_REMOVED,
  ANIME_ADDED
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
    case ANIME_ADDED:
      return {
        ...state,
        animes: [...state.animes, action.anime]
      };
    case ANIME_REMOVED:
      return {
        ...state,
        animes: state.animes.filter(anime => anime.id !== action.animeId)
      };
    default:
      return state;
  }
};
