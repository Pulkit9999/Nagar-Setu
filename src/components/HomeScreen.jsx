import React from 'react'
import NavBar from './NavBar'
import HeadingSection from './HeadingSection'
import SubHeader from './SubHeader'
import Footer from './FooterSection'
import "../css/HomeScreen.css"
const HomeScreen = () => {
  return (
    <div className="home-screen">
       <div className="home-content">
        <NavBar />
        <HeadingSection />
        <SubHeader />
      </div>
      <div className='footers'>
      <Footer />
      </div>
    </div>
  )
}

export default HomeScreen
