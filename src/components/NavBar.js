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

    const handleClick = () => {
        setClick(!click);
        click(false)
    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 500
        })
    }

    return (
        <div className={nav ? 'nav-container active ' : 'nav-container'}>
            <div className="navbar">
                <div className="logo ">
                    <h1 className='px-1 font-extrabold' onClick={handleScroll}>SUMIT</h1>
                </div>

                <div className={click ? 'list-group active' : 'list-group'} onClick={handleClick}>
                    <Link
                        className='nav-link'
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Home
                    </Link>


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