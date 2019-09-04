import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { userLogout, userProfileFetch, userSetId } from "../actions/actions";
import { requests } from "../agent";
import AnimeContainer from "./AnimeContainer";
import AnimeListContainer from "./AnimeListContainer";
import Footer from "./Footer";
import "./GlobalCss.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Main from "./Main";
import AnimeFormContainer from "./AnimeFormContainer";
import EpisodeFormContainer from "./EpisodeFormContainer";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = {
  userProfileFetch,
  userSetId,
  userLogout
};

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = window.localStorage.getItem("jwtToken");

    if (token) {
      requests.setToken(token);
    }
  }

  componentDidMount() {
    const userId = window.localStorage.getItem("userId");
    const { userSetId } = this.props;

    if (userId) {
      userSetId(userId);
    }
  }

  componentDidUpdate(prevProps) {
    const { userId, userData, userProfileFetch } = this.props;

    if (prevProps.userId !== userId && userId !== null && userData === null) {
      userProfileFetch(userId);
    }
  }

  render() {
    const { isAuthenticated, userData, userLogout } = this.props;
    return (
      <div>
        <Header
          isAuthenticated={isAuthenticated}
          userData={userData}
          logout={userLogout}
        />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route
            path="/anime/:id/episode/update/:id2"
            component={EpisodeFormContainer}
          />
          <Route path="/anime/update/:id" component={AnimeFormContainer} />
          <Route path="/anime/:id" component={AnimeContainer} />
          <Route path="/dashboard" component={AnimeListContainer} />
          <Route path="/" component={Main} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
