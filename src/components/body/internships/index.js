import React from "react";
import { Seperator } from "../../common/seperator";
import { InternshipsData } from "../../data/internships";
import InternshipCard from "./internship-card";
import "./internships.css";

export function Internships() {
  const data = InternshipsData;
  return (
    <div className="internships">
      <Seperator />
      <label className="section-title">Internships</label>
      <div className="internships-container">
        {data.map((item) => {
          return (
            <div className="internships-section">
              <label className="internships-section-title">{item.type}</label>
              <div className="internships-list">
                {item.list.map((internship) => {
                  return <InternshipCard internship={internship} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
