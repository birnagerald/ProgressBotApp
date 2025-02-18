import { requests } from "../agent";
import {
  ANIME_LIST_REQUEST,
  ANIME_LIST_RECEIVED,
  ANIME_LIST_ERROR,
  ANIME_REQUEST,
  ANIME_RECEIVED,
  ANIME_ERROR,
  ANIME_UNLOAD,
  ANIME_REMOVED,
  ANIME_ADDED,
  ANIME_UPDATED,
  EPISODE_LIST_REQUEST,
  EPISODE_LIST_RECEIVED,
  EPISODE_LIST_ERROR,
  EPISODE_LIST_UNLOAD,
  EPISODE_ADDED,
  EPISODE_REMOVED,
  EPISODE_REQUEST,
  EPISODE_RECEIVED,
  EPISODE_ERROR,
  EPISODE_UNLOAD,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  USER_LOGOUT,
  EPISODE_UPDATED
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

export const animeAdded = anime => ({
  type: ANIME_ADDED,
  anime
});

export const animeAdd = (
  title,
  totalEpisode,
  coverImage,
  thumbnail,
  webhook,
  OwnerId
) => {
  return dispatch => {
    return requests
      .post(`/animes`, {
        title: title,
        totalEpisode: totalEpisode,
        coverImage: coverImage,
        thumbnail: thumbnail,
        webhook: webhook,
        owner: `/api/users/${OwnerId}`
      })
      .then(response => dispatch(animeAdded(response)))
      .catch(error => {
        if (401 === error.response.status) {
          return dispatch(userLogout());
        }
        throw new SubmissionError(parseApiErrors(error));
      });
  };
};

export const animeUpdated = anime => ({
  type: ANIME_UPDATED,
  anime
});

export const animeUpdate = (
  title,
  totalEpisode,
  coverImage,
  thumbnail,
  webhook,
  OwnerId,
  id
) => {
  return dispatch => {
    return requests
      .put(`/animes/${id}`, {
        title: title,
        totalEpisode: totalEpisode,
        coverImage: coverImage,
        thumbnail: thumbnail,
        webhook: webhook,
        owner: `/api/users/${OwnerId}`
      })
      .then(response => dispatch(animeUpdated(response)))
      .catch(error => {
        if (401 === error.response) {
          return dispatch(userLogout());
        }
      });
  };
};

export const animeDelete = id => dispatch => {
  return requests
    .delete(`/animes/${id}`)
    .then(() => dispatch(animeRemoved(id)));
};

export const animeRemoved = id => ({
  type: ANIME_REMOVED,
  animeId: id
});

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

export const episodeListFetch = id => {
  return dispatch => {
    dispatch(episodeListRequest());
    return requests
      .get(`/animes/${id}/episodes`)
      .then(response => dispatch(episodeListReceived(response)))
      .catch(error => dispatch(episodeListError(error)));
  };
};

export const episodeRequest = () => ({
  type: EPISODE_REQUEST
});

export const episodeError = error => ({
  type: EPISODE_ERROR,
  error
});

export const episodeReceived = data => ({
  type: EPISODE_RECEIVED,
  data
});

export const episodeUnload = () => ({
  type: EPISODE_UNLOAD
});

export const episodeFetch = id => {
  return dispatch => {
    dispatch(episodeRequest());
    return requests
      .get(`/episodes/${id}`)
      .then(response => dispatch(episodeReceived(response)))
      .catch(error => dispatch(episodeError(error)));
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

export const episodeUpdated = episode => ({
  type: EPISODE_UPDATED,
  episode
});

export const episodeUpdate = (
  number,
  translation,
  time,
  proofreading,
  edition,
  typeset,
  qualityCheck,
  encoding,
  published,
  animeId,
  id
) => {
  return dispatch => {
    return requests
      .put(`/episodes/${id}`, {
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
      .then(response => dispatch(episodeUpdated(response)))
      .catch(error => {
        if (401 === error.response) {
          return dispatch(userLogout());
        }
      });
  };
};

export const episodeDelete = id => dispatch => {
  return requests
    .delete(`/episodes/${id}`)
    .then(() => dispatch(episodeRemoved(id)));
};

export const episodeRemoved = id => ({
  type: EPISODE_REMOVED,
  episodeId: id
});

export const episodeSync = (episode, anime) => {
  const timestamp = new Date(); // This would be the timestamp you want to format
  return requests
    .postCustom(anime.webhook, {
      embeds: [
        {
          description: `Épisode ${episode.number}/${anime.totalEpisode}`,
          color: 14177041,
          timestamp: timestamp.toISOString(),
          footer: {
            icon_url: ``,
            text: ``
          },
          thumbnail: {
            url: anime.thumbnail
          },
          image: {
            url: anime.coverImage
          },
          author: {
            name: anime.title
          },
          fields: [
            {
              name: `Avancement:`,
              value: `\n**Trad** : ${
                episode.translation ? ":white_check_mark:" : ":x:"
              } \n**Time** : ${
                episode.time ? ":white_check_mark:" : ":x:"
              }\n**Check** : ${
                episode.proofreading ? ":white_check_mark:" : ":x:"
              }\n**Adapt** : ${episode.edition ? ":white_check_mark:" : ":x:"}`,
              inline: true
            },
            {
              name: `Publié: ${
                episode.published ? ":white_check_mark:" : ":x:"
              }`,
              value: `\n**Edit** : ${
                episode.typeset ? ":white_check_mark:" : ":x:"
              }\n**Qcheck** : ${
                episode.qualityCheck ? ":white_check_mark:" : ":x:"
              }\n**Enco** : ${episode.encoding ? ":white_check_mark:" : ":x:"}`,
              inline: true
            }
          ]
        }
      ]
    })
    .then(res => {
      res = res.status;
      // res.body, res.headers, res.status
    })
    .catch(err => {
      // err.message, err.response
      err = err.status;
    });
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
