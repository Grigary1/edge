import React, { useEffect, useState } from "react";
import { images } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import './global.css'
import { ArrowUpRight } from "lucide-react";


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
  return checkScreen ? (

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

  {/* Cards Section with Video Background */}
  <section className="w-full x-4 overflow-x-auto relative">
    {/* Video Background */}


    <ul className="flex space-x-4 relative z-10">
      {/* Card 1 */}
      <li
        onClick={() => navigate("/prevents")}
        className="relative w-64 h-full bg-black rounded-3xl shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <img
          src={images.crick}
          alt="Card 1"
          className="w-full h-full object-cover rounded-t-lg -z-10"
        />
        <div className="p-4 bg-black rounded-b-lg text-center">
          <button className="glass-button relative px-6 py-3 text-pink-400 border border-pink-600 font-bold text-lg border-2 border-white rounded-lg overflow-hidden group">
            Register
            <div className="absolute inset-0 border-2 border-black rounded-lg animate-border group-hover:bg-opacity-20"></div>
          </button>
        </div>
      </li>

      {/* Card 2 */}
      <li
        onClick={() => navigate("/workshops")}
        className="relative w-64 h-full bg-white rounded-lg shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <img
          src={images.codingCoverImg}
          alt="Card 1"
          className="w-full h-full object-cover rounded-t-lg -z-10"
        />
        <div className="p-4 bg-black rounded-b-lg text-center">
          <button className="glass-button relative px-6 py-3 text-pink-400 border border-pink-600 font-bold text-lg border-2 border-white rounded-lg overflow-hidden group">
            Register
            <div className="absolute inset-0 border-2 border-black rounded-lg animate-border group-hover:bg-opacity-20"></div>
          </button>
        </div>
      </li>

      {/* Card 3 */}
      <li
        onClick={() => navigate("/hackathon")}
        className="relative w-64 h-full bg-white rounded-lg shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <img
          src={images.hack}
          alt="Card 1"
          className="w-full h-full object-cover rounded-t-lg -z-10"
        />
        <div className="p-4 bg-black rounded-b-lg text-center">
          <button className="glass-button relative px-6 py-3 text-pink-400 border border-pink-600 font-bold text-lg border-2 border-white rounded-lg overflow-hidden group">
            Register
            <div className="absolute inset-0 border-2 border-black rounded-lg animate-border group-hover:bg-opacity-20"></div>
          </button>
        </div>
      </li>
    </ul>
  </section>
</div>

  ) : (

    <div id="events-section" className="min-h-fit bg-[hsl(0,0%,4%)] font-sans flex flex-col items-center pt-7">
  <p id="shadowLarger" className="h-48 mx-auto mb-8">
    <span className="h-48 mx-auto mb-8" id="glow">REGIS</span><span id="blink">TER</span>
  </p>

  {/* Cards Section with Video Background */}
  <section className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 relative">
    {/* Video Background */}
    {/* <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <video autoPlay loop muted className="w-full h-full object-contain">
        <source src={Overlay} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div> */}

    <ul
      className={`relative h-[280px] sm:h-[350px] cursor-pointer ₹{splitDelayTransition ? "transition-all" : "" } z-10`}
    >
      {/* Card 1 */}
      <li
        onClick={() => {
          navigate("/prevents");
        }}
        className={`absolute top-0 left-[50px] sm:left-[100px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-10 transform rotate-[-2deg] ${splitDelayTransition ? "translate-x-[-220px] sm:translate-x-[-300px]" : "" }`}
        onTransitionEnd={handleCard1TransitionEnd}
      >
        <img src={images.crick} alt="Card 1" className="w-full h-auto" />
        <div className="relative p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-105 text-center">
          <span className="absolute top-1 right-2 text-white text-2xl"><ArrowUpRight /></span>
          <p className="text-sm sm:text-lg font-semibold text-white">Prevents</p>
          <p className="text-xs sm:text-sm text-white">Date: 10th February - 27th February</p>
        </div>
      </li>

      {/* Card 2 */}
      <li onClick={() => navigate('/hackathon')}
        className={`absolute top-0 left-[230px] sm:left-[350px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-1000 ease-in-out z-9 transform rotate-[-7deg] ${splitDelayTransition && splitDelayTransition1 ? "translate-x-[220px] sm:translate-x-[300px]" : ""}`}
      >
        <img src={images.hack} alt="Card 2" className="w-full h-auto" />
        <div className="relative p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-105 text-center">
          <span className="absolute top-1 right-2 text-white text-2xl"><ArrowUpRight /></span>
          <p className="text-sm sm:text-lg font-semibold text-white">Hackathon</p>
          <p className="text-xs sm:text-sm text-white">Prize Pool: 15k</p>
          <p className="text-xs sm:text-sm text-white">Date : 28th February</p>
        </div>
      </li>

      {/* Card 3 */}
      <li onClick={() => navigate('/workshops')}
        className={`absolute top-0 left-[140px] sm:left-[225px] w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-white rounded-lg shadow-md transition-transform duration-400 ease-in-out z-8 transform rotate-[5deg] ${splitDelayTransition1 ? "translate-x-[0px]" : ""}`}
      >
        <img src={images.codingCoverImg} alt="Card 3" className="w-full h-auto" />
        <div className="relative p-2 bg-yellow-600 rounded-3xl font-extrabold hover:scale-105 text-center">
          <span className="absolute top-1 right-2 text-white text-2xl"><ArrowUpRight /></span>
          <p className="text-sm sm:text-lg font-semibold text-white">Workshops</p>
          <p className="text-xs sm:text-sm text-white">Date : February 28th ,  March 1st</p>
        </div>
      </li>
    </ul>
  </section>
</div>

  );
};

export default CardAnimations;