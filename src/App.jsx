import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import RegisterUser from "./pages/RegisterUser";
import HomeScreen from "./pages/HomeScreen";
import AboutUs from "./pages/AboutUsScreen";
import { Contact } from "lucide-react";
import ContactUs from "./pages/ContactUsScreen";
import FAQs from "./pages/FAQsScreen";
import DisclaimerSection from "./pages/Disclaimer";
import WebsitePolicies from "./pages/WebsitePolicies";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import UserDashboard from "./pages/UserDashboard";
import NewGrievance from "./pages/NewGrievance";
import SelectMinistryPage from "./pages/SelectMinistryPage";
import GrievanceRegistrationForm from "./components/GrievanceRegistrationForm";
import ReviewGrievance from "./pages/ReviewGrievance";

import ProtectedRoute from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoutes";
import ForgotUsername from "./pages/ForgotUsername";
import ForgotPassword from "./pages/ForgotPassword";
import EditProfile from "./pages/EditProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route
          path="/register-user"
          element={
            <PublicRoute>
              <RegisterUser />
            </PublicRoute>
          }
        />

        <Route
          path="/home-screen"
          element={
            <PublicRoute>
              <HomeScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/disclaimer" element={<DisclaimerSection />} />
        <Route path="/website-policies" element={<WebsitePolicies />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-grievance"
          element={
            <ProtectedRoute>
              <NewGrievance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-grievance/organization"
          element={
            <ProtectedRoute>
              <SelectMinistryPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-grievance/organization/grievance-registration-form/:ministry?"
          element={
            <ProtectedRoute>
              <GrievanceRegistrationForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-grievance/review-grievance"
          element={
            <ProtectedRoute>
              <ReviewGrievance />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-username" element={<ForgotUsername />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <ToastContainer position="bottom-center" autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
