import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className='img h-[100vh]'>
            <div>
                <Navbar />
                <div className='flex flex-col pt-36 pl-44'>
                    <p className='text-[2rem] font-bold italic'>Hi I am</p>
                    <p className='text-[5rem] font-bold text-[#FFB016]'>Henrrike Quarshie</p>
                    <p className='text-[3rem] font-bold'>Junior Frontend Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;