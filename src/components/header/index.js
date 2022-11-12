import React from "react";
import "./header.css";

export function Header(props) {
  return (
    <div className="header">
      <div className="logo"> Prashant Kumar </div>
      <div className="menu">
        <div className="web-menu">
          <web />
        </div>
        <div className="mobile-menu">
          <mobile />
        </div>
      </div>
    </div>
  );
}
export default Header;
