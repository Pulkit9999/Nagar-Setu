// MainLayout.jsx


import Footer from "../components/FooterSection";
import HeadingSection from "../components/HeadingSection";
import Navbar from "../components/NavBar";
import SubHeader from "../components/SubHeader";



const MainLayout = ({ children }) => {
  return (
    <>
     <Navbar />
     <HeadingSection />
     <SubHeader />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;