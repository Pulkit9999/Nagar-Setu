import React from 'react'
import logo from "../assets/login-button.png";
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

      <button className="signin-btn">
        <span>↪</span>
        <span>Sign In</span>
      </button>
    </div>
  );
}

export default SubHeader
