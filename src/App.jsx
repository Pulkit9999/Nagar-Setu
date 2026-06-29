import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import RegisterUser from "./components/RegisterUser";
import HomeScreen from "./components/HomeScreen";
import AboutUs from "./components/AboutUsScreen";
import { Contact } from "lucide-react";
import ContactUs from "./components/ContactUsScreen";
import FAQs from "./components/FAQsScreen";
import DisclaimerSection from "./components/Disclaimer";
import WebsitePolicies from "./components/WebsitePolicies";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/home-screen" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/disclaimer" element={<DisclaimerSection />} />
        <Route path="/website-policies" element={<WebsitePolicies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard/>} />
        </Routes>
        <ToastContainer position="bottom-center" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
