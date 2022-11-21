import React from "react";
import "./skill-card.css";

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img src={skill.icon} alt="" />
      </div>

      <div className="skill-name">{skill.name}</div>
    </div>
  );
}
