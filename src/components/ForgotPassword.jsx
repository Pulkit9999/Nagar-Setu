import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/ForgetPassword.css"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
 
  const handleSubmit = async (e) => {

  e.preventDefault();

  setError("");
  setSuccessMessage("");


  if (!email) {
    setError("Email is required");
    return;
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailPattern.test(email)) {
    setError("Please enter a valid email address");
    return;
  }


  try {

    await sendPasswordResetEmail(auth, email);


    setSuccessMessage(
      "Password reset link has been sent to your registered email."
    );


  } 
  catch (error) {

    console.log(error.message);


    if(error.code === "auth/user-not-found"){

      setError(
        "No account found with this email address."
      );

    }
    else{

      setError(
        "Unable to send password reset email. Please try again."
      );

    }

  }

};

  return (
    <MainLayout>

      <div className="forgot-password-container">

        <div className="forgot-password-card">

          <h2 className="forgot-password-heading">
            Forgot Password
          </h2>

          <p className="forgot-password-description">
            Enter your registered email address to reset your password.
          </p>


          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="email">
                Registered Email ID
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {
 error && (
   <p className="error-message">
      {error}
   </p>
 )
}

            </div>


            <button 
              type="submit"
              className="reset-password-btn"
            >
              Send Reset Link
            </button>

{
 successMessage && (
   <p className="success-message">
      {successMessage}
   </p>
 )
}
          </form>

        </div>

      </div>

    </MainLayout>
  );
};

export default ForgotPassword;