import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import "../css/SubHeader.css";
const SubHeader = ({ showWelcome = true }) => {
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
      <span className="language-label">Language :</span>

      <select className="language-dropdown">
        <option>English</option>
        <option>हिन्दी</option>
      </select>

      {showWelcome && username ? (
        <span className="welcome-user">Welcome : {username}</span>
      ) : (
        <Link to="/login" className="signin-btn">
          <span>↪</span>
          <span>Sign In</span>
        </Link>
      )}
    </div>
  );
};

export default SubHeader;
