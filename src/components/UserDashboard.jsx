import React, { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import "../css/UserDashboard.css";

import ComplaintCard from "./ComplaintCard";

import GrievanceTable from "./GrievanceTable";

import logo2 from "../assets/total_grievances_registered.png";
import logo3 from "../assets/pending_grievances.png";
import logo4 from "../assets/closed_grievances.png";
import SideBar from "./SideBar";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { useTranslation } from "react-i18next";
const UserDashboard = () => {
  const {t}  = useTranslation();
  const [grievances, setGrievances] = useState([]);

  const [totalGrievances, setTotalGrievances] = useState(0);

  const [openGrievances, setOpenGrievances] = useState(0);

  const [closedGrievances, setClosedGrievances] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const grievanceRef = collection(db, "grievances");

          const q = query(
            grievanceRef,

            where("userId", "==", user.uid),
          );

          const snapshot = await getDocs(q);

          const grievanceData = snapshot.docs.map((doc) => ({
            id: doc.id,

            ...doc.data(),
          }));

          setGrievances(grievanceData);

          let total = grievanceData.length;

          let open = 0;

          let closed = 0;

          grievanceData.forEach((grievance) => {
            if (grievance.status === "Under Process") {
              open++;
            }

            if (grievance.status === "Closed") {
              closed++;
            }
          });

          setTotalGrievances(total);

          setOpenGrievances(open);

          setClosedGrievances(closed);
        } catch (error) {
          console.log("Error fetching grievances:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <MainLayout>
      <div className="main-dashboard-container">
        <SideBar />

        <div className="grievances-details">
          <div className="complaints-cards">
            <ComplaintCard
              complaintImage={logo2}
              complaintFooter={t("totalGrievancesRegistered")}
              cardColor="bg-amber-500"
              complaintsCount={totalGrievances}
            />

            <ComplaintCard
              complaintImage={logo3}
              complaintFooter={t("pendingGrievances")}
              cardColor="bg-green-600"
              complaintsCount={openGrievances}
            />

            <ComplaintCard
              complaintImage={logo4}
              complaintFooter={t("closedGrievances")}
              cardColor="bg-red-600"
              complaintsCount={closedGrievances}
            />
          </div>

          <div className="grievances-table">
            <GrievanceTable grievances={grievances} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserDashboard;
