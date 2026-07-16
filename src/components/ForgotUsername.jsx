import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/ForgotUsername.css";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";

import { collection, query, where, getDocs } from "firebase/firestore";

import { auth, db } from "../utils/firebase";

const ForgotUsername = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const [otpSent, setOtpSent] = useState(false);

  const [loading, setLoading] = useState(false);

  const [confirmationResult, setConfirmationResult] = useState(null);

  const [otp, setOtp] = useState("");

  const [username, setUsername] = useState("");

  // Setup Recaptcha
  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) {
      return window.recaptchaVerifier;
    }

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",

        callback: () => {
          console.log("Recaptcha verified");
        },

        "expired-callback": () => {
          window.recaptchaVerifier = null;
        },
      },
    );

    return window.recaptchaVerifier;
  };

  // Send OTP

  const sendOTP = async () => {
    if (mobileNumber.length !== 10) {
      alert("Enter valid mobile number");

      return;
    }

    try {
      setLoading(true);
      if (!window.recaptchaVerifier) {
        setupRecaptcha();
      }

      const appVerifier = setupRecaptcha();

      const confirmation = await signInWithPhoneNumber(
        auth,
        `+91${mobileNumber}`,
        appVerifier,
      );

      setConfirmationResult(confirmation);

      setOtpSent(true);

      console.log("OTP Sent Successfully");
    } catch (error) {
      console.log(error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  // Cleanup
  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();

        window.recaptchaVerifier = null;
      }
    };
  }, []);

  // Verify OTP

  const verifyOTP = async () => {
    if (!otp) {
      alert("Enter OTP");

      return;
    }

    try {
      setLoading(true);

      // Verify Firebase OTP

      await confirmationResult.confirm(otp);

      // Search username from Firestore

      const q = query(
        collection(db, "users"),

        where("mobile", "==", mobileNumber),
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        alert("No account found with this mobile number");

        return;
      }

      const userData = snapshot.docs[0].data();

      setUsername(userData.email);

      alert("OTP Verified Successfully");

      // Logout temporary phone auth session

      await signOut(auth);
    } catch (error) {
      console.log(error);

      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="forgot-username-main-container">
        <h1 className="forgot-username-heading">
          Here , you can set your username. Remember this username as it will be
          used to log you in.
        </h1>

        <hr />

        {!otpSent ? (
          <>
            <div className="label-and-textfield">
              <label className="label-mobile">
                Enter Registered Mobile Number{" "}
                <span className="asterisk-mobile">*</span>
              </label>

              <input
                id="mobile-textfield"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                type="number"
                placeholder="Enter mobile no. provided at the time of registration"
              />
            </div>

            <div className="sb-btn">
              <button onClick={sendOTP} disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>

              <div id="recaptcha-container"></div>
            </div>
          </>
        ) : (
          <>
            <div className="label-and-textfield">
              <label className="label-mobile">Enter OTP</label>

              <input
                id="otp-textfield"
                value={otp}
                type="number"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
              />
            </div>

            <div className="sb-btn">
              <button onClick={verifyOTP} disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </>
        )}

        {username && (
          <div className="username-result">
            Your Email :
            <strong className="username-registered">{username}</strong>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ForgotUsername;
