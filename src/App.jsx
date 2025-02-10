import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ContactUs from './pages/Contact'
import Navbar from './components/Navbar'
import Workshops from './pages/Workshops'
import LoadingPage from './pages/LoadingPage'
import EventDetails from './pages/EventDetails'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path="/workshops" element={<Workshops />} />  
        <Route path='/workshops/:id' element={<EventDetails />} />
      </Routes>
      <ContactUs/>
      <Footer/>
    </Router>
    //<LoadingPage/>
  )
}

export default App
