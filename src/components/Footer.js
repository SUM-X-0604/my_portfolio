import React from 'react';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='contact-container'>

            <div className='py-8'>
                {/* intro */}
                <div className='px-8 flex items-start flex-col'>
                    <h1 className='text-2xl font-bold text-gray-300'>SUMIT</h1>
                    <p className='text-lg text-gray-500 font-semibold'>Frontend Developer</p>
                </div>

                {/* links */}
                <div className='py-8 px-8 flex flex-col '>
                    <Link to='/' className='footer_link'>About</Link>
                    <Link to='/' className='py-2 footer_link'>Services</Link>
                    <Link to='/' className='footer_link'>Projects</Link>
                </div>

                {/* social media */}
                <div className='py-6 px-8 max-w-[300px] m-auto flex justify-center flex-shrink-0 items-center space-x-16 text-gray-200'>
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
                </div>

                {/* copyright */}
                <div className='flex justify-center items-center py-4'>
                    <h1 className='footer_link text-gray-500'>Copyright © 2022 SUMIT.</h1>
                </div>

            </div>
        </footer>
    )
}

export default Footer