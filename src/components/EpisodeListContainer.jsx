import React from "react";
import EpisodeList from "./EpisodeList";
import Spinner from "./Spinner";
import { episodeListFetch, episodeListUnload } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.episodeList
});

const mapDispatchToProps = {
  episodeListFetch,
  episodeListUnload
};

class EpisodeListContainer extends React.Component {
  componentDidMount() {
    this.props.episodeListFetch(this.props.animeId);
  }

  componentWillUnmount() {
    this.props.episodeListUnload();
  }

  render() {
    const { episodeList, isFetching } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return <EpisodeList episodeList={episodeList} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeListContainer);
