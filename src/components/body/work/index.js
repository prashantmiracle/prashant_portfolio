import React from "react";
import { Seperator } from "../../common/seperator";
import { WorkData } from "../../data/work";
import { WorkCard } from "./work-card";
import "./work.css";

export function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Work Experience</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}
