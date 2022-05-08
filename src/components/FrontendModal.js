import React from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai'


export default function UiModal({ frModal }) {

    return (
        <>

            {frModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-4 mx-auto max-w-xl transition-all ease in duration-150">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-slate-900">

                                {/*body*/}
                                <div className="relative p-4 flex-auto ">
                                    <div className="flex justify-start items-center ">
                                        <ul className="flex ">
                                            <li className="flex items-start">
                                                <AiOutlineCheckCircle className="h-10 w-4" />
                                            </li>
                                            <li className="px-3 py-2 text-white text-left">
                                                I develop highly responsive web applications
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-start items-center ">
                                        <ul className="flex ">
                                            <li className="flex items-start">
                                                <AiOutlineCheckCircle className="h-10 w-4" />
                                            </li>
                                            <li className="px-3 py-2 text-white text-left">
                                                I incorporate practical user UI strategies to build a perfect user interface
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-start items-center ">
                                        <ul className="flex ">
                                            <li className="flex items-start">
                                                <AiOutlineCheckCircle className="h-10 w-4" />
                                            </li>
                                            <li className="px-3 py-2 text-white text-left">
                                                i position your company's brand
                                            </li>
                                        </ul>
                                    </div>

                                </div>


                                {/*footer*/}

                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Close
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    );
}