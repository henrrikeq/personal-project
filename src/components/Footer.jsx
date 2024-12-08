// import React, { useState, useEffect } from 'react';
// import { TfiLocationPin } from 'react-icons/tfi';
// import { LiaPhoneVolumeSolid } from 'react-icons/lia';
// import { TfiEmail } from 'react-icons/tfi';
// import { FaChevronUp } from "react-icons/fa";
// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Track scroll position to toggle button visibility
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById('hero');
//       const heroOffsetTop = heroSection ? heroSection.offsetTop : 0;
//       const scrollPosition = window.scrollY;

//       // Show button if the user scrolls past the hero section
//       setIsVisible(scrollPosition > heroOffsetTop);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Scroll to Hero section
//   const scrollToHero = () => {
//     const heroSection = document.getElementById('hero');
//     if (heroSection) {
//       heroSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <div className="h-[25rem]">
//         <p className="flex text-[3rem] justify-center text-[#ffb016] font-bold mt-40">
//           Want to work with me?
//         </p>
//         <div>
//           <div className="flex flex-col ml-10 w-[45%]">
//             <p className="flex text-[2.5rem] font-semibold ml-20">Contact Me</p>
//             <div className="flex border-2 w-[80rem] h-[10rem] justify-around items-center bg-[#ffb016] border-[#ffb016] mt-5 relative">
//               <div className="flex gap-3">
//                 <p className="text-[3.5rem] text-white mt-4">
//                   <TfiLocationPin />
//                 </p>
//                 <div>
//                   <p className="text-[18px] font-semibold mb-1">Address:</p>
//                   <p className="mb-1 text-[14px]">P.O.Box 112, Accra-North</p>
//                   <p className="text-[14px]">Oyarifa, Greenhill</p>
//                 </div>
//               </div>
//               <div className="flex gap-3">
//                 <p className="text-[3.5rem] text-white mt-4">
//                   <LiaPhoneVolumeSolid />
//                 </p>
//                 <div>
//                   <p className="text-[18px] font-semibold mb-1">Phone:</p>
//                   <p className="mb-1 text-[14px]">+233 244 259 239</p>
//                   <p className="text-[14px]">+233 504 010 643</p>
//                 </div>
//               </div>
//               <div className="flex gap-4">
//                 <p className="text-[3rem] text-white mt-2">
//                   <TfiEmail />
//                 </p>
//                 <div>
//                   <p className="text-[18px] font-semibold mb-1">Email Address:</p>
//                   <p className="text-[14px]">henrrikequarshie@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll-to-top Button */}
//         {isVisible && (
//           <div
//             className="fixed right-4 bottom-[10%] flex items-center justify-center border-2 w-8 h-8 bg-[#ffb016] border-[#ffb016] text-white shadow-2xl cursor-pointer transform translate-y-1/2"
//             onClick={scrollToHero}
//           >
//             <p className='text-[15px]'>
//               <FaChevronUp />
//             </p>
//           </div>
//         )}
        
//           <div className="w-full text-center py-4 text-gray-500 text-[12px] mt-5">
//             Copyright&copy;{new Date().getFullYear()} Henrrike.All Rights Reserved.
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from 'react';
import { TfiLocationPin } from 'react-icons/tfi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { TfiEmail } from 'react-icons/tfi';
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroOffsetTop = heroSection ? heroSection.offsetTop : 0;
      const scrollPosition = window.scrollY;

      // Show button if the user scrolls past the hero section
      setIsVisible(scrollPosition > heroOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to Hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="py-10 px-5 bg-gray-50">
        {/* Call to Action */}
        <p className="text-center text-[#ffb016] text-[2rem] sm:text-[3rem] font-bold">
          Want to work with me?
        </p>

        {/* Contact Information */}
        <div className="flex flex-col items-center mt-8 space-y-5">
          <p className="text-[1.5rem] sm:text-[2.5rem] font-semibold">Contact Me</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[90rem] bg-[#ffb016] text-white p-6 shadow-md">
            {/* Address */}
            <div className="flex items-center gap-4">
              <TfiLocationPin className="text-[2.5rem] sm:text-[3rem]" />
              <div className='text-black'>
                <p className="text-[1rem] sm:text-[1.2rem] font-semibold">Address:</p>
                <p className="text-sm">P.O.Box 112, Accra-North</p>
                <p className="text-sm">Oyarifa, Greenhill</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <LiaPhoneVolumeSolid className="text-[2.5rem] sm:text-[3rem]" />
              <div className='text-black'>
                <p className="text-[1rem] sm:text-[1.2rem] font-semibold">Phone:</p>
                <p className="text-sm">+233 244 259 239</p>
                <p className="text-sm">+233 504 010 643</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <TfiEmail className="text-[2.5rem] sm:text-[3rem]" />
              <div className='text-black'>
                <p className="text-[1rem] sm:text-[1.2rem] font-semibold">Email Address:</p>
                <p className="text-sm">henrrikequarshie@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-to-top Button */}
        {isVisible && (
          <div
            className="fixed right-4 bottom-4 flex items-center justify-center w-10 h-10 bg-[#ffb016] text-white shadow-lg cursor-pointer"
            onClick={scrollToHero}
          >
            <FaChevronUp className="text-[1.5rem]" />
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          Copyright&copy;{new Date().getFullYear()} Henrrike. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
