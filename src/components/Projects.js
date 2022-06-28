import React from 'react';
import amazon from '../image/amazon.PNG';
import crypto from '../image/crypto.PNG';
import college from '../image/college.PNG';
import movies from '../image/hulu.PNG'
import ngo from '../image/nikk-social.PNG'
import Zoom from 'react-reveal/Zoom';
import dashboard from '../image/dashboard.PNG'

const Projects = () => {
    return (
        // Projects container
        <div className='py-10 max-w-[1240px] m-auto' id='projects'>
            {/* container */}
            <div>
                {/* header section */}
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl font-bold text-gray-400 sm:text-3xl md:text-4xl lg:text-5xl'>
                        PROJECTS
                    </h1>
                </div>

                {/* project details section */}
                <div className='py-10 flex items-center justify-center flex-wrap'>

                    {/*1st project items */}
                    <div className='flex justify-center items-center flex-grow py-4'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='https://amazon-clone-plum-two.vercel.app/' target='_blank' rel="noreferrer" >
                                    <img src={amazon} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2 ' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl'>AMAZON CLONE</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Tailwind</p>
                                <p className='py-3'>ReactJS</p>
                                <p className='py-3'>Context Api</p>
                            </div>
                        </div>
                    </div>
                    {/*1st project items end */}



                    {/*2nd project items */}
                    <div className='flex justify-center items-center flex-grow py-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='https://crypro-tracker.vercel.app/' target='_blank' rel="noreferrer">
                                    <img src={crypto} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl'>CRYPTO TRACKER</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Tailwind</p>
                                <p className='py-3'>ReactJS</p>
                                <p className='py-3'>Api</p>
                            </div>
                        </div>
                    </div>
                    {/*2nd project items end */}


                    {/*3rd project items */}
                    <div className='flex justify-center items-center flex-grow'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center'>
                            <Zoom bottom>
                                <a href='https://admin-dashboard-livid.vercel.app/' target='_blank' rel="noreferrer">
                                    <img src={dashboard} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl'>ADMIN DASHBOARD</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Tailwind</p>
                                <p className='py-3'>React Js</p>
                                <p className='py-3'>React Chart Js</p>
                            </div>
                        </div>
                    </div>
                    {/*3rd project items end */}

                    {/* 4th project items start */}
                    <div className='flex justify-center items-center flex-grow lg:pt-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='https://nikk-social.vercel.app/' target='_blank' rel="noreferrer">
                                    <img src={ngo} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl '>NGO WEBSITE</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Tailwind</p>
                                <p className='py-3'>JavaScript</p>
                                <p className='py-3'>React</p>
                            </div>

                        </div>
                    </div>
                    {/* 4th project items end */}


                    {/*4th project items */}
                    <div className='flex justify-center items-center flex-grow pt-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='https://hulu-five-lac.vercel.app/' target='_blank' rel="noreferrer">
                                    <img src={movies} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl'>MOVIES LIST</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Tailwind</p>
                                <p className='py-3'>Movies Api</p>
                                <p className='py-3'>Next Js</p>
                            </div>

                        </div>
                    </div>
                    {/*4th project items end */}

                    {/*5th project items */}
                    <div className='flex justify-center items-center flex-grow pt-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='https://college-website-theta.vercel.app/' target='_blank' rel="noreferrer">
                                    <img src={college} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow px-2' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-xl md:text-2xl'>COLLEGE WEBSITE</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p className='py-3'>Html</p>
                                <p className='py-3'>Sass</p>
                                <p className='py-3'>JavaScript</p>
                            </div>
                        </div>
                    </div>
                    {/*5th project items end */}

                </div>

            </div>
        </div >
    )
}

export default Projects