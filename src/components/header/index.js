import React, { useState } from "react";
import "./header.css";
import "./mobile/index";
import "./web/index";

export function Header() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo"> Prashant Kumar </div>
      <div className="menu">
        <div className="web-menu">
          <web />
        </div>
        <div className="mobile-menu">
          <i class="fi fi-rr-apps"></i>
        </div>
        {isOpen && <mobile />}
      </div>
    </div>
  );
}
export default Header;
