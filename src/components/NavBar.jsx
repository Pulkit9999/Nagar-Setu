import "../css/Navbar.css";
import { House, Phone, Info, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
const Navbar = () => {

const { t } = useTranslation();
  return (
    <nav className="gov-navbar">
      <div className="gov-navbar__left">
        <div className="gov-navbar__india">
          <span>भारत सरकार</span>
          <span>Government of India</span>
        </div>

        <div className="gov-navbar__divider" />

        <div className="gov-navbar__ministry">
          <span>एबीसी मंत्रालय </span>
          <span> ABC Department (Being just a demo project)</span>
        </div>
      </div>

      <div className="gov-navbar__right" >
        <Link to="/about-us" className="nav-link">
          <Info size={14} />
          <span>{t("aboutUs")}</span>
        </Link>

        <Link to="/contact-us" className="nav-link">
        <Phone size={14} />
        <span>{t("contactUs")}</span>
        </Link>

        <Link to="/faqs" className="nav-link">
          <CircleHelp size={14} />
          <span>{t("faqsHelp")}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
