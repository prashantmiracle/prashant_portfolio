import React from "react";
import "./activitie-card.css";

export default function ActivitieCard({ activitie }) {
  return (
    <div className="activitie-card">
      <div className="activitie-icon">
        <img src={activitie.icon} alt="" />
      </div>
      <div className="activitie-name">{activitie.name}</div>
    </div>
  );
}
