// HeroSection.js

import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex flex-wrap overflow-hidden`}>
      <div className="w-full overflow-hidden sm:w-1/2 lg:w-1/2">
        {/* Imagen 1 clicable */}
        <a href="#link1" className="block w-full h-full">
          <img src="../img/tyr.jpg" alt="Descripción de la imagen 1" className="w-full h-full object-cover"/>
        </a>
      </div>

      <div className=" w-full overflow-hidden sm:w-1/2 lg:w-1/4 lg:h-1/2">
        {/* Imagen 2 clicable */}
        <a href="#link2" className="block w-full h-full">
          <img src="../img/legacy-lifter.jpg" alt="Descripción de la imagen 2" className="w-full h-full object-cover"/>
        </a>
        {/* Imagen 3 clicable */}
        <a href="#link3" className="block w-full h-full">
          <img src="../img/box.jpg" alt="Descripción de la imagen 3" className="w-full h-full object-cover"/>
        </a>
      </div>


      <div className=" w-full overflow-hidden sm:w-1/2 lg:w-1/4">
        {/* Imagen 4 clicable */}
        <a href="#link4" className="block w-full h-full">
          <img src="../img/pack-accesorios.jpg" alt="Descripción de la imagen 4" className="w-full h-full object-cover"/>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
