import React from "react";
import { Seperator } from "../../common/seperator";
import { EducationsData } from "../../data/educations";
import EducationCard from "./education-card";
import "./educations.css";

export function Educations() {
  const data = EducationsData;
  return (
    <div className="educations">
      <Seperator />
      <label className="section-title">Education</label>
      <div className="educations-container">
        {data.map((item) => {
          return (
            <div className="educations-section">
              <label className="educations-section-title">
                {item.type} <br />
                <label className="educations-section-title1">
                  {item.batch} <br />
                  {item.CGPA}
                </label>
              </label>

              <div className="educations-list">
                {item.list.map((education) => {
                  return <EducationCard education={education} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
