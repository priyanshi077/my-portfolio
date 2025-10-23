 import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="bg-black rounded-full shadow-lg max-w-4xl mx-auto mt-10">
        <div className="flex items-center justify-between relative">
          {/* left logo - Always visible */}
          <div className="flex items-center justify-center p-4 md:p-0">
            <span className="font-bold text-xl text-white ml-4">PRIYANSHI</span>
          </div>

          {/* Hamburger button - Visible on mobile only */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-4 focus:outline-none"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>

          {/* Navigation Links - Hidden on mobile unless menu is open */}
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 mt-4 md:mt-0 bg-black md:bg-transparent rounded-3xl md:rounded-none flex-col md:flex-row w-full md:w-auto`}>
            {/* Left nav */}
            <div className="flex flex-col md:flex-row md:space-x-6 text-white px-4 py-2 font-semibold">
              <a href="#home" className="font-semibold hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                Home
              </a>
              <a href="#experience" className="font-medium hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                About
              </a>
              <a href="#service" className="font-medium hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                Service
              </a>
            </div>

            {/* Right nav */}
            <div className="flex flex-col md:flex-row md:space-x-6 text-white px-4 py-2 font-semibold">
              <a href="#resume" className="font-medium hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                Resume
              </a>
              <a href="#blog" className="font-medium hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                Project
              </a>
              <a href="#contact" className="font-medium hover:bg-orange-400 rounded-full px-6 py-3 text-center">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
