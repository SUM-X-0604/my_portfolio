// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//     const [nav, setNav] = useState(false);
//     const [scroll, setScroll] = useState(false);

//     const menuHandler = () => {
//         setNav(!nav);
//     };

//     const background = () => {
//         if (window.scrollY >= 60) {
//             setScroll(true)
//         } else {
//             setScroll(false)
//         }
//     }

//     window.addEventListener('scroll', background)


//     return (
//         <>
//             {/* navbar */}
//             {/* navbar */}
//             <nav className={scroll ? 'bkd w-full h-20 px-6 bg-transparent bg-scroll sticky top-0 bg-red-600' : "w-full h-20 px-6 bg-transparent bg-scroll sticky top-0 "}>
//                 <div className="max-w-[1140px] m-auto flex justify-between items-center h-full  ">

//                     {/* desktop view */}
//                     <div >
//                         <h1 className="text-2xl font-bold cursor-pointer text-gray-200">SUMIT</h1>
//                     </div>
//                     <div className="hidden sm:block " >
//                         <ul className="flex text-gray-200 text-xl items-center space-x-6 font-semibold ">
//                             <li
//                                 className="navlink">Home
//                             </li>
//                             <li
//                                 className="navlink">About
//                             </li>
//                             <li
//                                 className="navlink">Service
//                             </li>
//                             <li
//                                 className="navlink">Projects
//                             </li>
//                             <li
//                                 className="navlink">Contact
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Hamburger */}
//                     <div
//                         onClick={menuHandler}
//                         className="block sm:hidden"
//                     >
//                         {nav ? (
//                             <AiOutlineClose size={20} className="sm:hidden text-gray-200" />
//                         ) : (
//                             <AiOutlineMenu size={20} className="sm:hidden text-gray-200 " />
//                         )}
//                     </div>

//                     {/* Movile View */}
//                     <div
//                         className={
//                             nav
//                                 ? "bkd w-full absolute z-100  text-gray-200 flex font-bold text-xl justify-center text-center left-0 top-20 py-8 drop-shadow-2xl md:hidden z-[7]"
//                                 : "absolute left-[-100%]"
//                         }

//                     >
//                         <ul className="space-y-4">
//                             <li className="py-2 cursor-pointer ">Home</li>
//                             <li className="py-2 cursor-pointer">About</li>
//                             <li className="py-2 cursor-pointer">Services</li>
//                             <li className="py-2 cursor-pointer">Projects</li>
//                             <li className="py-2 cursor-pointer">Contact</li>
//                         </ul>
//                     </div>

//                 </div>
//             </nav>

//         </>
//     );
// };

// export default Navbar;




import React, { useState } from 'react'
import './NavBar.css'
import { Link } from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const background = () => {
        if (window.scrollY >= 60) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', background)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 500
        })
    }

    return (
        <div className={nav ? 'nav-container active' : 'nav-container'}>
            <div className="navbar">
                <div className="logo">
                    <h1 onClick={handleScroll}>SUMIT</h1>
                </div>

                <div className={click ? 'list-group active' : 'list-group'}>
                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        About
                    </Link>

                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Services
                    </Link>

                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>

                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Contact
                    </Link>
                </div>


                <div className="icons" onClick={handleClick}>
                    <div className={click ? "bar1 active" : "bar1"}></div>
                    <div className={click ? "bar2 active" : "bar2"}></div>
                    <div className={click ? "bar3 active" : "bar3"}></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar