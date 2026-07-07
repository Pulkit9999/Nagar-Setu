import React from "react";
import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";
import "../css/ReviewGrievance.css";
import { FaSave } from "react-icons/fa";
const ReviewGrievance = () => {
  const location = useLocation();
  const grievanceData = location.state;
  console.log(grievanceData);
  return (
    <MainLayout>
      <div className="review-page">
          <div className="lodge-grievance-layout">
        <SideBar />
        <div className="review-card">
          <h2 className="review-title">Review Grievance</h2>

          <div className="review-section">
            <h3 className="review-label">Information Provided :</h3>

            <div className="grievance-path">
              <span className="path-item">{grievanceData?.ministry}</span>

              <span className="path-arrow">»</span>

              <span className="path-item">{grievanceData?.mainCategory}</span>

              <span className="path-arrow">»</span>

              <span className="path-item">
                {grievanceData?.levelOneCategory}
              </span>

              <span className="path-arrow">»</span>

              <span className="path-item">
                {grievanceData?.levelTwoCategory}
              </span>
            </div>
          </div>

          <div className="review-section">
            <h3 className="review-label">Grievance Description :</h3>

            <div className="description-box">{grievanceData?.remarks}</div>
          </div>

          <div className="submit-wrapper">
            <button className="submit-button">  <FaSave /> <p>Submit Grievance</p></button>
          </div>
        </div>
      </div>
      </div>
    </MainLayout>
  );
};

export default ReviewGrievance;
