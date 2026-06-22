import React from "react";
import "../css/FooterSection.css";
import nic from "../assets/nic.svg";
import makeIndia from "../assets/make-in-india-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-para">
        <p>
          Portal is Compatible with all major Browsers like Google Chrome,
          Mozilla Firefox, Microsoft Edge, Safari etc.
        </p>
        <p>Best Viewed in 1440 x 900 resolution</p>
      </div>

      <div className="footer-links">
        <a
          href="https://www.makeinindia.com"
          target="_blank"
          className="make-in-india-logo"
        >
          <img src={makeIndia} alt="Make in India" />
        </a>
        <a
          href="https://www.nic.in"
          target="_blank"
          rel="noopener noreferrer"
          className="nic-logo"
        >
          <img src={nic} alt="National Informatics Center" />
        </a>
      </div>

      <div className="disclaimer">
       <b> <Link to="/disclaimer" className="footer-link">Disclaimer</Link></b>
       <div className="divider"></div>
      
        <b> <Link to="/website-policies" className="footer-link">Website Policies</Link></b>
      </div>
    </div>
  );
};

export default Footer;
