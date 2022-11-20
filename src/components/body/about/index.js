import React from "react";
import SocialContact from "../../common/socialcontact";
import "./about.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-name">Prashant Kumar</span> loves to fuse
          fashion and technology. <br /> He is an expert in the fashion tech
          domain. He loves to be around creative people and loves to hear their
          stories & dreams.
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
