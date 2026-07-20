import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import "../css/SubHeader.css";
import { useTranslation } from "react-i18next";
import i18n from "../localizations/i18n";
const SubHeader = ({ showWelcome = true }) => {
  const { t } = useTranslation();
  const changeLanguage = (language)=>{
  i18n.changeLanguage(language);
}
  const [username, setUsername] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUsername(userSnap.data().name);
        }
      } else {
        setUsername(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="topbar-right">
      <span className="language-label">{t("language")} :</span>

      <select className="language-dropdown"  onChange={(e)=>changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>

      {showWelcome && username ? (
        <span className="welcome-user">{t("welcome")} : {username}</span>
      ) : (
        <Link to="/login" className="signin-btn">
          <span>↪</span>
          <span>{t("signIn")}</span>
        </Link>
      )}
    </div>
  );
};

export default SubHeader;
