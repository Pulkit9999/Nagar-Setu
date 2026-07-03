import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/UserDashboard.css";
import { Link } from "react-router-dom";
import { FaPlusCircle ,  FaUserEdit , FaKey , FaSignOutAlt} from "react-icons/fa";
const UserDashboard = () => {
  return (
    <MainLayout>
      <div className="main-dashboard-container">
        <div className="dashboard-sidebar">
          <h1 className="dashboard-heading">Grievance Dashboard</h1>
          <ul>
            <li className="list-items">
              <Link to="" className="grievance-items">
                
                <FaPlusCircle />
                Lodge Public Grievance
              </Link>
            </li>
            <li className="list-items">
              <Link to="" className="grievance-items">
                 <FaUserEdit />
                Edit Profile
              </Link>
            </li>
            <li className="list-items">
              <Link to="" className="grievance-items">
                <FaUserEdit />
                Change Password
              </Link>
            </li>
            <li className="list-items">
              <Link to="" className="grievance-items">
                <FaSignOutAlt />
                <span id="list-sign-out">Sign Out</span>
              </Link>
            </li>
            <li></li>
          </ul>
          <div className="chatbot">
            hello
          </div>
        </div>
        <div className="grievances-details">
          <div className="compaints-cards"></div>
          <div className="grievances-table"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
