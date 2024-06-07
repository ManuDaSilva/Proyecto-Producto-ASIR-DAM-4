import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { formatearDinero } from "../helpers"
import useTienda from "../hooks/useTienda"


export default function Producto({producto, botonAgregar = false, botonDisponible = false}) {

    const { darkMode } = useContext(ThemeContext);
    const { handleClickModal , handleSetProducto, handleClickProductoAgotado  } = useTienda()
    const { nombre, imagen, precio } = producto

  return (
    <div className={`${darkMode ? 'bg-gray-500 text-white border-zinc-700' : 'bg-white text-gray-900'} border p-3 shadow `}>
        <img 
            src={`/img/${imagen}.jpg`}
            alt={`imagen ${nombre}`} 
            className="w-full"
        />

        <div className="p-5">
            <h3 className={`${darkMode ? 'text-black' : 'text-black '}text-2xl font-bold`}>{nombre}</h3>
            <p className={`${darkMode ? 'text-black' : 'text-amber-500 '} mt-5 text-4xl `}>
                {formatearDinero(precio)}
            </p>

            {botonAgregar && (
            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
            >
                Agregar
            </button> )}

            {botonDisponible && (
                <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {handleClickProductoAgotado(producto.id)}}
            >
                Producto Agotado
            </button>
            )}

        </div>
    </div>
  )
}
