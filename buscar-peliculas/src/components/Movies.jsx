import { Link } from 'react-router-dom'

export const Movies = ({ data }) => {
  return (
    <section className='py-4'>
      {
      data && data.length > 0
        ? (
          <>
            <ul style={{ paddingInlineStart: '0' }} className='row gy-4'>
              {
              data.map(movie => {
                const cover = movie.Poster === 'N/A' ? 'https://m.media-amazon.com/images/I/518eSNguuYL._AC_UX385_.jpg' : movie.Poster
                return (
                  <li style={{ listStyle: 'none' }} key={movie.imdbID} className='col-3'>
                    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
                      <article
                        className='card text-dark'
                      >
                        <figure>
                          <img className='img-fluid' src={cover} alt={movie.Title} />
                        </figure>
                        <h6>{movie.Title}</h6>
                        <small>{movie.Year}</small>
                        <p>{movie.Type}</p>
                      </article>
                    </Link>
                  </li>
                )
              })
            }
            </ul>
          </>
          )
        : null
    }
    </section>
  )
}
