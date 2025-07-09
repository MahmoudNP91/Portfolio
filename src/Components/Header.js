import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { IoLogoGithub, IoIosMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Logo from "./logo";

export const SendContext = React.createContext();
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                const height = navRef.current.offsetHeight;

                let newOpacity = 0;

                if (window.scrollY === 0) {
                    newOpacity = 0;
                } else if (window.scrollY > 0 && window.scrollY < height) {
                    newOpacity = Math.round((window.scrollY / height) * 100) / 100;
                } else {
                    newOpacity = 1;
                }

                navRef.current.style.backgroundColor = `rgba(0, 0, 0, ${newOpacity})`;
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    function navHandler() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav ref={navRef} className={`${isMenuOpen? "flex-col navcolor" : "bg-transparent" } lg:flex-row lg:justify-between lg:py-5 py-3 px-5 lg:px-28 lg:items-center flex justify-between items-center w-full fixed duration-300`}>
                <div className="flex justify-between w-full lg:w-auto">    
                    <Logo/>

                    <button onClick={navHandler} className="text-white lg:hidden text-3xl">
                        <IoIosMenu className={isMenuOpen ? "hidden" : "visible lg:hidden"} />
                        <MdClose className={isMenuOpen ? "visible lg:hidden" : "hidden"} />
                    </button>
                </div>
                <div className={`${isMenuOpen ? "visible w-full mt-4" : "hidden"} lg:m-0 lg:w-auto lg:flex-row gap-y-6 lg:flex gap-x-3 items-center`}>
                    <ul className={`${isMenuOpen ? "flex-col" : ""} lg:flex-row gap-y-3 flex lg:gap-x-10 lg:text-xl font-bold lg:items-center`}>
                        <li className="text-white hover:text-gray-200">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-200"}>
                                Home
                            </NavLink>
                        </li>
                        <hr className="visible lg:hidden"/>
                        <li className="text-white hover:text-gray-200">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-200"}>
                                Project
                            </NavLink>
                        </li>
                        <hr className="visible lg:hidden"/>
                        <li className="text-white hover:text-gray-200">
                            <NavLink to="/Skills" className={({ isActive }) => isActive ? "text-gray-400" : "hover:text-gray-200"}>
                                Skills
                            </NavLink>
                        </li>
                        <hr className="visible lg:hidden"/>
                    </ul>

                    <ul className={`${isMenuOpen ? "mt-5 justify-evenly" : ""} lg:mt-0 icons flex text-2xl text-white gap-x-3 lg:ml-2`}>
                        <li className="icon bg-neutral-700 w-12 h-12 border rounded-full flex items-center justify-center hover:text-black duration-500 relative">
                            <a href="https://www.linkedin.com/in/mahmoud-ahmed-631a9424a/" target="_blank" className="absolute w-full h-full rounded-full flex justify-center items-center">
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="icon bg-neutral-700 w-12 h-12 border rounded-full flex items-center justify-center hover:text-black duration-500 relative">
                            <a href="https://github.com/MahmoudNP91" target="_blank" className="absolute w-full h-full rounded-full flex justify-center items-center">
                                <IoLogoGithub />
                            </a>
                        </li>
                        <li className="icon bg-neutral-700 w-12 h-12 border rounded-full flex items-center justify-center hover:text-black duration-500 relative">
                            <a href="" target="_blank" className="absolute w-full h-full rounded-full flex justify-center items-center">
                                <FaDiscord />
                            </a>
                        </li>
                        <li className="icon bg-neutral-700 w-12 h-12 border rounded-full flex items-center justify-center hover:text-black duration-500 relative">
                            <a href="#" className="absolute w-full h-full rounded-full flex justify-center items-center">
                                <FaXTwitter />
                            </a>
                        </li>
                    </ul>

                    <button
                        className={`${isMenuOpen ? "mt-5 w-full" : ""} lg:mt-0 navBtn bg-transparent text-white relative hover:text-black p-2 border text-lg lg:p-3 lg:text-xl font-bold duration-300 z-10`}>
                        Let's Connect
                    </button>
                </div>
            </nav>


        </>
    )
}

export default Header;