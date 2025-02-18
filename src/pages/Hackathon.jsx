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
            description: "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
            venue: "Online Event",
            date: "idk",
            fee: "20",
            prize_pool: "15K",
            link: 'https://forms.gle/QQQaf4umbnEWjd5Y8'
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
        <>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 px-6">
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
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Prize Pool:</span> {data[0].prize_pool}</p>
                    </div>
                    <button
                        onClick={() => window.location.href = item.link}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full py-3 px-8 mt-8 text-lg sm:text-xl font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Get My Tickets
                    </button>
                </div>


                <div className="relative flex-1">
                    <div className="absolute top-4 right-4 bottom-4 left-4 border-8 border-yellow-500 -z-10"></div>
                    <img
                        src={images.background} 
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
        </>
    );
};

export default EventDetails;