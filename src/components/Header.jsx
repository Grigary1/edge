import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (sectionId) => {
    console.log(`Attempting to scroll to section with id: ${sectionId}`);

    try {
      const section = document.getElementById(sectionId);
      console.log("section",section)
      if (section) {
        console.log(`Found section: ${sectionId}, scrolling to it...`);
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Error: Section with id "${sectionId}" not found!`);
      }
    } catch (error) {
      console.error("An error occurred during scroll:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"} bg-red-700`}>
      <div className="logo">
        <a href="#home">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <button>
          <a href="/">Home</a>
        </button>
        <button onClick={()=>handleScroll("about-edge")}>
          <a href="#about">About</a>
        </button>
        <button>
          <a href="#schedule">Schedule</a>
        </button>
        <button onClick={()=>handleScroll("events-section")}>
          <a href="#events">Events</a>
        </button>
        <button onClick={()=>handleScroll("contact")}>
          <a href="#contact">Contact</a>
        </button>
      </ul>
      <div className="nav-button">
        <a href="#register" className="btn">
          REGISTER
        </a>
      </div>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="#eee"
          strokeWidth=".6"
          fill="rgba(0,0,0,0)"
          strokeLinecap="round"
          style={{ cursor: "pointer" }}
        >
          <path
            d={
              isMenuOpen
                ? "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                : "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
            }
          />
        </svg>
      </button>
    </nav>
  );
};

export default Header;
