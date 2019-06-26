import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import App from "./components/App";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { tokenMiddleware } from "./middleware";

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, tokenMiddleware)
);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
