import { requests } from "../agent";

export const ANIME_LIST_REQUEST = "ANIME_LIST_REQUEST";
export const ANIME_LIST_RECEIVED = "ANIME_LIST_RECEIVED";
export const ANIME_LIST_ERROR = "ANIME_LIST_ERROR";
export const ANIME_LIST_ADD = "ANIME_LIST_ADD";

export const animeListRequest = () => ({
  type: ANIME_LIST_REQUEST
});

export const animeListError = error => ({
  type: ANIME_LIST_ERROR,
  error
});

export const animeListReceived = data => ({
  type: ANIME_LIST_RECEIVED,
  data
});

export const animeListFetch = () => {
  return dispatch => {
    dispatch(animeListRequest());
    return requests
      .get("/animes")
      .then(response => dispatch(animeListReceived(response)))
      .catch(error => dispatch(animeListError(error)));
  };
};

export const animeListAdd = () => ({
  type: ANIME_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: "A new Anime"
  }
});
