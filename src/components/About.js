import React from 'react';
import image from '../image/about.svg';


const About = () => {
    return (
        <div>
            <section className='py-2 top-0'>

                {/* heading */}
                <div className='flex justify-center'>
                    <h1 className='py-4 text-2xl font-bold text-gray-400 '>ABOUT ME</h1>
                </div>

                {/* container */}
                <div className='flex flex-col justify-center items-center'>

                    {/* Text container */}
                    <div className='px-4 flex flex-col justify-center items-center md:max-w-[500px]'>
                        {/* Details */}
                        <div className='px-8 text-lg flex justify-center items-center flex-col text-gray-500'>
                            <div>
                                <p>Hello, my name is <span className='font-semibold'>Sumit Verma.</span><br /> I am a Frontend web developer who resides in Raipur(C.G.). I am BCA Graduate and MCA second year student.
                                    <br /> My job is to create attractive websites that users can easily interact with.
                                    <br /> My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                                    <br />
                                    Currently, I am seeking an entry level job in Frontend web development to utilize my digital skills and gain industry knowledge.

                                    <br /><br />
                                    Here are techonologies I've been working with currently:
                                </p>
                            </div>
                            {/* techs */}
                            <div className='flex justify-center'>
                                <div className='tech py-8'>
                                    <p >HTML5
                                        <i className="devicon-html5-plain-wordmark colored px-1 ">
                                        </i>
                                    </p>
                                    <p >CSS3
                                        <i className="devicon-css3-plain-wordmark colored px-1">
                                        </i>
                                    </p>
                                    <p >TAILWIND
                                        <i className="devicon-tailwindcss-original-wordmark colored px-1">
                                        </i>
                                    </p>
                                    <p >JAVASCRIPT
                                        <i className="devicon-javascript-plain colored px-1">
                                        </i>
                                    </p>
                                    <p >REACT
                                        <i className="devicon-react-original-wordmark colored px-1">
                                        </i>
                                    </p>
                                    <p >NEXT JS
                                        <i className=" devicon-nextjs-original px-1">
                                        </i>
                                    </p>
                                    <p >FIREBASE
                                        <i className="devicon-firebase-plain-wordmark colored px-1 ">
                                        </i>
                                    </p>
                                    <p >GITHUB
                                        <i className="devicon-github-original px-1">
                                        </i>
                                    </p>
                                </div>
                            </div>

                        </div >
                    </div >

                    {/* Image */}
                    <div className='py-4 px-8' >
                        <img src={image} alt="" />
                    </div >
                </div >
            </section >
        </div >
    )
}

export default About