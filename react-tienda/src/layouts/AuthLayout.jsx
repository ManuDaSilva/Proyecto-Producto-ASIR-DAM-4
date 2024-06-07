import { Outlet } from 'react-router-dom'
import React, { useContext, useState } from 'react';

import ThemeContext from '../context/ThemeContext';

export default function AuthLayout() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  
  
    return (
      <main className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} h-screen`}>
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} max-w-4xl m-auto pt-10 md:pt-28 flex flex-col md:flex-row items-center`}>
        <img 
          src="../img/warrior-transparent.png" 
          alt="logo marca"
          className="max-w-xs" 
        />
        <div className="p-10 w-full">
        <Outlet/>
        </div>   
        </div>   
      </main> 
    )
  }
  