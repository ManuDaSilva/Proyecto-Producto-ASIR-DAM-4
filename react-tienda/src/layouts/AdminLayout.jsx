import { Outlet } from 'react-router-dom'
import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import ThemeContext from '../context/ThemeContext';
import "react-toastify/dist/ReactToastify.css"
import Header from '../components/Header'
import { useAuth } from '../hooks/useAuth';
import AdminSidebar from '../components/AdminSidebar';


export default function AdminLayout() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  // Carrito
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
  useAuth({middleware: 'admin'});

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Header />
        <div className='md:flex'>
          <AdminSidebar />
          <main className={`${darkMode ? 'bg-gray-400 text-white' : 'bg-gray-100 text-gray-900'} flex-1 h-screen overflow-y-scroll  p-3`}>
            <Outlet />
          </main>
        </div>
      </ThemeContext.Provider>

    </>
  )
}
