import React from "react";
import './style.scss'

export const StatusCircle = ({name}) => {
  return (
    <div className="status__name">
      <span className="status__name--color" style={{backgroundColor: `${name === "planned" ? "#F49F85" : name === "progress" ? "#AD1FEA" : "#62BCFA"}`}}></span>
      <span className="status__name__value">{name === "planned" ? "Planned" : name === "progress" ? "In-Progress" : "Live"}</span>
    </div>
  );
};
