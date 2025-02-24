import React, { useEffect, useState } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import bgvideo from './../assets/bgvideo.mp4';
import { useParams } from "react-router-dom";
import { useScroll } from "@react-three/drei";
import Loader from "../components/Loader";

const EventDetails = () => {
    const [isLoading,setIsLoading]=useState(true);
    const data = [
        {
            title: "Hackathon",
            description: "🚀 Join us for an electrifying Hackathon where innovation meets creativity! 💡 Collaborate with brilliant minds, solve real-world challenges, and showcase your skills. Whether you're a coder, designer, or problem-solver, this is your chance to build something amazing and win exciting prizes! Don't miss out—register now! 🔥",
            venue: "FISAT",
            date: "28th Feb",
            fee: "1399",
            prize_pool: "15k",
            link: 'https://forms.gle/473sBrKtyZGYVBfo8'
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        const timeout=setTimeout(()=>{
            setIsLoading(false)
        },1000);
        return ()=>clearTimeout(timeout);
    }, []);

    return isLoading?(
        <div className="flex justify-center items-center h-screen bg-black">
        <Loader/></div>
    ):(
        <div className="pt-28 pb-7 md: flex justify-center items-center min-h-screen bg-gradient-to-t from-[#eeaecb] via-[#141719] to-[#141719] px-6">
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">

                <div className="flex-1 p-8 text-center md:text-left z-10">
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-4 mx-auto md:mx-0"></div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        {data[0].title}
                    </h2>
                    <p className="text-gray-700 uppercase tracking-widest text-sm mt-4">
                        Get your tickets now!
                    </p>
                    <p className="text-gray-800 mt-6 text-lg sm:text-xl leading-relaxed">
                        {data[0].description}
                    </p>
                    <div className="mt-6 space-y-2">
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Venue:</span> {data[0].venue}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Date:</span> {data[0].date}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Fee:</span> {data[0].fee}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">No of Members : </span>4 <p className="text-zinc-500">(Extra fee for additional member)</p></p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Prize Pool:</span> {data[0].prize_pool}</p>
                    </div>
                    <button
                    
                        className="bg-red-600 text-white rounded-full py-3 px-8 mt-8 text-lg sm:text-xl font-bold  transition-transform duration-300"
                    >
                        Registration Closed
                    </button>
                </div>


                <div className="hidden sm:block relative flex-1">
                    <div className="absolute top-4 right-4 bottom-4 left-4 border-8 border-yellow-500 -z-10"></div>
                    <img
                        src={images.hackathon111} 
                        alt="Concert"
                        className="w-full h-full object-cover shadow-2xl"
                        style={{
                            boxShadow:
                                window.innerWidth <= 768
                                    ? "83px -65px 0px -20px rgb(236, 236, 20)"
                                    : "none",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;