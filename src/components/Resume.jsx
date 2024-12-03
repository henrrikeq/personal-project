
import { RxDotFilled } from "react-icons/rx";
const Resume = () => {
  return (
    <div className='h-[140vh] bg-[#ffb016]'>
      <div>
        <p className='flex text-[3rem] justify-center text-white font-bold mt-20'>Resume</p>
        <div className="flex justify-center">
        <div>
          <p className="flex text-[2.5rem] font-semibold">Education</p>
          <div className='flex flex-col mr-20 '>
            <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>2015-2018</p>
              <p className='text-[28px]'>GENERAL SCIENCE</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Krobo Girls' Senior High School</p>
              </div>
            </div>
            <div className='h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>2018-2022</p>
              <p className='text-[28px]'>BIOLOGICAL SCIENCE</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Kwame Nkrumah University of Science and Technology</p>
              </div>
            </div>
            <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>2024 - Present</p>
              <p className='text-[28px]'>MEST</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Web Developement</p>
              </div>
              <div className='flex ml-1.5'>
                <p><RxDotFilled /></p>
                <p>HTML, CSS, REACT and TAILWIND</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-full h-[70vh] mt-32"></div>
        <div className="ml-12">
          <p className="flex text-[2.5rem] font-semibold">Experience</p>
          <div className="flex flex-col">
            <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>October,2021 - November,2021</p>
              <p className='text-[28px]'>INTERNSHIP</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Council For Scientific And Industrial Research</p>
              </div>
              <div className='flex ml-1.5'>
                <p><RxDotFilled /></p>
                <p>Microbiology Division</p>
              </div>
            </div>
            <div className='h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>2022 - 2023</p>
              <p className='text-[28px]'>NATIONAL SERVICES</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Council For Scientific And Industrial Research</p>
              </div>
              <div className='flex ml-1.5'>
                <p ><RxDotFilled /></p>
                <p>Commercial Division</p>
              </div>
            </div>

            <div className='  h-[35vh] w-[30vw] gap-3 p-4'>
              <p className='text-[25px] font-bold'>November,2024</p>
              <p className='text-[28px]'>INTERNSHIP</p>
              <div className='flex'>
                <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
                <p className='text-[20px] font-semibold'>Coextreme</p>
              </div>
              <div className='flex ml-1.5'>
                <p><RxDotFilled /></p>
                <p>Frontened Developer</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;