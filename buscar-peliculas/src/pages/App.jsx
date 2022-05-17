import { Movies } from '../components/Movies'
import { getMovies } from '../services'
import { useEffect, useRef, useState } from 'react'

function App () {
  const buscarRef = useRef()

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await getMovies({ query: 'avengers' })
      setData(result)
    }
    getData()
  }, [])

  const onGetMovies = async (e) => {
    e.preventDefault()
    const { value } = buscarRef.current
    const result = await getMovies({ query: value })
    if (result.sms) {
      setData('')
      setError(result)
    } else {
      setData(result)
      setError('')
    }
  }
  return (
    <>
      {/* buscador */}
      <form onSubmit={onGetMovies}>
        <div className='input-group'>
          <input
            ref={buscarRef}
            type='text'
            className='form-control'
            placeholder='Buscar...'
            required
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
      {/* grid de peliculas */}
      {error ? <p className='text-center py-4'>{error.sms}</p> : null}
      <Movies data={data} />
    </>
  )
}

export default App
