import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { customCheckbox } from "./CustomCheckboxInput";
import { renderField } from "../form";
import { episodeUpdate } from "../actions/actions";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = {
  episodeUpdate
};

class EpisodeFormUpdate extends React.Component {
  onSubmit(values) {
    const { episodeUpdate, animeId, reset, Id } = this.props;
    return episodeUpdate(
      values.number,
      values.translation,
      values.time,
      values.proofreading,
      values.edition,
      values.typeset,
      values.qualityCheck,
      values.encoding,
      values.published,
      animeId,
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
              label="Numéro"
              name="number"
              component={renderField}
              className="form-control inputCustom"
              type="number"
              parse={value => Number(value)}
            />

            <Field
              label="Traduction"
              name="translation"
              id="translation"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />

            <Field
              label="Time"
              name="time"
              id="time"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="Check"
              name="proofreading"
              id="proofreading"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="Adapt"
              name="edition"
              id="edition"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="Edit"
              name="typeset"
              id="typeset"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="QCheck"
              name="qualityCheck"
              id="qualityCheck"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="Enco"
              name="encoding"
              id="encoding"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
            <Field
              label="Publication"
              name="published"
              id="published"
              className="custom-control-input"
              component={customCheckbox}
              type="checkbox"
            />
          </div>

          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary"
          >
            Update Episode
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
    const { animeId } = this.props;
    if (prevProps.episode !== this.props.episode) {
      this.props.history.push(`/anime/${animeId}`);
    }
  }
}
// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
EpisodeFormUpdate = reduxForm({
  form: "EpisodeFormUpdate" // a unique identifier for this form
})(EpisodeFormUpdate);

// You have to connect() to any reducers that you wish to connect to yourself
EpisodeFormUpdate = connect(
  state => ({
    initialValues: state.episode.episode // pull initial values from account reducer
  }),
  mapDispatchToProps
)(EpisodeFormUpdate);

export default withRouter(EpisodeFormUpdate);
