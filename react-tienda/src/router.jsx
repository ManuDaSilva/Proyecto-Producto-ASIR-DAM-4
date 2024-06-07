import { createBrowserRouter} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/Layout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import Home from './views/Home'
import HomeLayout from './layouts/HomeLayout'
import ReservaLayout from './layouts/ReservaLayout'

import Reserva from './views/Reserva'
import AdminLayout from './layouts/AdminLayout'
import Pedidos from './views/Pedidos'
import Productos from './views/Productos'




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }      
        ]
    },
    {
        path: '/tienda',
        element: <Layout />,
        children: [
            {
                path: '/tienda',
                element: <Inicio/>
            }, 
            {
                path: '/tienda/carrito',
                element: <Inicio/>
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/registro',
                element: <Registro/>
            }       
        ] 
    },

    {
        path: '/entrenamiento',
        element: <ReservaLayout/>,
        children: [
            {
                path: '/entrenamiento',
                element: <Reserva />
            }      
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Pedidos />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
    
])

export default router