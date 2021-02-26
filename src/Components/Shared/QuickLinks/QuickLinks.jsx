import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <div className="quick_links flex">
      <h2>Quick Links</h2>
      <NavLink
        className="link flex align_center justify_between"
        to="/symptoms"
      >
        Symptoms of Coronavirus
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </NavLink>
      <NavLink
        className="link flex align_center justify_between"
        to="/prevention"
      >
        How to protect yourself
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </NavLink>
      <NavLink className="link flex align_center justify_between" to="/">
        Treatment for coronavirus
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </NavLink>
    </div>
  );
}

export default QuickLinks;
