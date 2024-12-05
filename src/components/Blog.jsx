import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className='h-[100vh]'>
        <p className='flex text-[3rem] justify-center text-[#FFB016] font-bold mt-20'>Projects</p>
        <div className='grid grid-cols-2 ml-40 w-[80vw] mt-12'>
          <img src="./src/assets/images/demo.png" alt="" className='w-[38vw] h-[40vh]' />
          <img src="./src/assets/images/advert.png" alt="" className='w-[38vw] h-[40vh] ' />
          <img src="./src/assets/images/agric.png" alt="" className='w-[38vw] h-[40vh] mt-5' />
          <img src="./src/assets/images/lib.png" alt="" className='w-[38vw] h-[40vh] mt-5' />
        </div>
      </div>

    </div>
  )
}

export default Blog;