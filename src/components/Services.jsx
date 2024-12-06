import React from 'react'

const Services = () => {
  return (
    <div>
      <div className='h-[60vh] bg-[#ffb016] mt-10'>
        <p className='flex text-[3rem] justify-center text-white font-bold mt-40'>Personal Services</p>
        <div className='flex gap-10 justify-center mt-10'>
          <div className='flex flex-col border-2 h-[12rem] w-[18rem] text-black bg-white border-white text-[20px] justify-center items-center shadow-2xl hover:bg-[black] hover:border-black hover:text-white'>
            <p>Web Developing</p>
            <p className='border-2 w-10 mt-3 border-[#ffb016] rounded-full'></p>
          </div>
          <div className='flex flex-col border-2 h-[12rem] w-[18rem] text-black bg-white border-white text-[20px] justify-center items-center shadow-2xl hover:bg-[black] hover:border-black hover:text-white'>
            <p>App Developing</p>
            <p className='border-2 w-10 mt-3 border-[#ffb016] rounded-full'></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;