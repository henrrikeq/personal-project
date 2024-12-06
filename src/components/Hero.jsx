import React from 'react'
import Navbar from './Navbar';
import { TfiEmail } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';

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
                            <div className='flex flex-col gap-5 mt-3 text-white '>
                                <div className='flex gap-3'>
                                    <p className='mt-1 text-[#FFB016]'><TfiEmail /></p>
                                    <p className=''>henrrikequarshie@gmail.com</p>
                                </div>
                                <div className='flex gap-3'>
                                    <p className='mt-1 text-[#FFB016]'><LiaPhoneVolumeSolid /></p>
                                    <p>+233 244 259 239</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;