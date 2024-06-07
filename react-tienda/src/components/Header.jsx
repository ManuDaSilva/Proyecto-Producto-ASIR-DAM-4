import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Link } from 'react-router-dom'

const Header = ({ onCartClick }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <header className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex flex-col md:flex-row justify-between items-center pl-2`}>
      {/* Icono - Siempre visible */}
      <div className="flex items-center mb-4 md:mb-0">
      <img 
          src="../img/warrior-transparent.png" 
          alt="logo marca"
          className="w-60" 
        />
      </div>

      {/* Contenedor para Nav y Botones - Se muestra debajo del icono en móviles */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row flex-grow items-center md:justify-between`}>
        {/* Nav - Centrado en móviles y desktop */}
        <nav className="flex flex-grow items-center justify-center mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row justify-between md:gap-4">
            <li>
            <Link to="/">
              Home
            </Link>
            </li>
            <li>
            <Link to="/tienda">
              Tienda
            </Link>
            </li>
            <li>Blog</li>
            <li>Reservar Clase</li>
          </ul>
        </nav>

        {/* Botón de Modo Oscuro/Claro y Botón de Login y Carro de Compra - Alineados a la derecha */}
        <div className="flex flex-col md:flex-row items-center gap-4 p-4">
          {/* Toggle Modo Oscuro/Claro */}
          <div className="md:flex items-center mb-4 md:mb-0">
            <label htmlFor="theme-toggle" className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="theme-toggle" className="sr-only peer" checked={darkMode} onChange={() => toggleDarkMode(!darkMode)} />
              <div className="w-10 h-4 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition"></div>
              <span className="absolute left-0 inline-block w-6 h-6 bg-white rounded-full shadow transform ring-0 transition peer-checked:translate-x-6 peer-checked:bg-blue-600"></span>
            </label>
          </div>

          {/* Botones de Login y Carro de Compra */}
          {/* Colocar aquí el botón de Login y el botón del Carro de Compra, ya que ahora están en un div agrupado */}
          {/* Botón de Login con Icono - Siempre visible */}
          <button className="mt-4 md:mt-0">
            {/* SVG de Login */}
           
            <Link to="/auth/login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </Link>
          </button>
          {/* Botón de Carro de Compra - Siempre visible */}
          <button onClick={onCartClick} className="mt-4 md:mt-0">
            {/* SVG de Carro de Compra */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Botón de Menú Hamburguesa/X - Cambia según el estado y siempre visible */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : 'Menú'}
      </button>
    </header>
  );
};

export default Header;

