import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import "./QuickLinks.css";

function QuickLinks() {
  return (
    <div className="quick_links flex">
      <h2>Quick Links</h2>
      <Link
        className="link flex align_center justify_between"
        to="/symptoms"
      >
        Symptoms of Coronavirus
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </Link>
      <Link
        className="link flex align_center justify_between"
        to="/prevention"
      >
        How to protect yourself
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </Link>
      <Link className="link flex align_center justify_between" to="/treatment">
        Treatment for coronavirus
        <FontAwesomeIcon
          className="faLongArrowAltRight"
          icon={faLongArrowAltRight}
        />
      </Link>
    </div>
  );
}

export default QuickLinks;
