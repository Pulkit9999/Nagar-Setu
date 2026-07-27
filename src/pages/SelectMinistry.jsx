import React from "react";
import "../css/SelectMinistry.css";
import ministryData from "../data/ministryData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SelectMinistry = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
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
          {t("ministryDepartment")}
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
          {t("projectDisclaimer")}
        </p>
      </div>
    </div>
  );
};

export default SelectMinistry;
