import React, { useEffect, useLayoutEffect } from 'react'
import Header from '../components/Header'
import '../styles/global.css'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Events from '../components/Events'
import TestimonialsPage from '../components/Testimonials'
import Footer from '../components/Footer'
import ContactUs from './Contact'
import Timer from '../components/Timer'

const LandingPage = () => {
  useEffect(() => {
  const delay = setTimeout(() => {
    const section = document.getElementById("events-section");
    console.log(section); // Should now log the correct element
  }, 3000); // Adjust the delay if necessary

  return () => clearTimeout(delay); // Cleanup the timeout
}, []);

  return (
    <>
    {/* <Header/> */}
    <HeroSection/>
    <About/>
    <Stats/>
    <Events id="events-section"/>
    <TestimonialsPage/>

    </>
  )
}

export default LandingPage
