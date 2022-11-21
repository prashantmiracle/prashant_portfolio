import React from "react";
import "./education-card.css";

export default function EducationCard({ education }) {
  return (
    <div className="education-card">
      <div className="education-icon">{education.icon}</div>
      <div className="education-name">{education.name}</div>
    </div>
  );
}
