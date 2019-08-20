import React from "react";
import AnimeList from "./AnimeList";
import Spinner from "./Spinner";
import { animeListFetch, animeListDelete } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.animeList
});

const mapDispatchToProps = {
  animeListFetch,
  animeListDelete
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    this.props.animeListFetch();
  }

  render() {
    const { animes, isFetching, animeListDelete } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return <AnimeList animes={animes} deleteHandler={animeListDelete} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
