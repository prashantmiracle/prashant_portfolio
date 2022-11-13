import React, { useState } from "react";
import "./header.css";
import Mobile from "../header/mobile/index";
import Web from "../header/web";

export function Header() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="header">
      <div className="logo"> PRASHANT KUMAR </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsopen(!isOpen)}>
            <i class="fi fi-rr-apps" menu-icon></i>
          </div>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsopen={setIsopen} />}
      </div>
    </div>
  );
}
export default Header;
