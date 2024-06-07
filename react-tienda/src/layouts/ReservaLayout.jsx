import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';
import ThemeContext from '../context/ThemeContext'
import Header from '../components/Header'

import Footer from '../components/Footer'


export default function reservaLayout() {

  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    <main >
        <Header />
       
        
        <div >
        <Outlet/>
        </div>
        <Footer/>    
    </main> 
    </ThemeContext.Provider>
    </>
  )
}

