import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../form";
import { connect } from "react-redux";
import { animeAdd } from "../actions/actions";

const mapDispatchToProps = {
  animeAdd
};

class AnimeForm extends React.Component {
  onSubmit(values) {
    const { animeAdd, ownerId, reset } = this.props;
    return animeAdd(
      values.title,
      values.totalEpisode,
      values.coverImage,
      ownerId
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
              name="cover_image"
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
            Add Anime
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
}

export default reduxForm({
  form: "animeForm",
  initialValues: {
    coverImage: null
  }
})(
  connect(
    null,
    mapDispatchToProps
  )(AnimeForm)
);
