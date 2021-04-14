import React from "react";
import "./TransmissionDetailCard.css";

function TransmissionDetailCard({ image, title, detail }) {
  return (
    <div className="transmission_detail_card">
      <img src={image} alt="" />
      <div className="transmission_details">
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default TransmissionDetailCard;
