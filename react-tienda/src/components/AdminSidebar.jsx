import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ThemeContext from '../context/ThemeContext';

export default function AdminSidebar() {

    const { darkMode } = useContext(ThemeContext);
    const { logout } = useAuth({ middleware: 'auth' })

    return (
        <aside className={`${darkMode ? 'bg-gray-800 text-white ' : 'bg-white'} md:w-72 truncate`} >
            <nav className='flex flex-col p-4'>
                <Link to="/admin" className='font-bold text-lg'>Pedidos</Link>
                <Link to="/admin/productos" className='font-bold text-lg'>Productos</Link>
            </nav>

            <div className='my-5 px-5'>
                <button
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                    onClick={logout}
                >
                    Cerrar Sesión
                </button>
            </div>
        </aside>
    )
}
