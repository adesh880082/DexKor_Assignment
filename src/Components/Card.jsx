import React from "react";
import "./Card.css";

const FloatingCard = ({ logo, heading, count, colorReq }) => {
  return (
    <div className="card" style={{boxShadow: `0 6px 12px -3px rgba(${colorReq}, 0.25)`}}>
      {/* Top Section */}
      <div className="card-header">
        <span className="card_spn" style={{backgroundColor: `rgb(${colorReq})`}}>
            {logo}
        </span>
        <h2 className="card-heading">{heading}</h2>
      </div>

      {/* Center Count */}
      <div className="card-count">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default FloatingCard;