import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';
import ThemeContext from '../context/ThemeContext'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection';

export default function HomeLayout() {

  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    <main >
        <Header />
        <HeroSection/>
        
        <div >
        <Outlet/>
        </div>
        <Footer/>    
    </main> 
    </ThemeContext.Provider>
    </>
  )
}
