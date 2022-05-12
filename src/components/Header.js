import React from 'react';
import Typed from 'react-typed';
import { FaTwitter, FaInstagramSquare } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Tada from 'react-reveal/Tada';
import LightSpeed from 'react-reveal/LightSpeed';
// import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';


const Header = () => {

    return (
        <>
            {/* Section */}
            <section className='h-[100%] pt-24 pb-12 contact-container' id='header' >

                {/* Container */}
                <div className='max-w-[780px] m-auto flex flex-col' >

                    {/* Text */}
                    <div className='flex flex-col items-center justify-center py-8' >
                        <div className='flex flex-col justify-center items-center '>
                            <div className='text-md font-semibold py-2 text-gray-500 md:text-xl'>
                                <h1>Hii, My Name is</h1>
                            </div>

                            <Tada>
                                <div className='text-4xl font-bold text-white pb-2 sm:text-5xl md:text-6xl lg:text-7xl'>
                                    <h1>Sumit Verma</h1>
                                </div>
                            </Tada>

                            <div className='py-4 text-xl font-semibold capitalize text-gray-400  md:text-2xl lg:text-3xl'>
                                <Typed
                                    strings={['I build things for the web', 'I make websites attractive']}
                                    typeSpeed={60}
                                    backSpeed={50}
                                    loop
                                />
                            </div>

                            <div className='pb-2' >
                                <h1 className='text-lg text-gray-500 font-semibold md:text-xl' >Frontend Developer</h1>
                            </div>

                            <div className='text-center text-gray-500 px-2 pb-4 text-md sm:text-lg md:text-xl '>
                                <Fade left big>
                                    <p >Innovative Front End Developer with good experience in maintaining and building web pages. I like to craft solid and scalable frontend products with great user experiences.</p>
                                </Fade>
                            </div>
                            <div className='flex flex-col text-gray-500'>
                                <LightSpeed left>
                                    <a className='header-button  font-semibold sm:text-lg md:text-xl lg:text-2xl' href='#contact'>
                                        Hire Me
                                    </a>
                                </LightSpeed>
                                <LightSpeed right>
                                    <a className='header-button  font-semibold sm:text-lg md:text-xl lg:text-2xl' href='../image/Resume.pdf' target='_blank' rel='noreferrer'>
                                        View Resume
                                    </a>
                                </LightSpeed>
                            </div>
                        </div>
                    </div >
                    {/* text end */}

                    {/* Container end */}

                    {/* Social Media  */}
                    <div className='py-6 px-8 max-w-[600px] m-auto flex justify-center flex-shrink-0 items-center space-x-16 sm:space-x-20 md:space-x-28 lg:space-x-36 text-gray-300'>
                        {/* Github */}
                        <Fade bottom big>
                            <a href="https://github.com/SUM-X-0604" target="_blank" rel="noreferrer" >
                                <AiFillGithub size={20} />
                            </a>
                        </Fade>
                        {/* Twitter */}
                        <Fade top big>
                            <a href="https://twitter.com/_Fire_hawk" target="_blank" rel="noreferrer">
                                <FaTwitter size={20} />
                            </a>
                        </Fade>
                        {/* Linkedin */}
                        <Fade bottom big>

                            <a href="https://www.linkedin.com/in/sumit-verma-07835a210/" target="_blank" rel="noreferrer">
                                <AiFillLinkedin size={20} />
                            </a>
                        </Fade>

                        {/* instagram */}
                        <Fade top big>

                            <a href="https://www.instagram.com/__fire_hawk/" target="_blank" rel="noreferrer">
                                <FaInstagramSquare size={20} />
                            </a>
                        </Fade>
                    </div>
                    {/* Social Media end */}
                </div >
            </section >
            {/* section end */}
        </>
    )
}

export default Header