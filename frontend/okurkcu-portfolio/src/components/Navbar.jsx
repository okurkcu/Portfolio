import React from 'react'
import NavLogo from '../../public/OK-Logo.png'

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-sm border-b border-white/10 shadow-sm shadow-black/10">
        {/* Left side */}
        <button className="flex items-center gap-4 bg-transparent border-none hover:cursor-pointer">
          <img src={NavLogo} alt="Logo" className="h-[6vh]" />
          <div className="font-[Syne] font-extrabold text-gray-100 text-base">
            Ozan Kürkçü
          </div>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-[1.5vw]">
          <button className="text-gray-500 font-[Inter] font-semibold text-sm tracking-wider bg-transparent border-none hover:text-white transition duration-200 cursor-pointer">
            About
          </button>
          <button className="text-gray-500 font-[Inter] font-semibold text-sm tracking-wider bg-transparent border-none hover:text-white transition duration-200 cursor-pointer">
            Experience
          </button>
          <button className="text-gray-500 font-[Inter] font-semibold text-sm tracking-wider bg-transparent border-none hover:text-white transition duration-200 cursor-pointer">
            Projects
          </button>
          <button className="text-gray-500 font-[Inter] font-semibold text-sm tracking-wider bg-transparent border-none hover:text-white transition duration-200 cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar