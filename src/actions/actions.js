import { requests } from "../agent";
import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_RECEIVED,
  ANIME_LIST_ADD,
  ANIME_LIST_ERROR,
  ANIME_REQUEST,
  ANIME_RECEIVED,
  ANIME_ERROR,
  ANIME_UNLOAD,
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RECEIVED,
  EPISODE_LIST_ERROR,
  EPISODE_LIST_UNLOAD,
  EPISODE_ADDED,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  USER_LOGOUT
} from "./constants";
import { SubmissionError } from "redux-form";
import { parseApiErrors } from "../apiUtils";

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

export const animeListDelete = id => {
  return _dispatch => {
    return requests.delete(`/animes/${id}`);
  };
};

export const animeListFetch = () => {
  return dispatch => {
    dispatch(animeListRequest());
    return requests
      .get(`/animes`)
      .then(response => dispatch(animeListReceived(response)))
      .catch(error => dispatch(animeListError(error)));
  };
};

export const animeRequest = () => ({
  type: ANIME_REQUEST
});

export const animeError = error => ({
  type: ANIME_ERROR,
  error
});

export const animeReceived = data => ({
  type: ANIME_RECEIVED,
  data
});

export const animeUnload = () => ({
  type: ANIME_UNLOAD
});

export const animeFetch = id => {
  return dispatch => {
    dispatch(animeRequest());
    return requests
      .get(`/animes/${id}`)
      .then(response => dispatch(animeReceived(response)))
      .catch(error => dispatch(animeError(error)));
  };
};

export const episodeListRequest = () => ({
  type: EPISODE_LIST_REQUEST
});

export const episodeListError = error => ({
  type: EPISODE_LIST_ERROR,
  error
});

export const episodeListReceived = data => ({
  type: EPISODE_LIST_RECEIVED,
  data
});

export const episodeListUnload = () => ({
  type: EPISODE_LIST_UNLOAD
});

export const episodeListDelete = id => {
  return _dispatch => {
    return requests.delete(`/episodes/${id}`);
  };
};

export const episodeListFetch = id => {
  return dispatch => {
    dispatch(episodeListRequest());
    return requests
      .get(`/animes/${id}/episodes`)
      .then(response => dispatch(episodeListReceived(response)))
      .catch(error => dispatch(episodeListError(error)));
  };
};

export const episodeAdded = episode => ({
  type: EPISODE_ADDED,
  episode
});

export const episodeAdd = (
  number,
  translation,
  time,
  proofreading,
  edition,
  typeset,
  qualityCheck,
  encoding,
  published,
  animeId
) => {
  return dispatch => {
    return requests
      .post(`/episodes`, {
        number: number,
        translation: translation,
        time: time,
        proofreading: proofreading,
        edition: edition,
        typeset: typeset,
        qualityCheck: qualityCheck,
        encoding: encoding,
        published: published,
        anime: `/api/animes/${animeId}`
      })
      .then(response => dispatch(episodeAdded(response)))
      .catch(error => {
        if (401 === error.response.status) {
          return dispatch(userLogout());
        }
        throw new SubmissionError(parseApiErrors(error));
      });
  };
};

export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId
  };
};

export const userLoginAttempt = (username, password) => {
  return dispatch => {
    return requests
      .post(`/login_check`, { username, password }, false)
      .then(response => dispatch(userLoginSuccess(response.token, response.id)))
      .catch(() => {
        throw new SubmissionError({
          error: "Nom d'utilisateur ou Mot de passe incorrect"
        });
      });
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const userSetId = userId => {
  return {
    type: USER_SET_ID,
    userId
  };
};

export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST
  };
};

export const userProfileReceived = (userId, userData) => {
  return {
    type: USER_PROFILE_RECEIVED,
    userData,
    userId
  };
};

export const userProfileError = userId => {
  return {
    type: USER_PROFILE_ERROR,
    userId
  };
};

export const userProfileFetch = userId => {
  return dispatch => {
    dispatch(userProfileRequest());
    return requests
      .get(`/users/${userId}`, true)
      .then(response => dispatch(userProfileReceived(userId, response)))
      .catch(() => dispatch(userProfileError(userId)));
  };
};

export const animeListAdd = () => ({
  type: ANIME_LIST_ADD,
  data: {
    id: Math.floor(Math.random() * 100 + 3),
    title: "A new Anime"
  }
});
