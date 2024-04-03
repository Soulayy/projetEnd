'use client'
import React from 'react';
import Logo from "./../../../../public/image/Soul-mate-Logo.png"
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer py-12 w-screen flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
          <span className="text-gray-400 mx-4">•</span>
            <Link href="/">
              <Link href={""} className="text-gray-400 hover:text-white mr-8">
                Facebook
              </Link>
            </Link>
            <span className="text-gray-400 mx-4">•</span>
            <Link href="/">
              <Link href={""} className="text-gray-400 hover:text-white mr-8">
                Twitter
              </Link>
            </Link>
            <span className="text-gray-400 mx-4">•</span>
            <Link href="/">
              <Link href={""} className="text-gray-400 hover:text-white">
                LinkedIn
              </Link>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-base text-gray-400">
              <img src={Logo.src} alt="Logo" className="h-8 inline-block mr-2" />
              © 2024 Nom de votre entreprise. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

