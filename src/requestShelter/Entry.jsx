import React from "react";
import "./shelterCard.css";

// Props for listings
function Entry(props) {
  return (
    <div className="shelterCard">
      <h3>{props.title}</h3>
      <dt>{props.city}</dt>
      <div className="shelterDetails">
        <span>{props.numberOfGuest} spaces</span>
        <span>{props.pets}</span>
        <span>{props.duration}</span>
      </div>
    </div>
  );
}

export default Entry;
