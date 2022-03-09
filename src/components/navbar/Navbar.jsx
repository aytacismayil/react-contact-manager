import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <FontAwesomeIcon icon={faMobile} /> Contact
            <span className="text-warning"> Manager</span>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
