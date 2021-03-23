import React from "react";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import numeral from "numeral";
import "./CasesLine.css";

function CasesLine({ title, todayCases, totalCases, squareColor }) {
  return (
    <div className="cases_line flex align_center justify_between">
      <div className="title flex align_center">
        <FontAwesomeIcon
          className={`faSquare ${squareColor}`}
          icon={faSquare}
        />
        <p>{title}</p>
      </div>
      <div className="value flex align_center">
        <span>+ {numeral(todayCases).format("0,0")}</span>
        <p>{numeral(totalCases).format("0,0")}</p>
      </div>
    </div>
  );
}

export default CasesLine;
