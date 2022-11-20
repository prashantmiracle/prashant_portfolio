import React from "react";
import SocialContact from "../../common/socialcontact";
import "./about.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          A <span className="info-name">fashion technologist </span> with having
          an expertise in managing various functions like category
          management,sourcing,vendor management,data analysis,garment
          assessment,ERP implementation,industrial safety, production
          control,and process management.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt="profilepics"
          />
        </div>
      </div>
      {/* <div className="about-bottom"></div> */}
      <SocialContact />
    </div>
  );
}
