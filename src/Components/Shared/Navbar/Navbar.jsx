import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar flex align_center justify_between">
        <div className="logo">
          <Link to="/" activeClassName="active">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar_links flex align_center">
          <ul className="nav_items flex align_center">
            <li>
              <NavLink exact className="nav_link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/symptoms">
                Symptoms
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/prevention">
                Prevention
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/treatment">
                Treatment
              </NavLink>
            </li>
          </ul>
          <div className="live_case">
            <NavLink className="btn btn_1" to="/liveCase" activeClassName="on">
              Live Cases
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
