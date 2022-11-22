import React from "react";
import "./internship-card.css";

export default function InternshipCard({ internship}) {
  return (
    <div className="internship-card">
      <div className="internship-icon">
        <img src={internship.icon} alt=""/>
      </div>
      <div className="internship-name">{internship.name}</div>
    </div>
  );
}
