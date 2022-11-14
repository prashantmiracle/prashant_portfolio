import React from "react";
import { Seperator } from "../../common/seperator";
import { ProjectData } from "../../data/projects";
import { ProjectCard } from "./project-card";
import "./projects.css";
export function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      {data.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
}
