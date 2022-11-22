import React from "react";
import { Seperator } from "../../common/seperator";
import { ActivitiesData } from "../../data/activities";
import ActivitieCard from "./activitie-card";
import "./activities.css";

export function Activities() {
  const data = ActivitiesData;
  return (
    <div className="activities">
      <Seperator />
      <label className="section-title">Extra-academic activities</label>
      <div className="activities-container">
        {data.map((item) => {
          return (
            <div className="activities-section">
              <label className="activities-section-title">{item.type}</label>
              <div className="activities-list">
                {item.list.map((activitie) => {
                  return <ActivitieCard activitie={activitie} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
