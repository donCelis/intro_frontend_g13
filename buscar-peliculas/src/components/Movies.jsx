export const Movies = ({ data }) => {
  return (
    <section className='py-4'>
      {
      data && data.length > 0
        ? (
          <>
            <ul style={{ paddingInlineStart: '0' }} className='row gx-4'>
              {
              data.map(movie => (
                <li style={{ listStyle: 'none' }} key={movie.imdbID} className='col-3'>
                  <article
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title={movie.Title}
                    className='card text-dark'
                  >
                    <figure>
                      <img className='img-fluid' src={movie.Poster} alt={movie.Title} />
                    </figure>
                    <h6>{movie.Title}</h6>
                    <small>{movie.Year}</small>
                    <p>{movie.Type}</p>
                  </article>
                </li>
              ))
            }
            </ul>
          </>
          )
        : null
    }
    </section>
  )
}
