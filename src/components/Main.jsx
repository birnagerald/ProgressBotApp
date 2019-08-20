import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome on Progress Bot V.1</h1>
        <p className="lead">This is a simple project progress manager</p>
        <hr className="my-4" />
        <p>You can now create an account and start using the App.</p>
        <p className="lead">
          <Link to="/" className="btn btn-primary btn-lg">
            Register
          </Link>
        </p>
      </div>
    );
  }
}
