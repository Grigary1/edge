import React, { useEffect } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import bgvideo from './../assets/bgvideo.mp4';
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const data = [
        {
            id: 3,
            title: "Meme Contest",
            description: "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
            venue: "Online Event",
            date: "November 15, 2023",
            fee: "Free",
            prize_pool: "$500",
            link: 'https://forms.gle/QQQaf4umbnEWjd5Y8'
        },
    ];
    let { id } = useParams();
    id = Number(id);
    const item = data.find((entry) => entry.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 px-6">
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">
                {/* Text Content */}
                <div className="flex-1 p-8 text-center md:text-left z-10">
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-4 mx-auto md:mx-0"></div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        {item.title}
                    </h2>
                    <p className="text-gray-700 uppercase tracking-widest text-sm mt-4">
                        Get your tickets now!
                    </p>
                    <p className="text-gray-800 mt-6 text-lg sm:text-xl leading-relaxed">
                        {item.description}
                    </p>
                    <div className="mt-6 space-y-2">
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Venue:</span> {item.venue}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Date:</span> {item.date}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Fee:</span> {item.fee}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Prize Pool:</span> {item.prize_pool}</p>
                    </div>
                    <button
                        onClick={() => window.location.href = item.link}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full py-3 px-8 mt-8 text-lg sm:text-xl font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Get My Tickets
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative flex-1">
                    <div className="absolute top-4 right-4 bottom-4 left-4 border-8 border-yellow-500 -z-10"></div>
                    <img
                        src={images.background} // Replace with your actual image URL
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