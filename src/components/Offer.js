import React from 'react';
import project from '../image/newproject.png'

const Offer = () => {
    return (
        <div className='h-full max-w-[800px] m-auto rounded-lg bg-[#100E1B]' >
            <div className='flex flex-col items-center justify-center px-4 m-auto py-8 flex-wrap'>
                {/* left */}
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className='text-gray-400 font-bold text-xl'>You Have a new project?</h1>
                    <p className='text-gray-500 font-semibold py-2'>Contact me now and get a huge discount on your new project.</p>
                </div>
                {/* right */}
                <div className='pt-4'>
                    <img src={project} alt="" className='h-48 w-60' />
                </div>

            </div>
        </div>
    )
}

export default Offer