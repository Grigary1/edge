import React, { useEffect } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const data = [
        {
            "id": 1,
            "title": "Inter College Cricket Tournament",
            "description": [
                "An exclusive intra-college cricket tournament organized by the  Department of Computer Science,ACM Student Chapter FISAT and Department  of Physical Education in association with Edge+ 4.0 , this is your chance to showcase your skills on the pitch!"
            ],
            "venue": "FISAT, Angamaly",
            "date": "17/02/25 - 27/02/25",
            "fee": "₹2000 per team",
            "prize_pool": "50k",
            "link": "https://forms.gle/62i4Zigybiigy95w9"
        }
    ];


    let { id } = useParams();
    id = Number(id);
    const item = data.find((entry) => entry.id === 1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 px-4 sm:px-6 md:px-12 lg:px-20 py-8">
            <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-lg rounded-lg sm:rounded-2xl overflow-hidden relative">

                {/* Left Side: Event Info */}
                <div className="flex-1 p-6 sm:p-8 text-center md:text-left z-10">
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-4 mx-auto md:mx-0"></div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        {item.title}
                    </h2>
                    <p className="text-gray-700 uppercase tracking-widest text-xs sm:text-sm mt-3">
                        Secure Your Spot Now!
                    </p>

                    {/* Description */}
                    <div className="text-gray-800 mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
                        {Array.isArray(item.description) ? (
                            <ul className="list-disc list-inside space-y-2 text-left">
                                {item.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{item.description}</p>
                        )}
                    </div>

                    {/* Event Details */}
                    <div className="mt-6 space-y-2 text-sm sm:text-base">
                        <p className="text-gray-900 font-semibold">
                            <span className="text-red-600">Venue:</span> {item.venue}
                        </p>
                        <p className="text-gray-900 font-semibold">
                            <span className="text-red-600">Date:</span> {item.date}
                        </p>
                        <p className="text-gray-900 font-semibold">
                            <span className="text-red-600">Fee:</span> {item.fee}
                        </p>
                        <p className="text-gray-900 font-semibold">
                            <span className="text-red-600">Prize Pool:</span> {item.prize_pool}
                        </p>
                    </div>

                    {/* Register Button */}
                    <button
                        onClick={() => window.location.href = item.link}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full py-3 px-6 sm:px-8 mt-6 sm:mt-8 text-sm sm:text-lg font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Register Now
                    </button>
                </div>

                {/* Right Side: Event Image (Hidden on Small Screens) */}
                <div className="relative flex-1 hidden md:block">
                    <img
                        src={images.crick} 
                        alt="Event"
                        className="w-full h-full object-cover rounded-lg md:rounded-none shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
