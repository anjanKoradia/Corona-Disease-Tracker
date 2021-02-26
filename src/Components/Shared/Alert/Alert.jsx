import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import "./Alert.css";

function Alert() {
  return (
    <div className="alert flex">
      <FontAwesomeIcon className="faStethoscope" icon={faStethoscope} />
      <p>
        If you develop a fever, cough, and have difficulty breathing, promptly
        seek medical care.
        <span>
          Call 1075 and notify the operator that you have, or think you might
          have, COVID-19.
        </span>
      </p>
    </div>
  );
}

export default Alert;
