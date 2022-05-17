import { Link } from 'react-router-dom'

export const Page404 = () => (
  <section className='container text-center py-5'>
    <h2 className='mb-4'>Página no encontrada</h2>
    <Link to='/' className='btn btn-primary mb-5'>Home</Link>
  </section>
)
