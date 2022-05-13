import { Movies } from './Movies'
import { getMovies } from '../services/getMovies'
import { useRef, useState } from 'react'

function App () {
  const buscarRef = useRef()

  const [data, setData] = useState([])

  const onGetMovies = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    const result = await getMovies({ query: value })
    setData(result)
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscardor de peliculas</h4>
      {/* buscador */}
      <form onSubmit={onGetMovies}>
        <div className='input-group'>
          <input
            ref={buscarRef}
            type='text'
            className='form-control'
            placeholder='Buscar...'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      {/* grid de peliculas */}
      <Movies data={data} />
    </section>
  )
}

export default App
