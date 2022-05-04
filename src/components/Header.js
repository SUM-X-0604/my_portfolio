import React from 'react';
import Typed from 'react-typed';
import image from '../image/WhatsApp.jpeg';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const Header = () => {
    return (
        <>
            {/* Section */}
            <section className='h-full bg-slate-700 '>

                {/* Container */}
                <div className='max-w-[1140px] m-auto flex flex-col md:flex-row md:justify-between '>
                    {/* Text */}
                    <div className='flex flex-col items-center justify-center pt-10 md:pb-10'>
                        <div className='flex flex-col justify-center items-center  md:flex md:flex-col md:justify-center md:items-start md:px-20'>
                            <div className='text-2xl font-bold'>
                                <h1>Hii</h1>
                            </div>
                            <div className='text-2xl font-bold'>
                                <h1>I am <span className='text-red-600'>SUMIT</span></h1>
                            </div>
                            <div className='text-2xl font-bold'>
                                <Typed
                                    strings={['I am a Developer ', 'I am a Designer', 'I am a Vlogger']}
                                    typeSpeed={60}
                                    backSpeed={50}
                                    loop
                                />
                            </div>
                            <button className='bg-blue-600 px-6 py-2 mt-4 rounded-xl font-semibold text-white shadow-sm hover:shadow-gray-500 /40 hover:shadow-lg active:scale-110 transition duration-600'>
                                Download CV
                            </button>
                        </div>
                    </div>
                    {/* image */}
                    <div className='pt-20 px-8 flex items-center justify-center  '>
                        <img src={image} alt="" />
                    </div>
                </div>


                {/* Social Media  */}
                <div className='py-6 px-8 max-w-[300px] m-auto flex justify-center flex-shrink-0 items-center space-x-16 '>
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

            </section>
        </>
    )
}

export default Header