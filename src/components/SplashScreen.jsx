import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/nagar-setu-logo.png";
import "../css/SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home-screen",{ replace:true });
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <img src={logo} alt="Nagar Setu" className="splash-logo" />

      <h1 className="splash-title">NAGAR SETU</h1>

      <p className="splash-para">आपकी समस्या, हमारी जिम्मेदारी</p>

      <b className="splash-disclaimer">
        This is a personal project created for demonstration and learning
        purposes only. It is not an official government or e-governance portal.
      </b>
    </div>
  );
};

export default SplashScreen;
