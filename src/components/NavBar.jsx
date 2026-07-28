import "../css/Navbar.css";
import { House, Phone, Info, CircleHelp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="gov-navbar">
      <div className="gov-navbar__left">
        <div className="gov-navbar__india">
          <span className="gov-navbar__india-primary">भारत सरकार</span>
          <span className="gov-navbar__india-secondary">Government of India</span>
        </div>

        <div className="gov-navbar__divider" />

        <div className="gov-navbar__ministry">
          <span className="gov-navbar__ministry-primary">एबीसी मंत्रालय</span>
          <span className="gov-navbar__ministry-secondary">ABC Department (Demo)</span>
        </div>
      </div>

      <div className="gov-navbar__right">
        <Link to="/about-us" className="nav-link" title={t("aboutUs")}>
          <Info size={15} />
          <span className="nav-link-text">{t("aboutUs")}</span>
        </Link>

        <Link to="/contact-us" className="nav-link" title={t("contactUs")}>
          <Phone size={15} />
          <span className="nav-link-text">{t("contactUs")}</span>
        </Link>

        <Link to="/faqs" className="nav-link" title={t("faqsHelp")}>
          <CircleHelp size={15} />
          <span className="nav-link-text">{t("faqsHelp")}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;