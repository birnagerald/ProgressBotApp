import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligh bg-dark">
      <Link to="/" className="navbar-brand">
        React Progress-bot
      </Link>

      <span className="navbar-text">
        <Link to="/login">sign-in</Link>
      </span>
    </nav>
  );
};

export default Header;
