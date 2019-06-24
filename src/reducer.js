import { combineReducers } from "redux";
import animeList from "./reducers/animeList";
import anime from "./reducers/anime";
import episodeList from "./reducers/episodeList";
export default combineReducers({
  animeList,
  anime,
  episodeList
});
