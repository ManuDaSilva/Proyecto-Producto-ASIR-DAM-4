import useSWR from 'swr'
import useTienda from '../hooks/useTienda'
import clienteAxios from '../config/axios'
import {formatearDinero} from '../helpers'


export default function Pedidos() {
  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/api/pedidos',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const {data, error, isLoading} = useSWR('/api/pedidos', fetcher, {refreshInterval: 1000})

  const {handleClickCompletarPedido } = useTienda()
  
  if(isLoading) return 'Cargardo...'

  return (
    <div>
      <h1 className='text-4xl font-black'>Pedidos</h1>
      <p className='text-2xl my-10'>
        Administra los pedidos desde aquí:
      </p>

      <div className='grid grid-cols-2 gap-5'>
        {data.data.data.map(pedido => (
          <div key={pedido.id} className="p-5 bg-white shadow space-y-2 border-b">
              <p className="text-xl font-bold ">
                Contenido del Pedido:
              </p>
              {pedido.productos.map(producto =>(
                <div
                  key={producto.id}
                  className='border-b border-b-slate-200 last-of-type:border-none py-4'
                >
                  <p className='text-sm'>Producto ID: {producto.id}</p>
                  <p className='text-sm'>Nombre: {producto.nombre}</p>
                  <p >
                    Cantidad: 
                    <span className='font-bold'>{producto.pivot.cantidad}</span>
                  </p>
                  
                  

                </div>
              ))}
              <p className='text-lg font-bold'>
                    Cliente: {' '} 
                  </p>
                  <p className='text-sm'>Nombre: {pedido.user.name}</p>
                  <p className='text-sm'>Email: {pedido.user.email}</p>
                  <p className='text-sm'>User_Id: {pedido.user.id}</p>
              <p className='text-lg font-bold'>
                    Total a pagar: {' '} 
                    <span className='font-bold'>{formatearDinero(pedido.total)}</span>
              </p>

              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 text-white rounded uppercase font-bold text-center w-full cursor-pointer"
                onClick={() => handleClickCompletarPedido(pedido.id)}
              >Completar</button>                 
          </div>
        ))} 
      </div>
    </div>
  )
}
