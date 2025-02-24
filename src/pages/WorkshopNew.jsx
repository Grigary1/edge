import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Overlay from '../assets/bgvideo.mp4';
import { Calendar, UserPlus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { images } from "../assets/assets";
import './workshops.scss';
import { motion } from "framer-motion";
import ContactUs from "./Contact";
import Footer from "../components/Footer";
const data = [
  {
    id: 5,
    title: "Competitive Coding",
    description: [
      "Master algorithms, data structures, and problem-solving techniques for competitive coding.",
    ],
    venue: "FISAT",
    date: "March 1",
    fee: "₹549",
    fee1: "₹399",
    link: "https://forms.gle/1zgKScunMhQFUNAg7",
    im: images.compcoding
  },
  {
    id: 2,
    title: "Image Prompt",
    description: [
      "Understand cybersecurity fundamentals, threats, and best practices for securing systems and networks.",
    ],
    venue: "FISAT",
    date: "February 28",
    fee: "₹549",
    fee1: "₹399",
    link: "https://forms.gle/xqJA3mvScycVFpz88",
    im: images.imageprompt
  },
  {
    id: 1,
    title: "Gen AI",
    description: [
      "Learn about generative models, their applications, and work with AI-powered text, image, and video generation. ",
    ],
    venue: "FISAT",
    date: "February 28",
    fee: "₹549",
    fee1: "₹399",
    link: "https://forms.gle/Pi16FTzyhRYPpAqB7",
    im: images.genai
  },
  {
    id: 3,
    title: "Cyber Security",
    description: [
      "Learn about cybersecurity fundamentals, defense mechanisms, and secure systems & networks.",

    ],
    venue: "FISAT",
    date: "February 28 , March 1",
    fee: "₹649",
    fee1: "₹499",
    link: "https://forms.gle/MGJXFEytso2n6tC27",
    im: images.cybersec
  },
  {
    id: 4,
    title: "Mern Stack",
    description: [
      "Learn MERN stack fundamentals, building dynamic web applications with MongoDB, Express.js, React, and Node.js."
    ],
    venue: "FISAT",
    date: "February 28,March 1",
    fee: "₹649",
    fee1: "₹499",
    link: "https://forms.gle/UTPZF6jr1UQJcDZZ8",
    im: images.mernstack
  },

];
const   closedEvents=[1];
export default function WorkshopNew() {


  const navigate = useNavigate()
  const TypingEffect = (text) => {
    return (
      <motion.h1
        className="text-4xl md:text-8xl font-custom text-white "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    );
  };
  const [stacksTransition, setStacksTransition] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStacksTransition(true);
    }, 1000);
  }, []);
  const [selectedWorkshop, setSelectedWorkshop] = useState(data[0]);

  const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen;
  };
  let checkScreen = useScreenSize();
  return checkScreen ? (
    <div className="relative w-full min-h-screen overflow-hidden text-white pt-16 bg-gradient-to-t from-[#436138] via-[#141719] to-[#141719]">


      {/* Selected Workshop Details */}
      <div className="relative z-10 mt-8 px-4">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg text-center sm:text-left">
          {/* Workshop Title */}
          <h2 className="text-4xl font-extrabold text-yellow-400 animate-fadeIn tracking-wide">
            {selectedWorkshop.title}
          </h2>

          {/* Date & Venue */}
          <p className="text-sm text-gray-300 mt-2">
            📅 <span className="font-semibold">{selectedWorkshop.date}</span> | 📍 {selectedWorkshop.venue}
          </p>

          {/* Fee Section */}
          <p className="text-lg mt-4 text-white">
            💰 <span className="text-yellow-400 font-semibold">₹{Number(selectedWorkshop.fee1.replace(/[^\d]/g, ""))-100}</span> <span className="text-sm">(For ACM members)</span>
            <br />
            💰 <span className="text-yellow-500 font-semibold">₹{Number(selectedWorkshop.fee.replace(/[^\d]/g, ""))-50}</span> <span className="text-sm">(For Non-ACM members)</span>
          </p>

          {/* Workshop Description */}
          <div className="mt-4 text-sm leading-relaxed text-gray-300 space-y-2 border-l-4 border-yellow-500 pl-4">
            {selectedWorkshop.description.map((desc, index) => (
              <p key={index} className="flex items-start">
                <span className="text-yellow-400 mr-2">✔</span> {desc}
              </p>
            ))}
          </div>
        </div>

        <p className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Register Button */}
          {closedEvents.includes(selectedWorkshop.id)?
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 mt-3 bg-red-500 text-white font-bold px-5 py-2 rounded-lg shadow-md  transition duration-300"
          >
            <UserPlus className="w-5 h-5" />
            <span>Registration Closed</span>
          </a>:
          <a
            href={selectedWorkshop.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 mt-3 bg-yellow-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            <UserPlus className="w-5 h-5" />
            <span>Register Now</span>
          </a>}

          {/* Schedule Button */}
          {/* <a
            onClick={() => navigate('/schedule')}
            className="flex items-center justify-center space-x-2 border-2 border-yellow-500 text-yellow-500 font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>View Our Schedule</span>
          </a> */}
        </p>

      </div>

      {/* Swiper at the Bottom of the Viewport */}
      <div className="fixed bottom-2 left-0 right-0 backdrop-blur-sm p-2 z-10">
        {/* Scrollbar container */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800 pb-2">
          {/* Add padding-top to prevent clipping */}
          <div className="flex space-x-4 pt-8">
            {data.map((workshop, index) => (
              <div
                key={index}
                className={`w-48 flex-shrink-0 cursor-pointer transition-transform duration-500 ${selectedWorkshop.id === workshop.id ? "-translate-y-6 text-yellow-500 font-bold" : ""
                  }`}
                onClick={() => setSelectedWorkshop(workshop)}
              >
                <img
                  src={workshop.im || images.defaultCover}
                  alt={workshop.title}
                  className="w-full object-cover rounded "
                />
                <p className="text-center mt-2 text-sm font-">{workshop.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-right align-middle text-3xl pr-4 text-yellow-300">
          <span className="inline-block animate-blink delay-[1s]">›</span>
          <span className="inline-block animate-blink delay-[3s]">›</span>
          <span className="inline-block animate-blink delay-[5s]">›</span>
        </p>
      </div>

    </div>
  ) : (
    <>
      <div
        className="h-[800px] flex justify-center items-center bg-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images.background})` }}

      >
        <div className="relative z-10 text-white text-center">
          <h1 className="text-8xl font-bold ">{TypingEffect("WORKSHOPS")}</h1>
          <button onClick={() => window.scrollTo({ top: 500, left: 0, behavior: "smooth" })} className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition mt-5">
            Register Now
          </button>
          <button onClick={() => { navigate('/schedule') }} className="px-6 py-3 m-8 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition mt-5">
            See Our Schedule
          </button>
        </div>
      </div>


      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-10">
        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative flex justify-center gap-10 flex-wrap">
            {[
              { id: 1, img: images.genai, title: "Gen AI" },
              { id: 2, img: images.imageprompt, title: "Image Prompt" },
              { id: 3, img: images.cybersec, title: "Cyber Security" },
              { id: 4, img: images.mernstack, title: "Python Project" },
              { id: 5, img: images.compcoding, title: "Competitive Coding" }
            ].map((workshop, index) => (
              <li
                key={workshop.id}
                className={`relative transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-y-0" : "translate-y-20 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }} 
              >
                <NavLink
                  to={`/workshops/${workshop.id}`}
                  className="block w-[300px] h-[400px] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all"
                >
                  <div
                    className="w-full h-[400px] bg-[url(${workshop.img})] bg-contain bg-center -z-10 flex  justify-center items-end pb-2"
                    style={{ backgroundImage: `url(${workshop.img})` }}
                  >
                    <div className="p-4 text-center bg-[#F7006A] z-10 rounded-full max-w-48">
                      {/* <h1 className="text-lg font-semibold">{workshop.title}</h1> */}
                      <button className="text-sm z-20 rounded-full text-white font-semibold">Register Now</button>
                    </div>
                  </div>

                  {/* <img src={workshop.img} alt={`Card ${workshop.id}`} className="w-full h-[400px] object-cover -z-10" /> */}

                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ContactUs />
      <Footer />
    </>


  );
};