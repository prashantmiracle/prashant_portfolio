import React from "react";
import SocialContact from "../../common/socialcontact";
import "./about.css";

export function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-name">Prashant Kumar</span> has worked in the
          fashion industry for over 7 years, and his experience includes
          positions in Strategy management,Operations and merchandising. He has
          also consulted for startups and small businesses, helping them to
          develop and implement strategies for growth and expansion.
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
