import React from "react";
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import AnimeListContainer from "./AnimeListContainer";
import AnimeContainer from "./AnimeContainer";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/anime/:id" component={AnimeContainer} />
          <Route path="/" component={AnimeListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
