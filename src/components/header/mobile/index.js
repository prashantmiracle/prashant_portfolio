import React from "react";
import "./mobile.css";
export function Mobile({ isOpen, setIsopen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsopen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fi fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <i class="fi fi-rr-briefcase option-icon"></i> Work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-headset option-icon"></i> Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default Mobile;
