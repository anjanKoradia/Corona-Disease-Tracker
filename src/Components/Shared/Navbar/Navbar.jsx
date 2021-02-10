import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.modual.css"

import logo from "../../../Assets/Images/logo.png";

function Navbar() {
  return (
    <nav>
      <div className="navbar flex align_center justify_between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar_links flex align_center">
          <ul className="nav_items flex align_center">
            <li>
              <NavLink className="nav_link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                to="/symptoms"
                activeClassName="active"
              >
                Symptoms
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                to="/prevention"
                activeClassName="active"
              >
                Prevention
              </NavLink>
            </li>
          </ul>
          <div className="live_case">
            <Link className="btn btn_1" to="/live_case">
              Live Cases
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
