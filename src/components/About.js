import React from 'react';
import image from '../image/WhatsApp.jpeg';


const About = () => {
    return (
        <>
            <section className='py-8 top-0'>

                {/* heading */}
                <div>
                    <h1 className='py-4 text-2xl underline font-bold text-[#5977D6] flex justify-center'>ABOUT ME</h1>
                </div>


                {/* container */}
                <div className='max-w-[1140px] m-auto flex flex-col justify-center items-center md:flex-row'>

                    {/* Image */}
                    <div className='py-4 px-8'>
                        <img src={image} alt="" />
                    </div>

                    {/* Text container */}
                    <div className='px-4 flex flex-col justify-center items-center md:max-w-[500px]'>
                        {/* name */}
                        <div className='pb-4 flex  items-start'>
                            <h1 className='text-2xl md:text-4xl font-bold'>Hii it's me, <span className='text-red-600 '>SUMIT</span></h1>
                        </div>

                        {/* Details */}
                        <div className='px-8 text-lg flex justify-center items-center md:text-xl'>
                            <p>A Frontend web developer who resides in Raipur, Chhattisgarh. My job is to create attractive websites that users can easily interact with. I am BCA Graduate. Currently, I am seeking an entry level job in Frontend web development utilize my digital skills and gain industry knowledge.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About