import React, { useEffect, useState, useRef } from 'react';
import Logo from '../assets/logo.png';
import Overlay from '../assets/bgvideo.mp4';
import Timer from './Timer';

const HeroSection = () => {
  const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen;
  };

  const [height, setHeight] = useState(window.innerHeight);
  const imageRef = useRef(null);
  const maxAngle = 15;

  const handleScroll = (sectionId) => {
    console.log(`Attempting to scroll to section with id: ${sectionId}`);
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Error: Section with id "${sectionId}" not found!`);
      }
    } catch (error) {
      console.error("An error occurred during scroll:", error);
    }
  };

  // useEffect(() => {
  //   const updateHeight = () => {
  //     setHeight(window.innerHeight);
  //   };
  //   window.addEventListener("resize", updateHeight);

  //   // Global mouse move listener for image rotation
  //   const handleMouseMoveGlobal = (e) => {
  //     if (!imageRef.current) return;
  //     const rect = imageRef.current.getBoundingClientRect();
  //     const centerX = rect.left + rect.width / 2;
  //     const deltaX = e.clientX - centerX;
  //     const rotationAngle = Math.max(-maxAngle, Math.min(maxAngle, (deltaX / rect.width) * maxAngle * 4));
  //     imageRef.current.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
  //   };

  //   document.addEventListener("mousemove", handleMouseMoveGlobal);
  //   return () => {
  //     window.removeEventListener("resize", updateHeight);
  //     document.removeEventListener("mousemove", handleMouseMoveGlobal);
  //   };
  // }, []);

  let checkScreen = useScreenSize();
  console.log("Screen", checkScreen);

  return checkScreen ? (
    <div
      className="relative md:h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4"
      style={{ height: `${height - 90}px` }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src={Overlay} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="flex flex-col relative z-20 text-center text-white px-4 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-text-glow break-words">
          ACM STUDENT CHAPTER FISAT
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-0 text-purple-200 animate-fade-in">
          PRESENTS
        </h2>

        <div className="flex items-center mb-36">
          <div className="w-[400px] sm:w-40 md:w-56 h-[100px] transform transition-transform duration-500">
            <img
              src={Logo}
              alt="Logo"
              className="rounded-lg w-[400px] border-purple-500 "
            />
          </div>
        </div>

        <p className="text-lg sm:text-sm md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 font-light text-purple-100 animate-typing overflow-hidden border-r-2 border-purple-500">
          Get ready to ignite your passion for technology at ACM STUDENT CHAPTER FISAT's flagship inter-college event on{' '}
          <span className="font-bold text-purple-300">28th February, 1st March 2025</span>.
        </p>
        <button onClick={() => handleScroll("events-section")} className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 group text-xs sm:text-sm md:text-base">
          <span className="relative z-10 text-2xl sm:text-3xl">Register Now</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </div>
    </div>
  ) : (
    <div>
      {/* Main Container */}
      <div
        className="relative md:h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4"
        style={{ height: `${height - 80}px` }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src={Overlay} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-4">
          {/* Div 1: Left Section */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 flex flex-col items-start mb-8 md:mb-0">
            <h1 className="text-left text-3xl sm:text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-text-glow break-words">
              ACM STUDENT CHAPTER<br /> FISAT
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-6 text-purple-200 animate-fade-in">
              PRESENTS
            </h2>
            <p className="text-left text-base sm:text-sm md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-6 font-light text-purple-100 animate-typing overflow-hidden border-r-2 border-purple-500">
              Get ready to ignite your passion for technology at ACM STUDENT CHAPTER FISAT's flagship inter-college event on{' '}
              <span className="font-bold text-purple-300">28th February, 1st March 2025</span>.
            </p>
            <button
              onClick={() => handleScroll("events-section")}
              className="relative inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 group text-xs sm:text-sm md:text-base"
            >
              <span className="relative z-10 text-xl sm:text-2xl md:text-3xl">Register Now</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>

          {/* Div 2: Right Section */}
          <div>
            <div className="w-[400px] md:w-[700px] h-full pl-0 md:pl-4 flex justify-center md:justify-end">
              <div className="w-[400px] sm:w-[700rem] md:w-[700rem] h-full transition-transform duration-300">
                {/* Adjusted logo size for larger screens */}
                <img
                  src={Logo}
                  alt="Logo"
                  className="rounded-lg w-[700px] border-purple-500 "
                />
              </div>
            </div>

            {/* Add margin to move the Timer further down */}
7 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;