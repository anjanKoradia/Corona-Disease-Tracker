import React from "react";
import "./CasesCard.css";

function CasesCard({ title, total_cases, cases , active, cases_type, heading_color, ...props }) {
  return (
    <div onClick={props.onClick} className={`cases_card ${active && "box--selected"}`}>
      <p>{title}</p>
      <h1 className={`${heading_color}`}>{total_cases}</h1>
      <p>{cases}</p>
      <p>{cases_type}</p>
    </div>
  );
}

export default CasesCard;
