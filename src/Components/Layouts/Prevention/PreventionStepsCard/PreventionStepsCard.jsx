import React from "react";
import "./PreventionStepsCard.css"

function PreventionStepsCard({ image, title, detail1, detail2 }) {
  return (
    <div className="prevention_card flex align_center">
      <div className="prevention_detail">
        <h1>{title}</h1>
        <p>{detail1}</p>
        <p>{detail2}</p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default PreventionStepsCard;
