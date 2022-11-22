import React from "react";
import { Seperator } from "../../common/seperator";
import { MembershipsData } from "../../data/memberships";
import MembershipCard from "./membership-card";
import "./memberships.css";

export function Memberships() {
  const data = MembershipsData;
  return (
    <div className="memberships">
      <Seperator />
      <label className="section-title">Memberships</label>
      <div className="memberships-container">
        {data.map((item) => {
          return (
            <div className="memberships-section">
              <label className="memberships-section-title">
                {item.College}
                <br />
                <label className="memberships-section-title1">
                  {item.type}
                  <br />
                  {item.batch} <br />
                  {item.CGPA}
                  <br />
                  <a
                    href={item.Certificates}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download Certificate
                  </a>
                </label>
              </label>

              <div className="memberships-list">
                {item.list.map((membership) => {
                  return <MembershipCard membership={membership} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
