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
          M : +91 870-941-4925
          <br />
          E: getprashant@yahoo.com
          <p>Connect me on any of the platform </p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            href={require("../../../assets/prashant_aayushmaa.pdf")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fi-rr-cloud-download download-icon" />
            Download Resume
          </a>
        </div>
        <div className="download1">
          <a
            href={require("../../../assets/images/SOP.pdf")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fi-rr-cloud-download download-icon" />
            Download SOP
          </a>
        </div>
      </div>
    </div>
  );
}
