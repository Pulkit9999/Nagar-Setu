
import React from 'react'
import { Link , useNavigate} from "react-router-dom";
import logo from "../assets/samadhan-didi.png";
import { signOut } from "firebase/auth";
 import { auth } from "../utils/firebase";
import "../css/SideBar.css"
import { useTranslation } from "react-i18next";
import { FaPlusCircle, FaUserEdit, FaKey, FaSignOutAlt } from "react-icons/fa";
const SideBar = () => {
    const { t } = useTranslation();
  const changeLanguage = (language)=>{
  i18n.changeLanguage(language);
}
   const navigate = useNavigate();
    const handleSignOut = async () => {
    try {
      await signOut(auth);

      navigate("/login");

    } catch (error) {
      console.log("Sign out error:", error.message);
    }
  };


  return (
    <div>
       <div className="dashboard-sidebar">
          <h1 className="dashboard-heading">{t("grievanceDashboard")}</h1>
          <ul>
            <li className="list-items">
              <Link to="/new-grievance" className="grievance-items">
                <FaPlusCircle />
                {t("lodgePublicGrievance")}
              </Link>
            </li>
            <li className="list-items">
              <Link to="/edit-profile" className="grievance-items">
                <FaUserEdit />
                {t("editProfile")}
              </Link>
            </li>
            <li className="list-items">
              <Link to="/forgot-password" className="grievance-items">
                <FaUserEdit />
                {t("changePassword")}
              </Link>
            </li>
            <li className="list-items">
              <button 
              onClick={handleSignOut} 
              className="grievance-items"
            >
              <FaSignOutAlt />
              <span id="list-sign-out">{t("signOut")}</span>
            </button>
            </li>
            <li></li>
          </ul>
          <div className="dashboard-chatbot">
            <div className="chatbot-pic">
              <Link to="https://cpgramsaichatbot.com/">
                <img id="chatbot-logo" src={logo} alt="chatbot-pic" />
              </Link>
              <Link to="https://cpgramsaichatbot.com/">
                <p>{t("samadhanDidi")}</p>
              </Link>
            </div>

            <div className="speak-your-grievance">
              <Link to="https://cpgramsaichatbot.com/">
                <p>{t("speakGrievance")}</p>
              </Link>
              <Link to="https://cpgramsaichatbot.com/">
                <h1>{t("aiChatbot")}</h1>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SideBar
