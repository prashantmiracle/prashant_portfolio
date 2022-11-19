import React from "react";
import SocialContact from "../../common/socialcontact";
import "./about.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          I love to fuse{" "}
          <span className="info-name">A fashion technologist</span>
          <br /> who has worked across the globe in fashion and e-commerce
          industries and roles. Currently employed in a variety of roles in
          retail strategy management and business planning. 
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
