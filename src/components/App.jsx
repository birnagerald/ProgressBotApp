import React from "react";
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import AnimeListContainer from "./AnimeListContainer";
import AnimeContainer from "./AnimeContainer";
import Header from "./Header";
import { userProfileFetch, userSetId } from "../actions/actions";
import { requests } from "../agent";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = {
  userProfileFetch,
  userSetId
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
    const { isAuthenticated, userData } = this.props;
    return (
      <div>
        <Header isAuthenticated={isAuthenticated} userData={userData} />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/anime/:id" component={AnimeContainer} />
          <Route path="/" component={AnimeListContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
