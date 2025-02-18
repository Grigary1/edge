import React, { useEffect } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const data = [
        {
            id: 1,
            title: "PES tournament",
            description: [
               "Hola everyone 👋 Are you ready to experience the thrill of football like never before?",
               " The ACM STUDENT CHAPTER FISAT as part of  💫 EDGE+4.O 💫 is bringing you an electrifying PES Tournament ( e-Football).",
               "🔥 Game On! 🔥",
               "Whether you're a seasoned pro or just love the game, this is your chance to showcase your skills and dominate the virtual field.🏆"
            ],
            venue: "Online Event",
            date: "18/02/2025",
            fee: "30",
            prize_pool: "1500",
            link: "https://forms.gle/nPQnD3uCcd2rKU9Y8",
            image:images.pes
        },
        
        {
            id: 2,
            title: "Online Ludo tournament",
            description: [
                "Hola everyone !!! 🎉 We are thrilled to announce our upcoming 𝐋𝐮𝐝𝐨 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧",
                "As part of  𝔼𝔻𝔾𝔼+ 𝟜.𝟘 organized by  𝐀𝐂𝐌 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 𝐅𝐈𝐒𝐀𝐓",
                "Are you  a seasoned pro or a casual player?????....🎲"
            ],
            venue: "Online Event",
            date: "24/02/2025",
            fee: "30",
            prize_pool: "1000",
            link: "https://docs.google.com/forms/d/1Ta0BgEt4CE4rFIdJS7StQgMgNEsQbJaRfKA_hEFzYOk/edit",
            image:images.ludo  
        },
        {
        id: 3,
            title: "Meme Contest",
            description: [
                "Hey Everyone!! 🎊 ",
                "We are so happy to announce our pre event Meme Competition as a part of EDGE+ 4.0 conducted by ACM STUDENT CHAPTER FISAT ",
                " 🔥 Calling all meme lords and tech wizards! It’s time to bring out your inner comedian and showcase your best tech, coding, and geeky memes in the ACM Meme Competition!"
            ],
            venue: "Online Event",
            date: "9/2/24",
            fee: "20",
            prize_pool: "500",
            link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
            image:images.meme
        },
        {
            "id": 4,
            "title": "Prof Anuranj Memorial trophy",
            "description": [
                "Hey Guys",
                "Gear up for an action-packed cricket showdown.Rally your team and compete for glory in the",
                "An exclusive intra-college cricket tournament organized by the  Department of Computer Science,ACM Student Chapter FISAT and Department  of Physical Education in association with Edge+ 4.0 , this is your chance to showcase your skills on the pitch!"
            ],
            "venue": "FISAT ground",
            "date": "17/02/25 - 27/02/25",
            "fee": "2000 per team",
            "prize_pool": "13 k",
            "link": "https://forms.gle/62i4Zigybiigy95w9",
            image:images.crick
        },
        {
            "id": 5,
            "title": "Valorant",
            "description": [
                "Hey Guys",
                "Gear up for an action-packed cricket showdown.Rally your team and compete for glory in the",
                "An exclusive intra-college cricket tournament organized by the  Department of Computer Science,ACM Student Chapter FISAT and Department  of Physical Education in association with Edge+ 4.0 , this is your chance to showcase your skills on the pitch!"
            ],
            "venue": "FISAT ground",
            "date": "17/02/25 - 27/02/25",
            "fee": "2000 per team",
            "prize_pool": "13 k",
            "link": "https://forms.gle/62i4Zigybiigy95w9",
            image:images.crick
        }
    ];


    let { id } = useParams();
    id = Number(id);
    const item = data.find((entry) => entry.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 px-4  sm:px-6 md:px-12 lg:px-20 py-8">
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
                        src={item.image} 
                        alt="Event"
                        className="w-full h-full object-cover rounded-lg md:rounded-none shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
