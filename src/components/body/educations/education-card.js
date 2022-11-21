import React from "react";
import "./education-card.css";

export default function EducationCard({ education }) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <img src={education.icon} alt="" />
      </div>
      <div className="education-name">{education.name}</div>
    </div>
  );
}
