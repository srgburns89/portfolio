import React from "react";
import logo from "../sb-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black fixed-top">
      <div className="container">
      <a className="navbar-brand" href="#">
        <img className="sb-logo" src={logo} alt="SB" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "white"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link to="home" className="nav-link" href="#">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" offset={-130} className="nav-link" href="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="tools" offset={-200} className="nav-link" href="#">
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link  to="contact" offset={-130} className="nav-link" href="#">
              contact
            </Link>
          </li>
        </ul>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
