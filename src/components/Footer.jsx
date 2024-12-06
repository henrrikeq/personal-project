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
      <div className="h-[25rem]">
        <p className="flex text-[3rem] justify-center text-[#ffb016] font-bold mt-40">
          Want to work with me?
        </p>
        <div>
          <div className="flex flex-col ml-10 w-[45%]">
            <p className="flex text-[2.5rem] font-semibold ml-20">Contact Me</p>
            <div className="flex border-2 w-[80rem] h-[10rem] justify-around items-center bg-[#ffb016] border-[#ffb016] mt-5 relative">
              <div className="flex gap-3">
                <p className="text-[3.5rem] text-white mt-4">
                  <TfiLocationPin />
                </p>
                <div>
                  <p className="text-[18px] font-semibold mb-1">Address:</p>
                  <p className="mb-1 text-[14px]">P.O.Box 112, Accra-North</p>
                  <p className="text-[14px]">Oyarifa, Greenhill</p>
                </div>
              </div>
              <div className="flex gap-3">
                <p className="text-[3.5rem] text-white mt-4">
                  <LiaPhoneVolumeSolid />
                </p>
                <div>
                  <p className="text-[18px] font-semibold mb-1">Phone:</p>
                  <p className="mb-1 text-[14px]">+233 244 259 239</p>
                  <p className="text-[14px]">+233 504 010 643</p>
                </div>
              </div>
              <div className="flex gap-4">
                <p className="text-[3rem] text-white mt-2">
                  <TfiEmail />
                </p>
                <div>
                  <p className="text-[18px] font-semibold mb-1">Email Address:</p>
                  <p className="text-[14px]">henrrikequarshie@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-to-top Button */}
        {isVisible && (
          <div
            className="fixed right-4 bottom-[10%] flex items-center justify-center border-2 w-8 h-8 bg-[#ffb016] border-[#ffb016] text-white shadow-2xl cursor-pointer transform translate-y-1/2"
            onClick={scrollToHero}
          >
            <p className='text-[15px]'>
            <FaChevronUp />
            </p>
          </div>
        )}
        <div>
          <p className='flex mt-7'>Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
