import React from "react";
import { reduxForm, Field } from "redux-form";
import { renderField } from "../form";
import { connect } from "react-redux";
import { userLoginAttempt } from "../actions/actions";

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = {
  userLoginAttempt
};

class LoginForm extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(values) {
    return this.props.userLoginAttempt(values.username, values.password);
  }
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <div className="text-center">
        {error && <div className="alert alert-danger">{error}</div>}
        <form
          action=""
          className="mt-4"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            name="username"
            label="Username"
            type="text"
            className="form-control inputCustom"
            component={renderField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            className="form-control inputCustom"
            component={renderField}
          />
          <button type="submit" className="btn btn-primary">
            Login-in
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "LoginForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
