import React, { useEffect } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const data = [
        {
            "id": 1,
            "title": "Gen AI",
            "description": [
                "🔘 Understand Generative AI: Learn the fundamentals of generative models and their real-world applications.",
                "🔘 Explore Large Language Models (LLMs): Discover AI-driven text generation and content automation.",
                "🔘 Work with Image & Video Generation: Gain hands-on experience with AI-powered visuals and animations.",
                "🔘 Fine-Tune AI Models: Customize generative AI models for specific use cases.",
                "🔘 Build AI-Powered Applications: Integrate generative AI into web and mobile applications."
            ],
            "venue": "FISAT",
            "date": "February 28",
            "fee": "₹549",
            "fee1": "₹399",
            "link": "https://forms.gle/Pi16FTzyhRYPpAqB7",
            "im": images.genaicover
        },

        {
            id: 2,
            title: "Image Prompt",
            description: [
                "Understand Cybersecurity Fundamentals: Learn about threats, vulnerabilities, and attack vectors.",
                "Secure Systems & Networks: Explore network security, firewalls, and best practices for data protection.",
                "Defend Against Cyber Attacks: Detect, analyze, and respond to real-world cyber threats.",
                "Work on a Real-World Cybersecurity Project: Simulate attack scenarios and implement defense mechanisms.",
                "Gain Hands-On Experience: Use security tools and develop practical skills in cybersecurity."
            ],
            venue: "FISAT",
            date: "February 28",
            "fee": "₹549",
            "fee1": "₹399",
            link: "https://forms.gle/xqJA3mvScycVFpz88"
        },
        {
            id: 3,
            title: "Cyber Security",
            description: [
                "🔘Understand Cybersecurity Fundamentals: Learn about threats, vulnerabilities, and attack vectors.",
                "🔘Secure Systems & Networks: Explore network security, firewalls, and best practices for data protection.",
                "🔘Defend Against Cyber Attacks: Detect, analyze, and respond to real-world cyber threats.",
                "🔘Work on a Real-World Cybersecurity Project: Simulate attack scenarios and implement defense mechanisms.",
                "🔘Gain Hands-On Experience: Use security tools and develop practical skills in cybersecurity."
            ],
            venue: "FISAT",
            date: "February 28 , March 1",
            "fee": "₹649",
            "fee1": "₹499",
            link: "https://forms.gle/MGJXFEytso2n6tC27"
        },
        {
            "id": 4,
            "title": "Mern Stack",
            "description": [
                "🔘 Set Up a Backend: Build a robust server using Node.js and Express.",
                "🔘 Manage Data with MongoDB: Store and retrieve data efficiently in a NoSQL database.",
                "🔘 Create a Responsive Frontend: Design dynamic user interfaces with React.",
                "🔘 Fetch & Handle Data: Integrate APIs for seamless data communication.",
                "🔘 Deploy Your Project: Launch your full-stack application for global access."
            ],
            "venue": "FISAT",
            "date": "March 1",
            "fee": "₹649",
            "fee1": "₹499",
            "link": "https://forms.gle/UTPZF6jr1UQJcDZZ8"
        },

        {
            "id": 5,
            "title": "Competitive Coding",
            "description": [
                "🔘 Understand Algorithms & Data Structures: Master sorting, searching, recursion, dynamic programming, and graph algorithms.",
                "🔘 Optimize Problem-Solving Approaches: Learn to analyze time complexity and implement efficient solutions.",
                "🔘 Implement Code Efficiently: Write clean, structured, and optimized code under time constraints.",
                "🔘 Master Competitive Coding Platforms: Get hands-on experience with Codeforces, LeetCode, and HackerRank.",
                "🔘 Solve Live Coding Challenges: Work on real-world problems with expert guidance."
            ],
            "venue": "FISAT",
            "date": "March 1",
            "fee": "₹549",
            "fee1": "₹399",

            "link": "https://forms.gle/1zgKScunMhQFUNAg7"
        }




    ];


    let { id } = useParams();
    id = Number(id);
    const item = data.find((entry) => entry.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const closedEvents=[1];
    return (
        <div className="pt-28 pb-7 md: flex justify-center items-center min-h-screen bg-gradient-to-t from-[#eeaecb] via-[#141719] to-[#141719] px-4 sm:px-6 md:px-12 lg:px-20 py-8">
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
                        <p className="text-gray-900 font-semibold text-left">
                            <span className="text-red-600">Venue:</span> {item.venue}
                        </p>
                        <p className="text-gray-900 font-semibold text-left">
                            <span className="text-red-600">Date:</span> {item.date}
                        </p>
                        <p className="text-gray-900 font-semibold">
                            <p className="flex">
                                <span className="text-red-600">Fee : </span>
                                ₹{Number(item.fee1.replace(/[^\d]/g,""))}
                                <p className="text-zinc-500">(ACM members)</p>
                            </p>
                            <p className="flex"><span className="text-red-600"></span>₹{Number(item.fee.replace(/[^\d]/g,""))}<p className="text-zinc-500">(Non-ACM members)</p></p>
                        </p>
                        {/* <p className="text-gray-900 font-semibold">
                            <span className="text-red-600">Prize Pool:</span> {item.prize_pool}
                        </p> */}
                    </div>

                    {/* Register Button */}
                    {closedEvents.includes(item.id)?<button
                        className="bg-red-600 text-white rounded-full py-3 px-6 sm:px-8 mt-6 sm:mt-8 text-sm sm:text-lg font-bold transition-transform duration-300"
                    >
                        Registration Closed
                    </button>:<button
                        onClick={() => window.location.href = item.link}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full py-3 px-6 sm:px-8 mt-6 sm:mt-8 text-sm sm:text-lg font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Register Now
                    </button>
                    }
                </div>

                {/* Right Side: Event Image (Hidden on Small Screens) */}
                <div className="relative flex-1 hidden md:block">
                    <img
                        src={images.background}
                        alt="Event"
                        className="w-full h-full object-cover rounded-lg md:rounded-none shadow-xl bg-gradient-to-t from-[#eeaecb] via-[#141719] to-[#141719]"
                    />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
