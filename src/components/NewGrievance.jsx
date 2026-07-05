import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";
import { FaArrowRight } from "react-icons/fa6";
import "../css/NewGrievance.css";
import { useNavigate } from "react-router-dom";
const NewGrievance = () => {
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
                Grievance terms and conditions
              </h2>

              <h3 className="new-grievance-subtitle">
                List of subjects/topics which can not be treated as grievance.
              </h3>

              <ul className="grievance-list">
                <li>RTI Matters</li>

                <li>Court related / Subjudice matters</li>

                <li>Religious matters</li>

                <li>
                  Grievances of Government employees concerning their service
                  matters including disciplinary proceedings etc. unless the
                  aggrieved employee has already exhausted the prescribed
                  channels .
                </li>
              </ul>

              <div className="grievance-note">
                Please use Lodge Pension Grievance option if your grievance is
                regarding pension issues pertaining to any ministry/department
                of Government of India.
              </div>

              <label className="undertaking-container">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />

                <span>
                  I agree that my grievance does not fall in any of the above
                  listed categories
                </span>
              </label>

              <div className="submit-btn-container">
                <button className="grievance-submit-btn" onClick={handleSubmit}>
                  Submit <FaArrowRight />
                </button>
              </div>
              <p className="grievance-note2">
                Note: Nagar Setu is a personal project created for learning and
                demonstration purposes only. It is not affiliated with any
                government department.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NewGrievance;
