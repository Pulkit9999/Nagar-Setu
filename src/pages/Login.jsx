import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaSpinner,
} from "react-icons/fa";
import "../css/Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoginError(""); // Clear previous error
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      const user = userCredential.user;
      if (user) {
        const justRegistered = sessionStorage.getItem("justRegistered");

        if (justRegistered) {
          sessionStorage.removeItem("justRegistered");
          return;
        }

        navigate("/user-dashboard");
      }
      // setTimeout(() => {
      //   navigate("/user-dashboard", { replace: true });
      // }, 3000);
    } catch (error) {
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setLoginError("Invalid Login Credentials . ");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout showSessionTimer={false}>
      <div className="login-page">
        <div className="login-card">
          <h2 className="login-title">{t("login")}</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>{t("selectPreferredLanguage")}:</label>

              <select className="input-field" {...register("language")}>
                <option value="English">{t("English")}</option>
                <option value="Hindi">{t("Hindi")}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t("emailId")}</label>

              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="input-field"
                  {...register("email", {
                    required: "Enter Email Id",
                  })}
                />

                <span className="input-icon">
                  <FaUser />
                </span>
              </div>

              {errors.email && (
                <p className="error-text">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label>{t("password")}</label>

              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input-field"
                  {...register("password", {
                    required: "Enter Password",
                  })}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errors.password && (
                <p className="error-text">{errors.password.message}</p>
              )}
            </div>

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <FaSpinner className="spinner-icon" />
                  {t("pleaseWait")}
                </>
              ) : (
                <>
                  {t("login")} <FaSignInAlt />
                </>
              )}
            </button>
            {loginError && <p className="loginErrorMessage">{loginError}</p>}
          </form>

          <div className="login-links">
            <Link to="/forgot-username">{t("forgotEmail")}</Link>
            <Link to="/forgot-password">{t("forgotPassword")}</Link>
          </div>

          <div className="signup-wrapper">
            <Link to="/register-user">{t("clickHereToSignUp")}</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
