import React from "react";
import EpisodeFormUpdate from "./EpisodeFormUpdate";
import Loading from "./Loading";
import {
  animeFetch,
  animeUnload,
  episodeFetch,
  episodeUnload
} from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.anime,
  ...state.episode
});

const mapDispatchToProps = {
  episodeFetch,
  episodeUnload,
  animeFetch,
  animeUnload
};

class AnimeFormContainer extends React.Component {
  componentDidMount() {
    this.props.animeFetch(this.props.match.params.id);
    this.props.episodeFetch(this.props.match.params.id2);
  }

  componentWillUnmount() {
    this.props.animeUnload();
    this.props.episodeUnload();
  }

  render() {
    const { episode, isFetching } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <EpisodeFormUpdate
          //   anime={anime}
          episode={episode}
          ownerId={window.localStorage.getItem("userId")}
          Id={this.props.match.params.id2}
          animeId={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeFormContainer);
