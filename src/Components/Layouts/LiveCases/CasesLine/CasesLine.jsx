import React from "react";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CasesLine.css";

function CasesLine({ title, todayCases, totalCases, squareColor }) {
  const formatNumber = (num) => {
    const formated_number = new Intl.NumberFormat().format(num);
    return formated_number;
  };

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
        <span>+ {formatNumber(todayCases)}</span>
        <p>{formatNumber(totalCases)}</p>
      </div>
    </div>
  );
}

export default CasesLine;
