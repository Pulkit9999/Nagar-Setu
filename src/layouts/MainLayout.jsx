// MainLayout.jsx


import Footer from "../components/FooterSection";
import HeadingSection from "../components/HeadingSection";
import Navbar from "../components/NavBar";
import SubHeader from "../components/SubHeader";



const MainLayout = ({ children, showSessionTimer = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeadingSection showSessionTimer={showSessionTimer} />
      <SubHeader  showWelcome={showSessionTimer} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;