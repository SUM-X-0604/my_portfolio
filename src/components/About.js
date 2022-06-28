import React from 'react';
import image from '../image/about.svg';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';


const About = () => {
    return (
        <div>
            <section className='max-w-[1240px] m-auto py-8 top-0' id='about'>

                {/* heading */}
                <div className='flex justify-center pb-8 '>
                    <h1 className='text-2xl font-bold text-gray-300 sm:text-3xl md:text-4xl lg:text-5xl'>ABOUT ME</h1>
                </div>

                {/* container */}
                <div className='flex flex-col justify-center items-center md:flex-row'>

                    {/* Text container */}
                    <div className='px-4 flex flex-col justify-center items-center'>
                        {/* Details */}
                        <div className='px-8 flex justify-center items-center flex-col text-gray-400'>
                            <Slide bottom>
                                <div className='md:text-lg lg:text-xl capitalize'>
                                    <p>
                                        Hello, my name is
                                        <span className='font-semibold px-1'> Sumit Verma.
                                        </span>
                                    </p>
                                    <p>
                                        I am a Frontend web developer i live in Raipur(C.G.). I am BCA Graduate and MCA second year student.
                                    </p>

                                    <p>
                                        My job is to create attractive websites that user's can easily interact with.
                                    </p>
                                    <p>
                                        My main focus is to building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                                    </p>

                                    <p>
                                        Currently, I am seeking an entry level job in Frontend web development to utilize my digital skills and gain industry knowledge.
                                    </p>
                                    <br />
                                    <p>
                                        Here are techonologies I've been working with currently:
                                    </p>

                                </div>
                            </Slide>
                            {/* techs */}
                            <div className='flex justify-center'>
                                <div className='tech py-8 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]'>
                                    <Slide left>
                                        <p className='py-3'>
                                            HTML5
                                            <i className="devicon-html5-plain-wordmark colored px-1 ">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide right>
                                        <p className='py-3'>CSS3
                                            <i className="devicon-css3-plain-wordmark colored px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide left>
                                        <p className='py-3'>TAILWIND
                                            <i className="devicon-tailwindcss-original-wordmark colored px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide right>
                                        <p className='py-3' >JAVASCRIPT
                                            <i className="devicon-javascript-plain colored px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide left>
                                        <p className='py-3'>REACT
                                            <i className="devicon-react-original-wordmark colored px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide right>
                                        <p className='py-3'>NEXT JS
                                            <i className=" devicon-nextjs-original px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide left>

                                        <p className='py-3'>FIREBASE
                                            <i className="devicon-firebase-plain-wordmark colored px-1 ">
                                            </i>
                                        </p>
                                    </Slide>
                                    <Slide right>
                                        <p className='py-3' >GITHUB
                                            <i className="devicon-github-original px-1">
                                            </i>
                                        </p>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='py-4 px-10 sm:px-16 md:px-6 lg:px-2' >
                        <Zoom bottom>
                            <img src={image} alt="" />
                        </Zoom>
                    </div >
                </div >
            </section >
        </div >
    )
}

export default About