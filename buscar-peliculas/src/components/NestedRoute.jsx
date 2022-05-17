import { Outlet } from 'react-router-dom'

export const NestedRoute = () => {
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscardor de peliculas</h4>
      <Outlet />
    </section>
  )
}
