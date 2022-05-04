import React from 'react';
import Typed from 'react-typed';
import image from '../image/WhatsApp.jpeg'
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* Section */}
            <section className='m-auto h-full bg-slate-700 '>

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

                    {/* Social Media  */}
                    <div className='py-8 flex justify-center items-center space-x-8'>
                        <Link to={{ pathname: "https://github.com/SUM-X-0604" }} target="_blank">
                            <AiFillGithub size={20} />
                        </Link>
                        <AiFillLinkedin size={20} />
                        <FaInstagramSquare size={20} />
                        <FaTwitter size={20} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Header