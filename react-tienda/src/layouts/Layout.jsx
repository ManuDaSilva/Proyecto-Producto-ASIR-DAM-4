import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import ThemeContext from '../context/ThemeContext';
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useTienda from '../hooks/useTienda'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAuth } from '../hooks/useAuth';





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

  // Carrito
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  // Enviar a login a usuario no autenticado.
  const {user, error} = useAuth({middleware: 'auth'})
  console.log(user)
  console.log(error)
  

  const { modal } = useTienda();
  const stylesCarrito = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%', // o el tamaño que prefieras para móviles
      maxWidth: '840px', // o el tamaño que prefieras para escritorio
    },
  };

  

  return (
    <>
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
    <Header onCartClick={() => setIsOrderSummaryOpen(true)} />
    <div className='md:flex'>
      <Sidebar />
      
      <main className={`${darkMode ? 'bg-gray-400 text-white' : 'bg-gray-100 text-gray-900'} flex-1 h-screen overflow-y-scroll  p-3`}>
      <Outlet/>
      </main>

      {/** Carrito de compra*/}
      <Modal isOpen={isOrderSummaryOpen} onRequestClose={() => setIsOrderSummaryOpen(false)} style={stylesCarrito}>
        <Resumen closeOrderSummary={() => setIsOrderSummaryOpen(false)} />
      </Modal>
       
      
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
