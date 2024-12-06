import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className='img h-[100vh]'>
            <div>
                <Navbar />
                <div className='flex flex-col pt-36 pl-44'>
                    <div className='border-2 w-[50vw] h-[70vh] bg-black border-black ml-80'>
                        <div className='flex flex-col m-14'>
                            <p className='text-[2rem] font-bold italic text-white'>Hello I am</p>
                            <p className='text-[4rem] font-bold text-[#FFB016]'>Henrrike Quarshie</p>
                            <p className='text-[2.5rem] font-bold text-white'>Junior Frontend Developer</p>
                            <div className='flex gap-5 mt-3'>
                                <button className='border-2 text-[13px] font-semibold py-2 px-2 rounded-full bg-[#FFB016] border-[#FFB016]'>HIRE ME</button>
                                <button className='border-2 text-[13px] font-semibold py-2 px-2 rounded-full text-black bg-white border-white'>MY WORKS</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;