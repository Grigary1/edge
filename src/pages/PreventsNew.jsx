import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Calendar, UserPlus } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Overlay from '../assets/bgvideo.mp4';
import { NavLink, useNavigate } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { images } from "../assets/assets";
import './workshops.scss';
import { motion } from "framer-motion";
import ContactUs from "./Contact";
import Footer from "../components/Footer";
const data = [
  {
    id: 1,
    title: "PES\nTournament",
    description: [
      "Join the electrifying PES Tournament as part of EDGE+4.0! . Showcase your skills and dominate the virtual field.🏆"
    ],
    venue: "Online Event",
    date: "18/02/2025",
    fee: "30",
    prize_pool: "1500",
    link: "https://forms.gle/nPQnD3uCcd2rKU9Y8",
    image: images.pes
  },

  {
    id: 2,
    title: "Online Ludo Tournament",
    description: [
      "Get ready for the Ludo Competition Whether you're a seasoned player or just starting, come join the fun and compete for the prize!"
    ],
    venue: "Online Event",
    date: "24/02/2025",
    fee: "30",
    prize_pool: "1000",
    link: "https://docs.google.com/forms/d/1Ta0BgEt4CE4rFIdJS7StQgMgNEsQbJaRfKA_hEFzYOk/edit",
    image: images.ludo
  },
  {
    id: 3,
    title: "Meme\nContest",
    description: [
      "Calling all meme lovers! Show off your best tech, coding, and geeky memes in the EDGE+4.0 Meme Competition and win exciting prizes!"
    ],
    venue: "Online Event",
    date: "9/2/24",
    fee: "20",
    prize_pool: "500",
    link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
    image: images.meme
  },
  {
    id: 4,
    title: "Prof Anuranj Memorial trophy",
    description: [
      "Join the intra-college cricket tournament organized by the Computer Science Dept. and ACM Student Chapter as part of EDGE+4.0."
    ],
    venue: "FISAT ground",
    date: "17/02/25 - 27/02/25",
    fee: "2000 per team",
    prize_pool: "13 k",
    link: "https://forms.gle/62i4Zigybiigy95w9",
    image: images.crick
  },
  {
    id: 5,
    title: "Valorant",
    description: [
      "Compete in a thrilling Valorant tournament as part of EDGE+4.0. Gather your team, show your strategic skills, and aim for the prize!"
    ],
    venue: "FISAT ground",
    date: "17/02/25 - 27/02/25",
    fee: "30",
    prize_pool: "13 k",
    link: "https://forms.gle/62i4Zigybiigy95w9",
    image: images.edgerev
  }
];


export default function WorkshopNew() {
  const text1 = "PRE - ";
  const text2 = "EVENTS";
  const navigate = useNavigate()
  const TypingEffect = (text) => {
    return (
      <motion.h1
        className="text-4xl md:text-8xl font-custom text-white"
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
          <h2 className="text-4xl font-extrabold text-yellow-400 animate-fadeIn tracking-wide whitespace-pre-line">
            {selectedWorkshop.title}
          </h2>

          {/* Date & Venue */}
          <p className="text-sm text-gray-300 mt-0">
            📅 <span className="font-semibold">{selectedWorkshop.date}</span> | 📍 {selectedWorkshop.venue}
          </p>

          {/* Fee Section */}
          <p className="text-lg  text-white">

            <br />
            ₹ <span className="text-yellow-500 font-semibold">{selectedWorkshop.fee}</span> <span className="text-sm"></span>
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
          <a
            href={selectedWorkshop.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 mt-3 bg-yellow-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            <UserPlus className="w-5 h-5" />
            <span>Register Now</span>
          </a>

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
      <div className="fixed bottom-2 left-0 right-0 backdrop-blur-none p-2 z-10">
        {/* Scrollbar container */}
        <div className="overflow-x-auto  pb-2">
          {/* Add padding-top to prevent clipping */}
          <div className="flex space-x-4 pt-8">
            {data.map((workshop, index) => (
              <div
                key={index}
                className={`w-48 flex-shrink-0 cursor-pointer transition-transform duration-500 ${selectedWorkshop.id === workshop.id ? "-translate-y-6 text-yellow-500 font-bold " : ""
                  }`}
                onClick={() => setSelectedWorkshop(workshop)}
              >
                <img
                  src={workshop.image || images.edgerev}
                  alt={workshop.title}
                  className="w-full h-56 object-contain rounded  "
                />
                <p className="text-center mt-2 text-sm">{workshop.title}</p>
              </div>
            ))}
          </div>

        </div>
        <p className="text-right align-middle text-xl pr-4 text-yellow-300">
          <span className="inline-block animate-blink delay-[1s]">›</span>
          <span className="inline-block animate-blink delay-[3s]">›</span>
          <span className="inline-block animate-blink delay-[5s]">›</span>
        </p>


      </div>

    </div>

  ) : (
    <>
      <div
        className="h-[650px] flex justify-center items-center bg-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${images.background})` }}
      >
        {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
                  >
                    <source src={preventbgvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="mt-48 md: relative z-10 text-white text-center">
          <div className="space-y-8 md:flex">
            <h1 className="text-8xl font-bold ">{TypingEffect(text1)}</h1>
            <h1 className="text-8xl font-bold ">{TypingEffect(text2)}</h1></div>
          <button onClick={() => window.scrollTo({ top: 300, left: 0, behavior: "smooth" })} className="px-6 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition mt-5">
            Register Now
          </button>
          <button onClick={() => { navigate('/schedule') }} className="px-6 py-3 m-8 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition mt-5">
            View Our Schedule
          </button>
        </div>

      </div>

      <div className="min-h-screen bg-[hsl(0,0%,4%)] font-sans pt-10">
        <section className="max-w-6xl mx-auto my-10">
          <ul className="relative flex justify-center gap-10 flex-wrap">
            {[
              { id: 1, img: images.pes, title: "PES Tournament" },
              { id: 2, img: images.ludo, title: "Online Ludo Tournament" },
              { id: 3, img: images.meme, title: "Meme Contest" },
              { id: 4, img: images.cricket, title: "Prof. Anuranj Memorial Trophy" },
              { id: 5, img: images.valo, title: "Valorant Tournament" },
            ].map((workshop, index) => (
              <li
                key={workshop.id}
                className={`relative transition-transform duration-1000 ease-in-out transform ${stacksTransition ? "translate-y-0" : "translate-y-20 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }} // Adds a delay for staggered effect
              >
                <NavLink
                  to={`/prevents/${workshop.id}`}
                  className="block w-[300px] h-[350px] bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all"
                >
                  <div
                    className="w-full h-[350px] bg-[url(${workshop.img})] bg-cover bg-center -z-10 flex  justify-center items-end pb-2"
                    style={{ backgroundImage: `url(${workshop.img})` }}
                  >
                    <div className="p-4 text-center bg-[#F7006A] z-10 rounded-full max-w-48">
                      {/* <h1 className="text-lg font-semibold">{workshop.title}</h1> */}
                      <button className="text-sm z-20 rounded-full text-white">Register Now</button>
                    </div>

                  </div>
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