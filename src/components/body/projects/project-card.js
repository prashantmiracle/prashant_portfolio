import React from "react";
import "./project-card.css";

export function ProjectCard(project) {
  return (
    <div className="project-card">
      <div className="project-info"></div>

      <img src={project.image} className="project-photo" alt="" />
    </div>
  );
}
