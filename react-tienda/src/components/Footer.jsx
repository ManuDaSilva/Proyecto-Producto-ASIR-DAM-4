import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <>
      <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-4`}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo e información de copyright */}
          <div className="mb-2 md:mb-0">
          <img 
          src="../img/warrior-transparent.png" 
          alt="logo marca"
          className="w-40" 
        />
            <p className="text-sm text-center md:text-left">
              <strong>Warriorfit Zone</strong>
              <span> © 2024 Warriorfit ™. All Rights Reserved.</span>
            </p>
          </div>

          {/* Enlaces del footer */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a href="/about" className="text-sm hover:underline">About</a>
            <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/licensing" className="text-sm hover:underline">Licensing</a>
            <a href="/contact" className="text-sm hover:underline">Contact</a>
          </div>
        </div>
      </footer>

    </>
  )
}
