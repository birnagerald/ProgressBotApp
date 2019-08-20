import React from "react";
import AnimeList from "./AnimeList";
import Spinner from "./Spinner";
import { animeListFetch, animeDelete } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.animeList
});

const mapDispatchToProps = {
  animeListFetch,
  animeDelete
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    this.props.animeListFetch();
  }

  render() {
    const { animes, isFetching, animeDelete } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return <AnimeList animes={animes} deleteHandler={animeDelete} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
