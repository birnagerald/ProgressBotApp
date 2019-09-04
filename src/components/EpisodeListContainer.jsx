import React from "react";
import EpisodeList from "./EpisodeList";
import Loading from "./Loading";
import {
  episodeListFetch,
  episodeListUnload,
  episodeDelete,
  episodeSync
} from "../actions/actions";
import { connect } from "react-redux";
import EpisodeForm from "./EpisodeForm";

const mapStateToProps = state => ({
  ...state.episodeList,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  episodeListFetch,
  episodeListUnload,
  episodeDelete,
  episodeSync
};

class EpisodeListContainer extends React.Component {
  componentDidMount() {
    this.props.episodeListFetch(this.props.animeId, this.props.anime);
  }

  componentWillMount() {
    this.props.episodeListUnload();
  }

  render() {
    const {
      episodeList,
      isFetching,
      isAuthenticated,
      animeId,
      anime,
      episodeDelete
    } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <EpisodeList
          episodeList={episodeList}
          deleteHandler={episodeDelete}
          syncHandler={episodeSync}
          anime={anime}
        />
        {isAuthenticated && <EpisodeForm animeId={animeId} />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodeListContainer);
