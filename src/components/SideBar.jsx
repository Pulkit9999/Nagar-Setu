
import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/samadhan-didi.png";
import "../css/SideBar.css"
import { FaPlusCircle, FaUserEdit, FaKey, FaSignOutAlt } from "react-icons/fa";
const SideBar = () => {
  return (
    <div>
       <div className="dashboard-sidebar">
          <h1 className="dashboard-heading">Grievance Dashboard</h1>
          <ul>
            <li className="list-items">
              <Link to="/new-grievance" className="grievance-items">
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
    </div>
  )
}

export default SideBar
