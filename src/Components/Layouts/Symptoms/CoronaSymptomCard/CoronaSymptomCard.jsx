import React from "react";
import "./CoronaSymptomCard.css"

function CoronaSymptomCard({ image, title, detail_title, detail }) {
  return (
    <div className="symptom_card flex align_center">
      <img src={image} alt="" />
      <div className="symptom_detail">
        <h1>{title}</h1>
        <p>
          <span>{detail_title}</span>
          {detail}
        </p>
      </div>
    </div>
  );
}

export default CoronaSymptomCard;
