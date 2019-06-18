import React from "react";
import AnimeList from "./AnimeList";
import { animeListAdd, animeListFetch } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.animeList
});

const mapDispatchToProps = {
  animeListAdd,
  animeListFetch
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    setTimeout(this.props.animeListAdd, 10000);
    this.props.animeListFetch();
  }
  render() {
    const { animes, isFetching } = this.props;
    return <AnimeList animes={animes} isFetching={isFetching} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
