import React from "react";
import logo from "../assets/login-button.png";
import { Link } from "react-router-dom";

import "../css/SubHeader.css";
const SubHeader = () => {
  return (
    <div className="topbar-right">
      <span className="language-label">Language :</span>

      <select className="language-dropdown">
        <option>English</option>
        <option>हिन्दी</option>
        <option>Punjabi</option>
        <option>বাংলা</option>
      </select>

      <Link to="/login" className="signin-btn">
        <span>↪</span>
        <span>Sign In</span>
      </Link>
    </div>
  );
};

export default SubHeader;
