import React from "react";
import "./membership-card.css";

export default function MembershipCard({ membership }) {
  return (
    <div className="membership-card">
      <div className="membership-icon">
        <img src={membership.icon} alt="" />
      </div>
      {/* <div className="education-name">{education.name}</div> */}
    </div>
  );
}
