import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../form";
import { animeUpdate } from "../actions/actions";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = {
  animeUpdate
};

class AnimeFormUpdate extends React.Component {
  onSubmit(values) {
    const { animeUpdate, ownerId, reset, Id } = this.props;
    return animeUpdate(
      values.title,
      values.totalEpisode,
      values.coverImage,
      values.thumbnail,
      ownerId,
      Id
    ).then(() => reset());
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, error } = this.props;

    return (
      <div className="container text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        <form
          action=""
          className="mt-4"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <div className="form-group">
            <Field
              label="Title"
              name="title"
              id="title"
              className="form-control"
              component={renderField}
              type="text"
            />

            <Field
              label="Total Episodes"
              name="totalEpisode"
              id="Total_Episodes"
              className="form-control"
              component={renderField}
              type="number"
              parse={value => Number(value)}
            />

            <Field
              label="Cover Image"
              name="coverImage"
              component={renderField}
              className="form-control"
              type="text"
            />

            <Field
              label="Thumbnail"
              name="thumbnail"
              component={renderField}
              className="form-control"
              type="text"
            />
          </div>

          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary"
          >
            Update Anime
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps.anime);
    console.log(this.props.anime);
    if (prevProps.anime !== this.props.anime) {
      this.props.history.push(`/dashboard`);
    }
  }
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
AnimeFormUpdate = reduxForm({
  form: "AnimeFormUpdate" // a unique identifier for this form
})(AnimeFormUpdate);

// You have to connect() to any reducers that you wish to connect to yourself
AnimeFormUpdate = connect(
  state => ({
    initialValues: state.anime.anime // pull initial values from account reducer
  }),
  mapDispatchToProps
)(AnimeFormUpdate);

export default withRouter(AnimeFormUpdate);
