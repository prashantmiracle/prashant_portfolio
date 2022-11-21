import React from "react";
import { Seperator } from "../../common/seperator";
import { CertificatesData } from "../../data/certificates";
import CertificateCard from "./certificate-card";
import "./certificates.css";

export function Certificates() {
  const data = CertificatesData;
  return (
    <div className="certificates">
      <Seperator />
      <label className="section-title">Certificates</label>
      <div className="certificates-container">
        {data.map((item) => {
          return (
            <div className="certificates-section">
              <label className="certificates-section-title">
                {item.College}
                <br />
                <label className="certificates-section-title1">
                  {item.type}
                  <br />
                  {item.batch} <br />
                  {item.CGPA}
                </label>
              </label>

              <div className="certificates-list">
                {item.list.map((certificate) => {
                  return <CertificateCard certificate={certificate} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
