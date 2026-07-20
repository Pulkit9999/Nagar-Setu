import React, { useState, useEffect } from "react";
import "../css/HeadingSection.css";
import logo from "../assets/nagar-setu-navbar.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const HeadingSection = ({ showSessionTimer = true }) => {

  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();


  // Check Firebase authentication status
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;

  }, []);



  // Session timer only for logged-in users
  useEffect(() => {

    if (!showSessionTimer || !user) return;


    const timer = setInterval(() => {

      setTimeLeft((prevTime) => {

        if (prevTime <= 1) {

          clearInterval(timer);

          signOut(auth);

          navigate("/login");

          return 0;
        }

        return prevTime - 1;

      });


    }, 1000);


    return () => clearInterval(timer);


  }, [user, navigate]);



  // Convert seconds into MM:SS format
  const formatTime = (seconds) => {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;


    return `${minutes
      .toString()
      .padStart(2, "0")
    }:${
      remainingSeconds
        .toString()
        .padStart(2, "0")
    }`;

  };


  return (
    <>
      <div className="heading-section">

        <img src={logo} alt="heading-logo" className="img-logo" />

        <div className="grievance-nagar-setu">

          <span className="text-color">
            NAGAR SETU
          </span>

          <h2 className="text-alignment">
            Centralized Public Grievance Redressal And Monitoring System
          </h2>

        </div>


        {/* Session Timer only visible after login */}
       {showSessionTimer && user && (
  <div className="session-box">

    <span className="session-icon">
      🕒
    </span>

    <span>
      Session :
    </span>

    <span className="session-time">
      {formatTime(timeLeft)}
    </span>

  </div>
)}


      </div>

      <div className="sub-header"></div>
    </>
  );
};

export default HeadingSection;