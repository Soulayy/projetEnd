'use client'
import Link from "next/link";
import Logo from "./../../../../public/image/Soul-mate-Logo.png"
import React, { useState } from 'react';


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black w-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold">
                <img className="h-[80px] " src={Logo.src} alt="" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/Games" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Games
                </Link>
                <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Ouvrir le menu principal</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-10 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
          <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Preview</Link>
          <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About Us</Link>
          <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

