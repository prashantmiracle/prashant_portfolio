import React from "react";
import "./certificate-card.css";

export default function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card">
      <div className="certificate-icon">
        <img src={certificate.icon} alt="" />
      </div>
      {/* <div className="education-name">{education.name}</div> */}
    </div>
  );
}
