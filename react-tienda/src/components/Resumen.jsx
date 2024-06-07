import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

import { formatearDinero } from "../helpers";
import useTienda from "../hooks/useTienda"
import {useAuth} from "../hooks/useAuth"
import ResumenProducto from "./ResumenProducto";


export default function Resumen({ closeOrderSummary }) {
  const { pedido, total, handleSubmitNuevoPedido } = useTienda();
  const { logout } = useAuth({})
  const { darkMode } = useContext(ThemeContext);
  const comprobarPedido = () => pedido.length === 0;

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitNuevoPedido(logout);
  }
  

  return (
    <div className={`${darkMode ? 'bg-gray-500' : 'bg-white'} full h-screen overflow-y-scroll p-5`}>
      <h1 className="text-4xl font-black">
        Mi Pedido
      </h1>
      <p className="text-lg my-5">
        Aquí podrás ver el resumen y totales de tu pedido
      </p>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">
            Aún no hay elementos en tu pedido.
          </p>  
        ) : (
          pedido.map(producto => (
            <ResumenProducto 
              key={producto.id}
              producto={producto}
            />
          ))
        )}
      </div>

      <p className="text-xl mt-10">
        Total: {''}
        {formatearDinero(total)}
      </p>

      <form 
      className="w-full"
      onSubmit={handleSubmit}>
        <div className="mt-5">
          <input 
            type="submit" 
            className={`${comprobarPedido() ? 
              'bg-indigo-100':
              'bg-indigo-600 hover:bg-indigo-800'}
              px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer`}
            value="Confirmar Pedido"
            disabled={comprobarPedido()}/>
        </div>
      </form>
      <button 
        onClick={closeOrderSummary}
        className="px-5 py-2 rounded uppercase font-bold text-center w-full cursor-pointer">
          Cerrar
      </button>
    </div>
  )
}
