import React from 'react';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import Fade from 'react-reveal/Fade';




const Footer = () => {
    return (
        <footer className='contact-container'>

            <div className='py-6'>
                {/* intro */}
                <div className='px-8 py-8 flex items-center flex-col'>
                    <Fade top>
                        <h1 className='text-2xl font-bold text-gray-300 md:text-3xl'>SUMIT</h1>
                        <p className='text-lg md:text-xl text-gray-500 font-semibold'>Frontend Developer</p>
                    </Fade>
                </div>

                {/* links */}

                {/* social media */}
                <div className='py-6 px-8 flex justify-center flex-shrink-0 items-center space-x-16 sm:space-x-20 md:space-x-28 lg:space-x-36 text-gray-200'>
                    <Fade bottom>
                        {/* Github */}
                        <a href="https://github.com/SUM-X-0604" target="_blank" rel="noreferrer">
                            <AiFillGithub size={20} />
                        </a>
                        {/* Twitter */}
                        <a href="https://twitter.com/_Fire_hawk" target="_blank" rel="noreferrer">
                            <FaTwitter size={20} />
                        </a>
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/sumit-verma-07835a210/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin size={20} />
                        </a>
                        {/* instagram */}
                        <a href="https://www.instagram.com/__fire_hawk/" target="_blank" rel="noreferrer">
                            <FaInstagramSquare size={20} />
                        </a>
                    </Fade>
                </div>

                {/* copyright */}
                <div className='flex justify-center items-center py-4'>
                    <h1 className='footer_link text-gray-500'>Copyright © 2022 SUMIT</h1>
                </div>

            </div>
        </footer >
    )
}

export default Footer