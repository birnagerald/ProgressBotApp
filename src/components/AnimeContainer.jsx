import React from "react";
import Anime from "./Anime";
import Spinner from "./Spinner";
import { animeFetch, animeUnload } from "../actions/actions";
import { connect } from "react-redux";
import EpisodeListContainer from "./EpisodeListContainer";

const mapStateToProps = state => ({
  ...state.anime
});

const mapDispatchToProps = {
  animeFetch,
  animeUnload
};

class AnimeContainer extends React.Component {
  componentDidMount() {
    this.props.animeFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.animeUnload();
  }

  render() {
    const { anime, isFetching } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <div>
        <Anime anime={anime} />
        {anime && <EpisodeListContainer animeId={this.props.match.params.id} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeContainer);
