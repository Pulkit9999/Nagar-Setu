import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/UserDashboard.css";
import { Link } from "react-router-dom";
import logo from "../assets/samadhan-didi.png";
import { FaPlusCircle, FaUserEdit, FaKey, FaSignOutAlt } from "react-icons/fa";
import ComplaintCard from "./ComplaintCard";
import logo2 from "../assets/total_grievances_registered.png"
import logo3 from "../assets/pending_grievances.png"
import logo4 from "../assets/closed_grievances.png"
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
          <div className="dashboard-chatbot">
            <div className="chatbot-pic">
              <Link to="https://cpgramsaichatbot.com/">
                <img id="chatbot-logo" src={logo} alt="chatbot-pic" />
              </Link>
              <Link to="https://cpgramsaichatbot.com/">
                
                <p>Samadhan Didi</p>
              </Link>
            </div>

            <div className="speak-your-grievance">
              <Link to="https://cpgramsaichatbot.com/">
              
                <p>Speak Your Grievance</p>
              </Link>
              <Link to="https://cpgramsaichatbot.com/">
                
                <h1>AI Chatbot</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="grievances-details">
          <div className="complaints-cards">
            <ComplaintCard  complaintImage={logo2} complaintFooter="Total Grievances Registered" cardColor="bg-amber-500" />

            

             <ComplaintCard  complaintImage={logo3} complaintFooter="No. of Grievances Pending" cardColor="bg-green-600" />

              <ComplaintCard  complaintImage={logo4} complaintFooter="No. of Grievances Closed" cardColor="bg-red-600" />

          </div>
          <div className="grievances-table"></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
