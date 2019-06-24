import React from "react";
import AnimeList from "./AnimeList";
import Spinner from "./Spinner";
import { animeListFetch } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.animeList
});

const mapDispatchToProps = {
  animeListFetch
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    this.props.animeListFetch();
  }
  render() {
    const { animes, isFetching } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return <AnimeList animes={animes} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
