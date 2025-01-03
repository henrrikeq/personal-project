
// import { RxDotFilled } from "react-icons/rx";
// const Resume = () => {
//   return (
//     <div className='h-[140vh] bg-[#ffb016]'>
//       <div>
//         <p className='flex text-[3rem] justify-center text-white font-bold mt-20'>Resume</p>
//         <div className="flex justify-center">
//         <div>
//           <p className="flex text-[2.5rem] font-semibold">Education</p>
//           <div className='flex flex-col mr-20 '>
//             <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[20px] font-bold'>2015-2018</p>
//               <p className='text-[20px]'>GENERAL SCIENCE</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[18px] font-semibold'>Krobo Girls' Senior High School</p>
//               </div>
//             </div>
//             <div className='h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[20px] font-bold'>2018-2022</p>
//               <p className='text-[20px]'>BIOLOGICAL SCIENCE</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[18px] font-semibold'>Kwame Nkrumah University of Science and Technology</p>
//               </div>
//             </div>
//             <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[18px] font-bold'>2024 - Present</p>
//               <p className='text-[20px]'>MEST</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[20px] font-semibold'>Web Developement</p>
//               </div>
//               <div className='flex ml-1.5'>
//                 <p><RxDotFilled /></p>
//                 <p>HTML, CSS, REACT and TAILWIND</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-2 rounded-full h-[70vh] mt-32 bg-[#e5e7eb]"></div>
//         <div className="ml-12">
//           <p className="flex text-[2.5rem] font-semibold">Experience</p>
//           <div className="flex flex-col">
//             <div className=' h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[18px] font-bold'>October,2021 - November,2021</p>
//               <p className='text-[20px]'>INTERNSHIP</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[18px] font-semibold'>Council For Scientific And Industrial Research</p>
//               </div>
//               <div className='flex ml-1.5'>
//                 <p><RxDotFilled /></p>
//                 <p>Microbiology Division</p>
//               </div>
//             </div>
//             <div className='h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[18px] font-bold'>2022 - 2023</p>
//               <p className='text-[20px]'>NATIONAL SERVICES</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[18px] font-semibold'>Council For Scientific And Industrial Research</p>
//               </div>
//               <div className='flex ml-1.5'>
//                 <p ><RxDotFilled /></p>
//                 <p>Commercial Division</p>
//               </div>
//             </div>

//             <div className='  h-[35vh] w-[30vw] gap-3 p-4'>
//               <p className='text-[18px] font-bold'>November,2024</p>
//               <p className='text-[20px]'>INTERNSHIP</p>
//               <div className='flex'>
//                 <p className='text-[28px] mt-0.5'><RxDotFilled /></p>
//                 <p className='text-[18px] font-semibold'>Coextreme Technologies LTD</p>
//               </div>
//               <div className='flex ml-1.5'>
//                 <p><RxDotFilled /></p>
//                 <p>Frontened Developer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Resume;


import { RxDotFilled } from "react-icons/rx";

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#ffb016] py-10">
      {/* Section Title */}
      <div className="text-center">
        <p className="text-[2.5rem] sm:text-[3rem] font-bold text-white">Resume</p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 mt-10 px-5">
        {/* Education Section */}
        <div>
          <p className="text-[2rem] sm:text-[2.5rem] font-semibold mb-5">Education</p>
          <div className="flex flex-col space-y-6">
            {/* Entry */}
            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">2015-2018</p>
              <p className="text-[18px] font-semibold">GENERAL SCIENCE</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Krobo Girls' Senior High School</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">2018-2022</p>
              <p className="text-[18px] font-semibold">BIOLOGICAL SCIENCE</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Kwame Nkrumah University of Science and Technology</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">2024 - Present</p>
              <p className="text-[18px] font-semibold">MEST</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Web Development</p>
              </div>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">HTML, CSS, REACT, and TAILWIND</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[2px] h-auto bg-gray-300"></div>

        {/* Experience Section */}
        <div>
          <p className="text-[2rem] sm:text-[2.5rem] font-semibold mb-5">Experience</p>
          <div className="flex flex-col space-y-6">
            {/* Entry */}
            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">October, 2021 - November, 2021</p>
              <p className="text-[18px] font-semibold">INTERNSHIP</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Council For Scientific And Industrial Research</p>
              </div>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Microbiology Division</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">2022 - 2023</p>
              <p className="text-[18px] font-semibold">NATIONAL SERVICE</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Council For Scientific And Industrial Research</p>
              </div>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Commercial Division</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white shadow-md rounded-lg">
              <p className="text-[18px] font-bold">November, 2024</p>
              <p className="text-[18px] font-semibold">INTERNSHIP</p>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Coextreme Technologies LTD</p>
              </div>
              <div className="flex items-start">
                <RxDotFilled className="text-[24px] text-[#ffb016]" />
                <p className="text-[16px]">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
