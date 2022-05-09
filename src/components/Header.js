import React from 'react';
import Typed from 'react-typed';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Header = () => {
    return (
        <>
            {/* Section */}
            <section className='h-[100%] '>

                {/* Container */}
                <div div className='max-w-[1140px] m-auto flex flex-col'>

                    {/* Text */}
                    <div className='flex flex-col items-center justify-center py-8'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-xl font-semibold py-2 text-gray-500'>
                                <h1>Hii, My Name is</h1>
                            </div>
                            <div className='text-4xl font-bold text-white pb-2'>
                                <h1>Sumit Verma</h1>
                            </div>
                            <div className='pb-2'>
                                <h1 className='text-lg text-gray-500' >Frontend Developer</h1>
                            </div>
                            <div className='py-4 text-2xl font-semibold capitalize text-gray-400'>
                                <Typed
                                    strings={['I build things for the web', 'I make websites attractive']}
                                    typeSpeed={60}
                                    backSpeed={50}
                                    loop
                                />
                            </div>

                            <div className='text-center text-gray-500 px-2 pb-4 '>
                                <p>Innovative Front End Developer with good experience in maintaining and building web pages. I like to craft solid and scalable frontend products with great user experiences.</p>
                            </div>
                            <div className='flex flex-col text-gray-500'>
                                <button className='header-button'>
                                    Hire Me
                                </button>
                                <button className='header-button '>
                                    View Resume
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* text end */}

                    {/* Container end */}

                    {/* Social Media  */}
                    <div className='py-6 px-8 max-w-[300px] m-auto flex justify-center flex-shrink-0 items-center space-x-16 text-gray-300'>
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
                    {/* Social Media end */}
                </div>
            </section>
            {/* section end */}
        </>
    )
}

export default Header