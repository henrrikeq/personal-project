import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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
      <div className="flex justify-around h-16 items-center">
        {/* Logo Section */}
        <div className="flex pl-20 font-bold self-center">
          <p className="text-[3rem]">R</p>
          <p className="text-[20px] pt-8">RIKE</p>
        </div>

        {/* Navigation Section */}
        <nav className="flex gap-6 pr-10 font-semibold">
          <a
            href="#about"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "about" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            About
          </a>
          <a
            href="#resume"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "resume" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            Resume
          </a>
          <a
            href="#skills"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "skills" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            Skills
          </a>
          <a
            href="#services"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "services" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            Services
          </a>
          <a
            href="#blog"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "blog" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            Projects
          </a>
          <a
            href="#footer"
            className={`hover:text-[#FFB016] transition duration-300 ${activeSection === "footer" ? "border-b-2 border-[#FFB016]" : ""}`}
          >
            Contact
          </a>
        </nav>

        {/* Contact Section */}
        <div className="flex mr-20 gap-2 border-2 p-2 px-7 py-3 bg-[#FFB016] text-[14px] text-white border-[#FFB016]">
          <p>Available for freelance work</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
