import React from 'react';
import { UilPhone } from '@iconscout/react-unicons';
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

const Contact = () => {
    return (
        <div className='pt-16 pb-8 '>
            {/* contact heading */}
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-gray-200'>Contact Me</h1>
                <p className='text-md text-gray-500 font-semibold'>Get in touch</p>
            </div>

            <div className='py-8 px-4 flex flex-col items-start'>

                {/* contact links 1st */}
                <div className='flex  items-center px-4 pt-8'>
                    <div className='pr-4' data-aos="fade-right">
                        <UilPhone className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' data-aos="fade-left">
                        <h1 className='text-xl font-bold text-gray-300'>Call Me</h1>
                        <p className='text-gray-500'>7999001618</p>
                    </div>
                </div>
                {/*end contact links 1st */}

                {/* contact links 2nd */}
                <div className='flex items-center px-4 pt-8'>
                    <div className='pr-4' data-aos="fade-right">
                        <AiOutlineMail className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' data-aos="fade-left">
                        <h1 className='text-xl font-bold text-gray-300'>Email</h1>
                        <p className='text-gray-500'>sumeet0604.sv@gmail.com</p>
                    </div>
                </div>
                {/*end contact links 2nd */}

                {/* contact links 3rd */}
                <div className='flex items-center px-4 pt-8'>
                    <div className='pr-4' data-aos="fade-right">
                        <BsWhatsapp className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' data-aos="fade-left">
                        <h1 className='text-xl font-bold text-gray-300'>Whatsapp</h1>
                        <p className='text-gray-500'>7999001618</p>
                    </div>
                </div>
                {/*end contact links 3rd */}

                {/* contact links 4th */}
                <div className='flex items-center px-4 pt-8'>
                    <div className='pr-4' data-aos="fade-right">
                        <GoLocation className="h-8 w-10 text-blue-700" />
                    </div>
                    <div className='leading-6' data-aos="fade-left">
                        <h1 className='text-xl font-bold text-gray-300'>Location</h1>
                        <p className='text-gray-500'>Raipur(CG), India</p>
                    </div>
                </div>
                {/*end contact links 4th */}

            </div>


        </div >
    )
}

export default Contact