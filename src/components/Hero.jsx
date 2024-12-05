import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className='img h-[100vh]'>
            <div>
                <Navbar />
                <div className='flex flex-col pt-36 pl-44'>
                    <div className='border-2 w-[50vw] h-[70vh] bg-black border-black ml-80'>
                    <p className='text-[2rem] font-bold italic text-white'>Hi I am</p>
                    <p className='text-[4rem] font-bold text-[#FFB016]'>Henrrike Quarshie</p>
                    <p className='text-[3rem] font-bold text-white'>Junior Frontend Developer</p>
                    <div className='mt-3'>
                        <button className='border-2 py-2 px-2 rounded-full bg-[#FFB016] border-[#FFB016]'>Hire Me</button>
                        <button className='border-2 py-2 px-2 rounded-full text-black bg-white border-white'>My works</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;