import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import useTienda from "../hooks/useTienda"

export default function Categoria({categoria}) {

  const { darkMode } = useContext(ThemeContext);
  const {handleClickCategoria, categoriaActual} = useTienda();
  const {id, nombre} = categoria  
  return (
    <div 
      className={`${categoriaActual.id === id ? 'bg-amber-400' : darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
        
        <button 
          className="text-lg font-bold cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategoria(id)}>
          {nombre}
        </button>    
    </div>

  )
}

