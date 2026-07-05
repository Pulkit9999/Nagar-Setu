import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/UserDashboard.css";
import { Link } from "react-router-dom";
import ComplaintCard from "./ComplaintCard";
import logo2 from "../assets/total_grievances_registered.png";
import logo3 from "../assets/pending_grievances.png";
import logo4 from "../assets/closed_grievances.png";
import SideBar from "./SideBar";
const UserDashboard = () => {
  return (
    <MainLayout>
      <div className="main-dashboard-container">
       <SideBar />
        <div className="grievances-details">
          <div className="complaints-cards">
            <ComplaintCard
              complaintImage={logo2}
              complaintFooter="Total Grievances Registered"
              cardColor="bg-amber-500"
            />

            <ComplaintCard
              complaintImage={logo3}
              complaintFooter="No. of Grievances Pending"
              cardColor="bg-green-600"
            />

            <ComplaintCard
              complaintImage={logo4}
              complaintFooter="No. of Grievances Closed"
              cardColor="bg-red-600"
            />
          </div>
          <div className="grievances-table"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
