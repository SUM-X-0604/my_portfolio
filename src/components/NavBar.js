import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const menuHandler = () => {
        setNav(!nav);
    };

    return (
        <>
            {/* navbar */}
            {/* navbar */}
            <nav className="max-w-[1140px] m-auto w-full h-20 px-6 bg-transparent bg-scroll sticky top-0 ">
                <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">

                    {/* desktop view */}
                    <div>
                        <h1 className="text-2xl font-bold cursor-pointer text-black">SUMIT</h1>
                    </div>
                    <div className="hidden sm:block ">
                        <ul className="flex text-black text-xl items-center space-x-6 font-semibold ">
                            <li
                                className="navlink">Home
                            </li>
                            <li
                                className="navlink">About
                            </li>
                            <li
                                className="navlink">Service
                            </li>
                            <li
                                className="navlink">Contact
                            </li>
                        </ul>
                    </div>

                    {/* Hamburger */}
                    <div
                        onClick={menuHandler}
                        className="block sm:hidden"
                    >
                        {nav ? (
                            <AiOutlineClose size={20} className="sm:hidden " />
                        ) : (
                            <AiOutlineMenu size={20} className="sm:hidden " />
                        )}
                    </div>

                    {/* Movile View */}
                    <div
                        className={
                            nav
                                ? "w-full absolute bg-gray-200 text-black flex font-bold text-xl justify-center text-center left-0 top-20 py-8 drop-shadow-2xl md:hidden "
                                : "absolute left-[-100%]"
                        }
                    >
                        <ul className="space-y-4">
                            <li className="py-2 cursor-pointer ">Home</li>
                            <li className="py-2 cursor-pointer">About</li>
                            <li className="py-2 cursor-pointer">Service</li>
                            <li className="py-2 cursor-pointer">Contact</li>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    );
};

export default Navbar;
