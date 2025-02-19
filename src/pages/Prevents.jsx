



import React, { useEffect, useState } from "react";
import './workshops.scss';
import { images } from "../assets/assets";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
import preventbgvideo from '../assets/preventbgvideo.mp4'
const CardAnimations = () => {
  const [stacksTransition, setStacksTransition] = useState(false);
  const text1 = "PRE - ";
  const text2 = "EVENTS";
  const navigate=useNavigate();

const TypingEffect = (text) => {
  return (
    <motion.h1
      className=" md:w-full text-6xl md:text-8xl font-custom text-white"
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
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setStacksTransition(true);
    }, 1000);
  }, []); // Added dependency array to avoid unnecessary re-renders

  return (
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
          <button onClick={()=>{navigate('/schedule')}} className="px-6 py-3 m-8 bg-white text-black font-medium rounded-lg shadow-md hover:bg-gray-200 transition mt-5">
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
                className={`relative transition-transform duration-1000 ease-in-out transform ${
                  stacksTransition ? "translate-y-0" : "translate-y-20 opacity-0"
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
    </>
  );
};

export default CardAnimations;