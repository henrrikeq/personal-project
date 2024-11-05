import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-around h-16 items-center'>
        <div className='flex pl-20 font-bold'>
        <p className='text-[3rem]'>R</p>
        <p className='text-[20px] pt-8'>RIKE</p>
        </div>
        <nav className='flex gap-6 pr-10 font-semibold'>
          <p>About</p>
          <p>Resume</p>
          <p>Skills</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </nav>
        <div className='flex mr-20 gap-2 border-2 p-2 px-4 bg-[#FFB016] text-white border-[#FFB016]'>
          <p className="pt-1"><FaPhoneAlt /></p>
          <p>0244259239||0504010643</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;