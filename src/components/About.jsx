import React from 'react'
import Navbar from './Navbar';

const About = () => {
  return (
    <div >
      <div className='flex h-[100vh] mt-20'>
        <div className='bgm h-[100vh] w-[40vw] ml-20'>
          <img src="" alt="" />
        </div>
        <div className='w-[30vw] pl-10 flex flex-col space-y-3'>
          <p className='text-[3rem] font-bold text-[#FFB016]'>About Me</p>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
          <div className='flex flex-col space-y-3'>
            <div className='flex gap-16'>
              <p className='font-bold'>Name:</p>
              <p>Henrrike Quarshie</p>
            </div>
            <div className='flex gap-5'>
              <p className='font-bold'>Date of Bith:</p>
              <p>15/03/2001</p>
            </div>
            <div className='flex gap-12'>
            <p className='font-bold'>Address:</p>
            <p>P. O. Box 112, Accra-North</p>
            </div>
            <div className='flex gap-16'>
              <p className='font-bold'>Email:</p>
              <p>henrrikequarshie@gmail.com</p>
            </div>
            <div className='flex gap-14'>
              <p className='font-bold'>Phone:</p>
              <p>0244259239 || 0504010643</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;