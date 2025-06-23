import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900">
          MY PORTFOLIO
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#hero" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">Blog</a>
          <a href="#experience" className="hover:text-yellow-500">Experience</a>
          <a href="#projects" className="hover:text-yellow-500">Projects</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
