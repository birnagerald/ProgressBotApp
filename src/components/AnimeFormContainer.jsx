import React from "react";
import AnimeFormUpdate from "./AnimeFormUpdate";
import Loading from "./Loading";
import { animeFetch, animeUnload } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.anime
});

const mapDispatchToProps = {
  animeFetch,
  animeUnload
};

class AnimeFormContainer extends React.Component {
  componentDidMount() {
    this.props.animeFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.animeUnload();
  }

  render() {
    const { anime, isFetching } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <AnimeFormUpdate
          anime={anime}
          ownerId={window.localStorage.getItem("userId")}
          Id={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeFormContainer);
