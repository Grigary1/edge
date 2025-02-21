import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/Contact";
import Navbar from "./components/Navbar";
import Workshops from "./pages/Workshops";
import EventDetails from "./pages/EventDetails";
import Footer from "./components/Footer";
import Hackathon from "./pages/Hackathon";
import PreventsNew from "./pages/PreventsNew";
import Loader from "./components/Loader";
import PreEventDetails from "./pages/PreEventDetails";
import Schedule from "./components/Schedule";
import WorkshopNew from "./pages/WorkshopNew";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/workshops" element={<WorkshopNew />} />
        <Route path="/workshops/:id" element={<EventDetails />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/prevents" element={<PreventsNew />} />
        <Route path="/prevents/:id" element={<PreEventDetails />} />
      </Routes>


      {!location.pathname.startsWith("/workshops") && !location.pathname.startsWith("/prevents") && <ContactUs />}
      {!location.pathname.startsWith("/workshops") && !location.pathname.startsWith("/prevents") && <Footer />}
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen bg-black">
      <Loader />
    </div>
  ) : (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
