import React from "react";
import { ProjectData } from "../../data/projects";
import { ProjectCard } from "./project-card";
import "./projects.css";
export function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}
