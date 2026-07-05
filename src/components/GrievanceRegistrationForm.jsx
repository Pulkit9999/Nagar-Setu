import React from "react";
import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
const GrievanceRegistrationForm = () => {
  const { ministry } = useParams();
  const selectedMinistry = decodeURIComponent(ministry || "");
  console.log(selectedMinistry);
  return (
    <div>
      <MainLayout>
        <div className="lodge-grievance-layout">
        <SideBar />
        </div>
      </MainLayout>
    </div>
  );
};

export default GrievanceRegistrationForm;
