import React from "react";
import AnimeList from "./AnimeList";
import Spinner from "./Spinner";
import { animeListFetch, animeDelete } from "../actions/actions";
import { connect } from "react-redux";
import AnimeForm from "./AnimeForm";

const mapStateToProps = state => ({
  ...state.animeList,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  animeListFetch,
  animeDelete
};

class AnimeListContainer extends React.Component {
  componentDidMount() {
    this.props.animeListFetch(this.props.ownerId);
  }

  render() {
    const { animes, isFetching, animeDelete, isAuthenticated } = this.props;
    if (isFetching) {
      return <Spinner />;
    }
    return (
      <div>
        <AnimeList animes={animes} deleteHandler={animeDelete} />
        {isAuthenticated && (
          <AnimeForm ownerId={window.localStorage.getItem("userId")} />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeListContainer);
