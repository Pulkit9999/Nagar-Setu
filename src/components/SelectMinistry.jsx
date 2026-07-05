import React from "react";
import "../css/SelectMinistry.css";
import ministryData from "../data/ministryData";
import { useNavigate } from "react-router-dom";
const SelectMinistry = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    // navigate to next page with URL param
    navigate(
      `/new-grievance/organization/grievance-registration-form/${encodeURIComponent(
        item.title,
      )}`,
    );
  };
  return (
    <div className="select-ministry-page">
      <div className="select-ministry-card">
        <h2 className="select-ministry-heading">
          Please select a Ministry/Department/State Government
        </h2>

        <div className="ministry-grid">
          {ministryData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="ministry-item"
                key={item.id}
                onClick={() => handleClick(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="ministry-image-container">
                  <Icon className="ministry-icon" />
                </div>

                <div className="ministry-footer">
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="grievance-note2">
          Note: Nagar Setu is a personal project created for learning and
          demonstration purposes only. It is not affiliated with any government
          department.
        </p>
      </div>
    </div>
  );
};

export default SelectMinistry;
