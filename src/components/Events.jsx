import React, { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import './global.css'

const CardAnimations = () => {
  const navigate = useNavigate();
  const [splitDelayTransition, setSplitDelayTransition] = useState(false);
  const [splitDelayTransition1, setSplitDelayTransition1] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1700) {
        setSplitDelayTransition(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen;
  };

  const handleCard1TransitionEnd = () => {
    setSplitDelayTransition1(true);
  };
  let checkScreen = useScreenSize();  
  return checkScreen?(

    <div id="events-section" className="min-h-fit bg-[hsl(0,0%,4%)] font-sans flex flex-col items-center pt-7 leading-relaxed">
      {/* Image */}
      {/* <img
        className="h-48 mx-auto mb-8"
        src={images.cartoon}
        alt="Cartoon"
      /> */}
      <p id="shadow" className="h-48 mx-auto mb-8">
        <span className="h-48 mx-auto mb-8" id="glow">REGIS</span><span id="blink">TER</span>
    </p>
      {/* Cards Section */}
      <section className="w-full px-4 overflow-x-auto hide-scrollbar">
        <ul className="flex space-x-4">
          {/* Card 1 */}
          <li
            onClick={() => navigate("/hackathon")}
            className="relative w-64 h-full bg-white rounded-3xl shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={images.hackathon}
              alt="Card 1"
              className="w-full h-full object-cover rounded-t-lg -z-10"
            />
            <div className="p-4 bg-yellow-600 rounded-b-lg">
              <p className="text-sm font-semibold text-white">Register Now </p>
              <p className="text-xs text-white">Prize Pool: $1000</p>
              <p className="text-xs text-white">Date: Nov 15, 2023</p>
            </div>
          </li>

          {/* Card 2 */}
          <li
            onClick={() => navigate("/workshops")}
            className="relative w-64 h-full bg-white rounded-lg shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={images.proshow}
              alt="Card 1"
              className="w-full h-full object-cover rounded-t-lg -z-10"
            />
            <div className="p-4 bg-yellow-600 rounded-b-lg">
              <p className="text-sm font-semibold text-white">Register Now</p>
              <p className="text-xs text-white">Prize Pool: $1000</p>
              <p className="text-xs text-white">Date: Nov 15, 2023</p>
            </div>
          </li>

          {/* Card 3 */}
          <li
            onClick={() => navigate("/coding")}
            className="relative w-64 h-full bg-white rounded-lg shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={images.proshow}
              alt="Card 1"
              className="w-full h-full object-cover rounded-t-lg -z-10"
            />
            <div className="p-4 bg-yellow-600 rounded-b-lg">
              <p className="text-sm font-semibold text-white">Register Now</p>
              <p className="text-xs text-white">Prize Pool: $1000</p>
              <p className="text-xs text-white">Date: Nov 15, 2023</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  ):(
    
    <div id="events-section" className="min-h-fit bg-[hsl(0,0%,4%)] font-sans flex flex-col items-center pt-7">
      <p id="shadowLarger" className="h-48 mx-auto mb-8">
        <span className="h-48 mx-auto mb-8" id="glow">REGIS</span><span id="blink">TER</span>
    </p>

      {/* Cards Section */}
      <section className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
        <ul
          className={`relative h-[280px] sm:h-[350px] cursor-pointer ${splitDelayTransition ? "transition-all" : ""
            }`}
          onClick={() => {navigate("/workshops"); }} /*CHANGES hackthon to workshop*/
        >
          {/* Card 1 */}
          <li
            onClick={() => {
              navigate("/workshops");
            }}
            className={`absolute top-0 left-[50px] sm:left-[100px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[-2deg] ${splitDelayTransition ? "translate-x-[-220px] sm:translate-x-[-300px]" : ""
              }`}
            onTransitionEnd={handleCard1TransitionEnd}
          >
            <img
              src={images.hackathon}
              alt="Card 1"
              className="w-full h-auto"
            />
            <div className="p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-y-105 hover:scale-x-105">
              <p className="text-sm sm:text-lg font-semibold text-white">Prevents</p>
              <p className="text-xs sm:text-sm text-white">Prize Pool:</p>
              <p className="text-xs sm:text-sm text-white">Date:</p>
            </div>
          </li>

          {/* Card 2 */}
          <li
            className={`absolute top-0 left-[230px] sm:left-[350px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-9 transform rotate-[-7deg] ${splitDelayTransition && splitDelayTransition1
                ? "translate-x-[220px] sm:translate-x-[300px]"
                : ""
              }`}
          >
            <img
              src={images.hackathon}
              alt="Card 2"
              className="w-full h-auto"
            />
            <div className="p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-y-105 hover:scale-x-105">
              <p className="text-sm sm:text-lg font-semibold text-white">Hackathon</p>
              <p className="text-xs sm:text-sm text-white">Prize Pool:</p>
              <p className="text-xs sm:text-sm text-white">Date:</p>
            </div>
          </li>

          {/* Card 3 */}
          <li
            className={`absolute top-0 left-[140px] sm:left-[225px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-400 ease-in-out z-8 transform rotate-[5deg] ${splitDelayTransition1 ? "translate-x-[0px]" : ""
              }`}
          >
            <img
              src={images.coverimg}
              alt="Card 3"
              className="w-full h-auto"
            />
            <div className="p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-y-105 hover:scale-x-105">
              <p className="text-sm sm:text-lg font-semibold text-white">Workshop</p>
              <p className="text-xs sm:text-sm text-white">Prize Pool:</p>
              <p className="text-xs sm:text-sm text-white">Date:</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CardAnimations;