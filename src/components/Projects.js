import React from 'react';
import amazon from '../image/amazon.PNG';
import crypto from '../image/crypto.PNG';
import college from '../image/college.PNG';
import game from '../image/number.PNG';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';



const Projects = () => {
    return (
        // Projects container
        <div className='py-10 max-w-[80%] m-auto' id='projects'>
            {/* container */}
            <div>
                {/* header section */}
                <div className='flex justify-center items-center'>
                    <h1 className='font-semibold text-gray-400 text-2xl '>
                        PROJECTS
                    </h1>
                </div>

                {/* project details section */}
                <div className='py-10 flex flex-wrap'>

                    {/*1st project items */}
                    <div className='flex justify-center items-center flex-grow'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='/'>
                                    <img src={amazon} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-2xl'>AMAZON CLONE</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p>Tailwind</p>
                                <p className='px-8'>REACTJS</p>
                                <p>CONTEXT API</p>
                            </div>
                        </div>
                    </div>
                    {/*1st project items end */}



                    {/*2nd project items */}
                    <div className='flex justify-center items-center flex-grow py-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='/'>
                                    <img src={crypto} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-2xl'>CRYPTO TRACKER</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p>Tailwind</p>
                                <p>REACTJS</p>
                                <p>AXIOS</p>
                                <p>COINGEKO API</p>
                            </div>

                        </div>
                    </div>
                    {/*2nd project items end */}


                    {/*3rd project items */}
                    <div className='flex justify-center items-center flex-grow'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center py-8 '>
                            <Zoom bottom>
                                <a href='/'>
                                    <img src={college} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-2xl'>COLLEGE WEBSITE</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p>HTML</p>
                                <p className='px-8'>SASS</p>
                                <p>JAVASCRIPT</p>
                            </div>

                        </div>
                    </div>
                    {/*3rd project items end */}


                    {/*4th project items */}
                    <div className='flex justify-center items-center flex-grow pt-8'>
                        {/* image */}
                        <div className='flex flex-col items-center justify-center '>
                            <Zoom bottom>
                                <a href='/'>
                                    <img src={game} alt="" className='h-44 w-[350px] rounded-md bg-cover bg-no-repeat flex-grow' />
                                </a>
                            </Zoom>
                            {/* h1 */}
                            <span className='pt-8 font-bold text-gray-500 text-2xl'>NUMBER GAME</span>
                            {/* techs */}
                            <div className='tech py-4'>
                                <p>HTML</p>
                                <p className='px-8'>CSS</p>
                                <p>JAVASCRIPT</p>
                            </div>

                        </div>
                    </div>
                    {/*4th project items end */}

                </div>

            </div>
        </div >
    )
}

export default Projects