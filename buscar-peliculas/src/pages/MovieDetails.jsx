import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getMoviesDetails } from '../services'

export const MovieDetails = () => {
  const navigate = useNavigate()
  const { idMovie } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getData = async () => {
      const result = await getMoviesDetails({ id: idMovie })
      if (result) {
        setMovie(result)
      } else {
        navigate('/404')
      }
    }
    getData()
  }, [])

  const cover = movie.Poster === 'N/A' ? 'https://m.media-amazon.com/images/I/518eSNguuYL._AC_UX385_.jpg' : movie.Poster

  return (
    <section className='container py-5'>
      <Link to='/' className='btn btn-primary mb-5'>Home</Link>
      {
        !movie
          ? (<p>Loading</p>)
          : (
            <article className='row'>
              <aside className='col-6'>
                <figure>
                  <img src={cover} alt={movie.Title} className='img-fluid' />
                </figure>
              </aside>
              <aside className='col-6'>
                <h4>{movie.Title}</h4>
                <p>{movie.Type}</p>
                <p>
                  <strong>Year: </strong> {movie.Year}
                </p>
                <p>
                  <strong>Rating: </strong> {movie.imdbRating}
                </p>
              </aside>
            </article>
            )
      }
    </section>
  )
}
