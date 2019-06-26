import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { isAuthenticated, userData } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-ligh bg-light">
      <Link to="/" className="navbar-brand">
        React Progress-bot
      </Link>
      <span className="navbar-text">
        {isAuthenticated ? (
          <span>
            {userData === null ? (
              <i className="fas fa-spinner fa-spin" />
            ) : (
              userData.username
            )}
          </span>
        ) : (
          <Link to="/login">sign-in</Link>
        )}
      </span>
    </nav>
  );
};

export default Header;
