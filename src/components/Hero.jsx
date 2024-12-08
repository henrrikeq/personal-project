// import React from 'react'
// import Navbar from './Navbar';
// import { TfiEmail } from 'react-icons/tfi';
// import { LiaPhoneVolumeSolid } from 'react-icons/lia';

// const Hero = () => {
//     return (
//         <div className='img h-[100vh]'>
//             <div>
//                 <Navbar />
//                 <div className='flex flex-col pt-36 pl-44'>
//                     <div className='border-2 w-[50vw] h-[70vh] bg-black border-black ml-80'>
//                         <div className='flex flex-col m-14'>
//                             <p className='text-[2rem] font-bold italic text-white'>Hello I am</p>
//                             <p className='text-[4rem] font-bold text-[#FFB016]'>Henrrike Quarshie</p>
//                             <p className='text-[2.5rem] font-bold text-white'>Junior Frontend Developer</p>
//                             <div className='flex flex-col gap-5 mt-3 text-white '>
//                                 <div className='flex gap-3'>
//                                     <p className='mt-1 text-[#FFB016]'><TfiEmail /></p>
//                                     <p className=''>henrrikequarshie@gmail.com</p>
//                                 </div>
//                                 <div className='flex gap-3'>
//                                     <p className='mt-1 text-[#FFB016]'><LiaPhoneVolumeSolid /></p>
//                                     <p>+233 244 259 239</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero;


import React from 'react';
import Navbar from './Navbar';
import { TfiEmail } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';

const Hero = () => {
    return (
        <div >
            <div>
                <Navbar />
                <div className="img h-[100vh] bg-cover ">
                    <div className="flex flex-col justify-center items-center lg:pt-36 lg:pl-44 h-full">
                        <div className="border-2 w-[90%] sm:w-[70%] lg:w-[50vw] bg-black border-black p-8">
                            <div className="flex flex-col">
                                <p className="text-[1.5rem] sm:text-[2rem] font-bold italic text-white">
                                    Hello I am
                                </p>
                                <p className="text-[2.5rem] sm:text-[4rem] font-bold text-[#FFB016]">
                                    Henrrike Quarshie
                                </p>
                                <p className="text-[1.8rem] sm:text-[2.5rem] font-bold text-white">
                                    Junior Frontend Developer
                                </p>
                                <div className="flex flex-col gap-5 mt-3 text-white">
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[#FFB016]">
                                            <TfiEmail />
                                        </p>
                                        <p className="text-[0.9rem] sm:text-[1rem]">
                                            henrrikequarshie@gmail.com
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <p className="text-[#FFB016]">
                                            <LiaPhoneVolumeSolid />
                                        </p>
                                        <p className="text-[0.9rem] sm:text-[1rem]">+233 244 259 239</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
