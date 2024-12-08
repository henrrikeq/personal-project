
// import Navbar from './Navbar';

// const About = () => {
//   return (
//     <div >
//       <div className='flex h-[80vh] mt-20'>
//         <div className=''>
//           <img src="./src/assets/images/1W7A7911.jpg" alt="" className='h-[75vh] ml-40'/>
//         </div>
//         <div className='w-[40vw] ml-20 flex flex-col space-y-3'>
//           <p className='text-[3rem] font-bold text-[#FFB016]'>About Me</p>
//           <p>I am a passionate Junior Frontend Developer with a strong academic background in Biological Science from Kwame Nkrumah University of Science and Technology. My blend of analytical expertise from the sciences and my enthusiasm for web development provides me with a unique perspective and sharp problem-solving skills.</p>
//           <div className='flex flex-col space-y-3 text-[17px]'>
//             <div className='flex gap-16'>
//               <p className='font-bold'>Name:</p>
//               <p className='ml-3'>Henrrike Sena Quarshie</p>
//             </div>
//             <div className='flex gap-5'>
//               <p className='font-bold'>Date of Bith:</p>
//               <p className='ml-1'>15/03/2001</p>
//             </div>
//             <div className='flex gap-12'>
//             <p className='font-bold'>Address:</p>
//             <p className='ml-3'>P. O. Box 112, Accra-North</p>
//             </div>
//             <div className='flex gap-16'>
//               <p className='font-bold'>Email:</p>
//               <p className='ml-4'>henrrikequarshie@gmail.com</p>
//             </div>
//             <div className='flex gap-14'>
//               <p className='font-bold'>Phone:</p>
//               <p className='ml-4'>0244259239 || 0504010643</p>
//             </div>
//             <div className='flex gap-14'>
//               <p className='font-bold'>Projects:</p>
//               <p>10</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About;


import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start h-auto lg:h-[80vh] mt-10 lg:mt-20">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <img
            src="./src/assets/images/1W7A7911.jpg"
            alt="Henrrike Quarshie"
            className="h-[60vh] lg:h-[75vh] w-auto rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-[90%] sm:w-[80%] lg:w-[40vw] lg:ml-20 mt-8 lg:mt-0 flex flex-col space-y-4 px-5 lg:px-0">
          <p className="text-[2rem] sm:text-[3rem] font-bold text-[#FFB016]">
            About Me
          </p>
          <p className="text-[1rem] sm:text-[1.2rem]">
            I am a passionate Junior Frontend Developer with a strong academic
            background in Biological Science from Kwame Nkrumah University of
            Science and Technology. My blend of analytical expertise from the
            sciences and my enthusiasm for web development provides me with a
            unique perspective and sharp problem-solving skills.
          </p>
          <div className="flex flex-col space-y-3 text-[0.9rem] sm:text-[1rem]">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Name:</p>
              <p>Henrrike Sena Quarshie</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Date of Birth:</p>
              <p>15/03/2001</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Address:</p>
              <p>P. O. Box 112, Accra-North</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Email:</p>
              <p>henrrikequarshie@gmail.com</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Phone:</p>
              <p>0244259239 || 0504010643</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-16">
              <p className="font-bold">Projects:</p>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
