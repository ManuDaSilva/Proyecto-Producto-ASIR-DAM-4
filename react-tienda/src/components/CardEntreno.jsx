import React from 'react';

const CardEntreno = ({ entreno, onReservar }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={entreno.imagen} alt={entreno.nombre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{entreno.nombre}</div>
        <p className="text-gray-700 text-base">{entreno.descripcion}</p>
        <p className="text-gray-700 text-base">Horario: {new Date(entreno.horario).toLocaleString()}</p>
        <p className="text-gray-700 text-base">Cupos: {entreno.maxslots}</p>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => onReservar(entreno.id)}
        >
          Reservar
        </button>
      </div>
    </div>
  );
}

export default CardEntreno;