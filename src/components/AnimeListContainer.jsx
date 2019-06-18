import React from "react";
import AnimeList from "./AnimeList";
import { animeList, animeListAdd } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.animeList
});

const mapDispatchToProps = {
  animeList,
  animeListAdd
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    setTimeout(this.props.animeListAdd, 10000);
    this.props.animeList();
  }
  render() {
    console.log(this.props);
    return <AnimeList animes={this.props.animes} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
