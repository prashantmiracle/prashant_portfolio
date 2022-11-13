import React from "react";
import SocialContact from "../../common/socialcontact";
import "./about.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          I love to fuse{" "}
          <span className="info-name">fashion and technology</span>
          <br />I build the future with technology.
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
