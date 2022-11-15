import React from "react";
import { Seperator } from "../../common/seperator";
import SocialContact from "../../common/socialcontact";
import "./contact.css";
export function Contact(props) {
  return (
    <div className="contact">
      {" "}
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Connect me on any of the platform </p>

          <SocialContact />
        </div>
        <div className="download">
          <a href={require("../../../assets/prashant_aayushmaa.pdf")}>
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
