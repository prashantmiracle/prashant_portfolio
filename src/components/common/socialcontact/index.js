import React from "react";
import { SocialData } from "../../data/social";
import "./socialcontact.css";

export default function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}
