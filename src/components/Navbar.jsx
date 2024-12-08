// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [activeSection, setActiveSection] = useState("");

//   // Handle scroll and set active section
//   const handleScroll = () => {
//     const sections = ["about", "resume", "skills", "services", "blog", "footer"];
//     const scrollPosition = window.scrollY;

//     sections.forEach((section) => {
//       const element = document.getElementById(section);
//       if (element) {
//         const offsetTop = element.offsetTop;
//         const offsetHeight = element.offsetHeight;
        
//         // Check if the scroll position is within the section's range
//         if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight) {
//           setActiveSection(section);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
//       <div className="flex justify-around h-16 items-center">
//         {/* Logo Section */}
//         <div className="flex pl-20 font-bold self-center">
//           <p className="text-[3rem]">R</p>
//           <p className="text-[20px] pt-8">RIKE</p>
//         </div>

//         {/* Navigation Section */}
//         <nav className="flex gap-6 pr-10 font-semibold">
//           <a
//             href="#about"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "about" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             About
//           </a>
//           <a
//             href="#resume"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "resume" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             Resume
//           </a>
//           <a
//             href="#skills"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "skills" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             Skills
//           </a>
//           <a
//             href="#services"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "services" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             Services
//           </a>
//           <a
//             href="#blog"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "blog" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             Projects
//           </a>
//           <a
//             href="#footer"
//             className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "footer" ? "border-b-4 border-[#FFB016]" : ""}`}
//           >
//             Contact
//           </a>
//         </nav>

//         {/* Contact Section */}
//         <div className="flex mr-20 gap-2 border-2 p-2 px-7 py-3 bg-[#FFB016] text-[14px] text-white border-[#FFB016] hover:bg-black hover:text-white hover:border-black">
//           <p>Available for freelance work</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Handle scroll and set active section
  const handleScroll = () => {
    const sections = ["about", "resume", "skills", "services", "blog", "footer"];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        // Check if the scroll position is within the section's range
        if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
      <div className="flex justify-between h-16 items-center px-6 lg:px-20">
        {/* Logo Section */}
        <div className="flex font-bold">
          <p className="text-[3rem]">R</p>
          <p className="text-[20px] pt-8">RIKE</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded border-gray-600 hover:text-[#FFB016] hover:border-[#FFB016]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 5h16M4 12h16m-7 7h7" />
            )}
          </svg>
        </button>

        {/* Navigation Section */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex gap-6 items-center font-semibold transition-all duration-300`}
        >
          {[
            { id: "about", label: "About" },
            { id: "resume", label: "Resume" },
            { id: "skills", label: "Skills" },
            { id: "services", label: "Services" },
            { id: "blog", label: "Projects" },
            { id: "footer", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 px-3 transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#FFB016] after:scale-x-100"
                  : "text-gray-800 after:scale-x-0"
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#FFB016] after:transition-transform after:duration-300 after:scale-x-0 hover:text-[#FFB016] hover:after:scale-x-100`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Section */}
        <div className="hidden lg:flex ml-20 gap-2 border-2 p-2 px-7 py-3 bg-[#FFB016] text-[14px] text-white border-[#FFB016] hover:bg-black hover:text-white hover:border-black">
          <p>Available for freelance work</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
