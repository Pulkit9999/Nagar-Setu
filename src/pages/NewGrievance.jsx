import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";
import { FaArrowRight } from "react-icons/fa6";
import "../css/NewGrievance.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewGrievance = () => {
  const {t} = useTranslation();
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!accepted) {
      alert("Please accept/select the undertaking statement.");
      return;
    }
     navigate("/new-grievance/organization");
  };

  return (
    <>
      <MainLayout>
        <div className="lodge-grievance-layout">
          <SideBar />
          <div className="new-grievance-page">
            <div className="new-grievance-card">
              <h2 className="new-grievance-title">
                {t("grievanceTerms")}
              </h2>

              <h3 className="new-grievance-subtitle">
                List of subjects/topics which can not be treated as grievance.
              </h3>

              <ul className="grievance-list">
                <li>{t("rtiMatters")}</li>

                <li>{t("courtMatters")}</li>

                <li>{t("religiousMatters")}</li>

                <li>
                  {t("serviceMattersDescription")}
                </li>
              </ul>

              <div className="grievance-note">
               {t("pensionGrievanceNote")}
              </div>

              <label className="undertaking-container">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />

                <span>
                 {t("agreementText")}
                </span>
              </label>

              <div className="submit-btn-container">
                <button className="grievance-submit-btn" onClick={handleSubmit}>
                  {t("submit")}<FaArrowRight />
                </button>
              </div>
              <p className="grievance-note2">
               {t("projectDisclaimer")}
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NewGrievance;
