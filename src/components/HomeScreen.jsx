import React from "react";
import MainLayout from "../layouts/MainLayout";
import "../css/HomeScreen.css";
import banner from "../assets/nagar-setu-banner-ok.webp";
const HomeScreen = () => {
  return (
    <MainLayout showSessionTimer={false}>
      <img src={banner} className="banner-image" alt="Nagar Setu Banner" />
    </MainLayout>
  );
};

export default HomeScreen;
