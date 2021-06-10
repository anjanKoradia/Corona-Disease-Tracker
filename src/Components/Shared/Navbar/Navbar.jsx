import {
  faAlignRight,
  faArrowLeft,
  faHeadSideMask,
  faHome,
  faLungsVirus,
  faSyringe,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";
import "./Navbar.css";

function Navbar() {
  const toggleMenu = () => {
    document.querySelector(".mobile_navbar").classList.toggle("toggleNavbar");
    document.querySelector(".mobile_overlay").classList.toggle("toggleOverly");
  };

  return (
    <nav>
      <div className="navbar flex align_center justify_between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar_links">
          <ul className="nav_items flex align_center">
            <li>
              <NavLink
                exact
                className="nav_link"
                to="/"
                activeClassName="active"
              >
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
            <div className="live_case">
              <NavLink
                className="btn btn_1"
                to="/liveCase"
                activeClassName="on"
              >
                Live Cases
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="hamburger">
          <FontAwesomeIcon
            className="faAlignRight fa-2x"
            icon={faAlignRight}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* -------------------- Mobile Navbar -------------------- */}

      <div className="mobile_overlay" onClick={toggleMenu}></div>
      <div className="mobile_navbar">
        <div className="mobile_nav flex align_center justify_between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="back">
            <FontAwesomeIcon
              className="faArrowLeft"
              icon={faArrowLeft}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="mobile_navitems flex">
          <NavLink
            exact
            className="mobile_navlink"
            to="/"
            activeClassName="active"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon className="faHome mobile_icon" icon={faHome} />
            Home
          </NavLink>
          <NavLink className="mobile_navlink" to="/about" onClick={toggleMenu}>
            <FontAwesomeIcon className="faVirus mobile_icon" icon={faVirus} />
            About
          </NavLink>
          <NavLink
            className="mobile_navlink"
            to="/symptoms"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className="faLungsVirus mobile_icon"
              icon={faLungsVirus}
            />
            Symptoms
          </NavLink>
          <NavLink
            className="mobile_navlink"
            to="/prevention"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className="faHeadSideMask mobile_icon"
              icon={faHeadSideMask}
            />
            Prevention
          </NavLink>
          <NavLink
            className="mobile_navlink"
            to="/treatment"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className="faSyringe mobile_icon"
              icon={faSyringe}
            />
            Treatment
          </NavLink>
          <div className="mobile_livecases">
            <NavLink
              className="btn btn_1 "
              to="/liveCase"
              activeClassName="on"
              onClick={toggleMenu}
            >
              Live Cases
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
