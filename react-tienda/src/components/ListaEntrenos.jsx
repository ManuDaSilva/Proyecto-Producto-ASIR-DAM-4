import React, { useEffect, useState } from 'react';
import clienteAxios from '../config/axios';
import CardEntreno from './CardEntreno';
import { useAuth } from '../hooks/useAuth';

const ListaEntrenos = () => {
  const [entrenos, setEntrenos] = useState([]);
  const { user } = useAuth({ middleware: 'socio' });

  useEffect(() => {
    const fetchEntrenos = async () => {
      try {
        const response = await clienteAxios.get('/api/entrenos');
        setEntrenos(response.data.data);
      } catch (error) {
        console.error('Error fetching entrenos', error);
      }
    };

    fetchEntrenos();
  }, []);

  const handleReservar = async (entrenosId) => {
    if (!user) {
      alert('Debes iniciar sesión para reservar');
      return;
    }

    const reservaData = {
      entrenos_id: entrenosId,
      user_id: user.id,
      categoria_entreno: 'CrossFit',
      reservas_hechas: 1,
      fecha_reserva: new Date().toISOString().split('T')[0],
    };

    console.log('Reserva Data:', reservaData); // Depuración: Mostrar los datos antes de enviar

    try {
      const response = await clienteAxios.post('/api/reservas', reservaData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
        }
      });
      console.log('Reserva Response:', response); // Depuración: Mostrar la respuesta de la API
      alert('Reserva creada con éxito');
    } catch (error) {
      console.error('Error creating reservation', error);
      if (error.response) {
        console.error('Error Response:', error.response.data);
      }
      alert('Error al crear la reserva');
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {entrenos.map(entreno => (
        <CardEntreno key={entreno.id} entreno={entreno} onReservar={handleReservar} />
      ))}
    </div>
  );
}

export default ListaEntrenos;