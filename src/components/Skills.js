import React from 'react';
import { RiBracesFill } from 'react-icons/ri';

const Skills = () => {
    return (
        <div>
            {/* heading */}
            <div className='flex justify-center'>
                <h1 className='py-4 text-2xl font-bold text-gray-600 '>SKILLS</h1>
            </div>

            {/* skills header */}
            <div className='flex py-4'>
                <div className='pl-4'>
                    <RiBracesFill className='h-8 w-8' />
                </div>
                <div className='pl-6'>
                    <p>
                        Frontend Developement
                    </p>
                    <p className='py-1'>More than a year</p>
                </div>
            </div>

            <div className='skillsList grid gap-y-1'>
                <div>
                    <div className='skillItem '>
                        <h3 className='pl-10'>HTML5</h3>
                        <i className="devicon-html5-plain-wordmark colored  pr-10"></i>
                    </div>
                </div>
                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>Css3</h3>
                        <i className="devicon-css3-plain-wordmark colored pr-10"></i>
                    </div>
                </div>
                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>TAILWIND</h3>
                        <i className="devicon-tailwindcss-original-wordmark colored pr-10"></i>
                    </div>
                </div>
                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>BOOTSTRAP</h3>
                        <i className="devicon-bootstrap-plain-wordmark colored pr-10"></i>
                    </div>
                </div>
                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>JS</h3>
                        <i className="devicon-javascript-plain colored pr-10"></i>
                    </div>
                </div>

                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>React</h3>
                        <i className="devicon-react-original-wordmark colored pr-10"></i>
                    </div>
                </div>

                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>Next.js</h3>
                        <i className="devicon-nextjs-original-wordmark colored pr-10"></i>

                    </div>
                </div>

                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>Firebase</h3>
                        <i className="devicon-firebase-plain-wordmark colored pr-10"></i>
                    </div>
                </div>

                <div>
                    <div className='skillItem'>
                        <h3 className='pl-10'>GitHub</h3>
                        <i className="devicon-github-original-wordmark colored pr-10"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills