import React from "react";
import "../css/HeadingSection.css";
import logo from "../assets/logo-preamble.png";
const HeadingSection = () => {
  return (
    <>
      <div className="heading">
        <img src={logo} alt="heading-logo" className="img-logo" />
        <div className="grievance-nagar-setu">
          <span className="text-color">NAGAR  SETU</span>
          <h2 className="text-alignment">
            Centralized Public Grievance Redressal And Monitoring System{" "}
          </h2>
        </div>
      </div>

      <div className="sub-header"></div>
    </>
  );
};

export default HeadingSection;
