import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../form";
import { customCheckbox } from "./CustomCheckboxInput";
import { connect } from "react-redux";
import { episodeAdd } from "../actions/actions";
import "./EpisodeForm.css";

const mapDispatchToProps = {
  episodeAdd
};

class EpisodeForm extends React.Component {
  onSubmit(values) {
    const { episodeAdd, animeId, reset } = this.props;
    return episodeAdd(
      values.number,
      values.translation,
      values.time,
      values.proofreading,
      values.edition,
      values.typeset,
      values.qualityCheck,
      values.encoding,
      values.published,
      animeId
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

          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-primary"
          >
            Ajouter un épisode
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
  form: "episodeForm",
  initialValues: {
    translation: false,
    time: false,
    proofreading: false,
    edition: false,
    typeset: false,
    qualityCheck: false,
    encoding: false,
    published: false
  }
})(
  connect(
    null,
    mapDispatchToProps
  )(EpisodeForm)
);
