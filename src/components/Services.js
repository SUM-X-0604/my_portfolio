import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import UiModal from './UiModal';
import FrontendModal from './FrontendModal'


const Services = () => {

    const [showUIModal, setShowUImodal] = useState(false)
    const [showFRModal, setShowFRmodal] = useState(false)

    const openUIModal = () => {
        setShowUImodal(!showUIModal)
    }

    const openFrModal = () => {
        setShowFRmodal(!showFRModal)
    }

    return (
        <div className='py-10'>
            <div className='h-48 w-80 bg-slate-200 mx-auto'>
                <div className='flex flex-col items-left pl-8 pt-12'>
                    <CgWebsite className='h-10 w-10 text-blue-800 ' />
                    <h1 className='pt-4 pb-2 text-xl font-semibold'>UI/UX Designer</h1>
                    <span className='w-32 font-semibold text-blue-900 flex items-center cursor-pointer' onClick={openUIModal}>
                        View More
                        <UiModal uiModal={showUIModal} />
                        <AiOutlineArrowRight className='h-10 w-4 mx-3 text-blue-900' />
                    </span>
                </div>
            </div>

            <div className='py-4'>
                <div className='h-48 w-80 bg-slate-200 mx-auto'>
                    <div className='flex flex-col items-left pl-8 pt-10'>
                        <div className='flex'>
                            <MdKeyboardArrowLeft className='h-16 w-8 text-blue-800 ' />
                            <MdKeyboardArrowRight className='h-16 w-8 text-blue-800 ' />
                        </div>
                        <h1 className='pb-2 text-xl font-semibold'>Frontend Developer</h1>
                        <button className='font-semibold text-blue-900 flex items-center cursor-pointer' onClick={openFrModal}>
                            View More
                            <FrontendModal frModal={showFRModal} />
                            <AiOutlineArrowRight className='h-10 w-4 mx-3 text-blue-900' />
                        </button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services