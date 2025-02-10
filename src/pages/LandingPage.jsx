import React from 'react'
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

const LandingPage = () => {
  return (
    <>
    {/* <Header/> */}
    <HeroSection/>
    <About/>
    <Stats/>
    <Events/>
    <TestimonialsPage/>
    <ContactUs/>
    </>
  )
}

export default LandingPage
