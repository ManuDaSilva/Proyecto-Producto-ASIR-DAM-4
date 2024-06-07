import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import useTienda from "../hooks/useTienda"
import Categoria from "./Categoria"
import { useAuth } from '../hooks/useAuth';




export default function Sidebar() {

  const { darkMode } = useContext(ThemeContext);
  const { categorias, handleMostrarTodas } = useTienda(); 
  const {logout, user} = useAuth({middleware: 'auth'})
  

  
  return (
    <aside className={`${darkMode ? 'bg-gray-800' : 'bg-white'} md:w-72 text-white truncate`}>
      <div className="">
        
        <button
          onClick={handleMostrarTodas} // Actualizado para usar handleClickCategoria
          className={`${darkMode ? 'bg-gray-700' : 'bg-blue-500'} w-full p-3 font-bold text-white truncate`}>
          Mostrar Todas
        </button>
        {categorias.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </div>
      <div className="my-5 px-5">
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
    </aside>
  )
}
