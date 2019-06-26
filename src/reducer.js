import { combineReducers } from "redux";
import animeList from "./reducers/animeList";
import anime from "./reducers/anime";
import episodeList from "./reducers/episodeList";
import { reducer as formReducer } from "redux-form";
import auth from "./reducers/auth";
import { routerReducer } from "react-router-redux";
export default combineReducers({
  animeList,
  anime,
  episodeList,
  auth,
  router: routerReducer,
  form: formReducer
});
