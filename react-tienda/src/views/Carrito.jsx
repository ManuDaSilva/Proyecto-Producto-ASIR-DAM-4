import { Outlet } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import ThemeContext from '../context/ThemeContext';
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useTienda'
import Header from '../components/Header'
import Footer from '../components/Footer'




const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const [darkMode, toggleDarkMode] = useDarkMode();

  const { modal } = useQuiosco();

  

  return (
    <>
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    <Header />
    <div className='md:flex'>
      
      
      <main className={`${darkMode ? 'bg-gray-400 text-white' : 'bg-gray-100 text-gray-900'} flex-1 h-screen overflow-y-scroll  p-3`}>
      
      <Resumen />
      </main>
      
      
      
    </div>
    <Footer/>
      
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto/>       
      </Modal> 

      <ToastContainer />
      </ThemeContext.Provider>
    
    </>
  )
}
