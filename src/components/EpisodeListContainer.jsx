import React from "react";
import EpisodeList from "./EpisodeList";
import Spinner from "./Spinner";
import {
  episodeListFetch,
  episodeListUnload,
  episodeListDelete
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
  episodeListDelete
};

class EpisodeListContainer extends React.Component {
  componentDidMount() {
    this.props.episodeListFetch(this.props.animeId);
  }

  componentWillUnmount() {
    this.props.episodeListUnload();
  }

  render() {
    const {
      episodeList,
      isFetching,
      isAuthenticated,
      animeId,
      episodeListDelete
    } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <div>
        <EpisodeList
          episodeList={episodeList}
          deleteHandler={episodeListDelete}
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
