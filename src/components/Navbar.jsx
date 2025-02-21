import React, { useState, useEffect, useRef } from "react";



import Logo from "../assets/logo.png";
import { images } from "../assets/assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    const [lastScrollY, setLastScrollY] = useState(0);

    const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);

    const [scrol, setScrol] = useState(null);

    useEffect(() => {
        if (location.pathname === '/' && scrol) {
            const scrollView = document.getElementById(scrol);
            if (scrollView) {
                scrollView.scrollIntoView({ behavior: "smooth" })
            }
            setScrol(null)
        }
    }, [scrol, location.pathname])

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }


        const handleResize = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);

    };
    const handleScroll = (sectionId) => {
        setIsMenuOpen(false);
        navigate('/')
        setTimeout(() => setScrol(sectionId), 100);
    };


    useEffect(() => {

        const handleScroll = () => {

            const currentScrollY = window.scrollY;



            if (currentScrollY > lastScrollY && currentScrollY > 100) {

                setIsVisible(false);

            } else {

                setIsVisible(true);

            }



            setLastScrollY(currentScrollY);

        };

        window.addEventListener("scroll", handleScroll);



        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, [lastScrollY]);



    return (

        <nav className={`navbar ${isVisible ? "visible" : "hidden"} bg-red-700`}>

            <div className="logo">

                <a>

                    <img onClick={()=>navigate('/')} src={images.edgelogo} alt="Logo" />

                </a>

            </div>

            <ul className={`nav-links ${isMenuOpen ? "show" : ""} space-y-4`}>

                <button onClick={() => window.scrollTo(0, 0, { behavior: 'smooth' })}>

                    <a href="/">Home</a>

                </button>

                <button onClick={() => handleScroll("about-edge")}>

                    <a>About</a>

                </button>

                <NavLink onClick={() => setIsMenuOpen(false)} to={'/schedule'}>

                    <a>Schedule</a>

                </NavLink>
                <button onClick={() => handleScroll("events-section")}>
                    <a href="#events">Events</a>
                </button>
                <button onClick={() => handleScroll("contact-us")}>

                    <a>Contact</a>

                </button>

            </ul>

            <div className="nav-button">

                <a onClick={() => handleScroll("events-section")} className="btn">

                    REGISTER

                </a>

            </div>

            <button

                className="hamburger"

                onClick={toggleMenu}

                aria-label="Toggle menu"

            >

                <svg

                    className="hb"

                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 10 10"

                    stroke="#eee"

                    strokeWidth=".6"

                    fill="rgba(0,0,0,0)"

                    strokeLinecap="round"

                    style={{ cursor: "pointer" }}

                >

                    <path

                        d={

                            isMenuOpen

                                ? "M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"

                                : "M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"

                        }

                    />

                </svg>

            </button>

        </nav>

    );

};

export default Navbar