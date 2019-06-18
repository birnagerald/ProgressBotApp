import { ANIME_LIST, ANIME_LIST_ADD } from "../actions/actions";

export default (state = { animes: null }, action) => {
  switch (action.type) {
    case ANIME_LIST:
      return {
        ...state,
        animes: action.data
      };
    case ANIME_LIST_ADD:
      return {
        ...state,
        animes: state.animes ? state.animes.concat(action.data) : state.animes
      };
    default:
      return state;
  }
};
