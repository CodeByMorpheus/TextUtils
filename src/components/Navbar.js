// ****---- Navbar Component ----**** //

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    // ****---- Navigation Section ----**** //
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* Title and Nav-Item Button Section */}
      <div className="container-fluid">
        <Link to="/TextUtils" className="navbar-brand" href="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                {props.aboutTitle}
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggler Section */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              htmlFor="flexSwitchCheckDefault"
              className="form-check-label"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ****---- Prop-Type Declaration Section ----**** //
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Your Title",
  aboutTitle: "Set About Title",
};
