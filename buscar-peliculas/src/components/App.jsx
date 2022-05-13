import { Movies } from './Movies'
import { getMovies } from '../services/getMovies'

function App () {
  const onGetMovies = async (e) => {
    e.preventDefault()
    const result = await getMovies({ query: '' })
    console.log(result)
  }
  return (
    <section className='container'>
      <h4 className='py-4 text-center'>Buscardor de peliculas</h4>
      {/* buscador */}
      <form>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Buscar...'
          />
          <button onClick={onGetMovies} className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      {/* grid de peliculas */}
      <Movies />
    </section>
  )
}

export default App
