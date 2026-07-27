import React from "react";
import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";
import "../css/ReviewGrievance.css";
import { FaSave } from "react-icons/fa";
import { addDoc, collection, Timestamp, getDoc, doc } from "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { generateRegistrationNumber } from "../data/generateRegistrationNumber";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const ReviewGrievance = () => {
  const {t} = useTranslation();
  const location = useLocation();
  const grievanceData = location.state;
  const navigate = useNavigate();

  const handleSubmitGrievance = async () => {
    try {
      const user = auth.currentUser;
    
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : {};
      const registrationNumber = generateRegistrationNumber();
      const grievanceToSave = {
        registrationNumber: registrationNumber,

        userId: user.uid,

        userName: userData.name || "",

        userEmail: user.email || "",

        ministry: grievanceData.ministry,

        mainCategory: grievanceData.mainCategory,

        levelOneCategory: grievanceData.levelOneCategory,

        levelTwoCategory: grievanceData.levelTwoCategory,

        remarks: grievanceData.remarks,

        additionalDetails:{
    
    ...Object.fromEntries(
      Object.entries(grievanceData)
      .filter(([key]) => 
        ![
          "ministry",
          "mainCategory",
          "levelOneCategory",
          "levelTwoCategory",
          "remarks"
        ].includes(key)
      )
    )

  },

        status: "Under Process",

        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "grievances"), grievanceToSave);

      alert(t(`${t("grievanceSubmittedSuccessfully")}  Registration Number : ${registrationNumber}` ));
      navigate("/user-dashboard");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };
  return (
    <MainLayout>
      <div className="review-page">
        <div className="lodge-grievance-layout">
          <SideBar />
          <div className="review-card">
            <h2 className="review-title">{t("enterGrievanceDetails")}</h2>

            <div className="review-section">
              <h3 className="review-label">{t("informationProvided")}:</h3>

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
              <h3 className="review-label">{t("grievanceDescriptionOnReviewPage")}:</h3>

              <div className="description-box">{grievanceData?.remarks}</div>
            </div>

            <div className="submit-wrapper">
              <button className="submit-button" onClick={handleSubmitGrievance}>
                {" "}
                <FaSave /> <p>{t("submitGrievance")}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReviewGrievance;
