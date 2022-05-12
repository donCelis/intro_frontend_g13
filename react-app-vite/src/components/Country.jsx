import { getData } from '@/services/getData'
import { useEffect, useState } from 'react'

export const Country = () => {
  const [country, setCountry] = useState([])

  useEffect(() => {
    const data = async () => {
      const result = await getData('mexico')
      setCountry(result)
    }
    country.length === 0 && data()
  }, [])

  return country.length !== 0 &&
    (
      <div className='card' style={{ width: '18rem' }}>
        <img src={country[0].flags.svg} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{country[0].name.common}</h5>
          <p className='card-text'><strong>Capital:</strong>  {country[0].capital}</p>
          <a href='#' className='btn btn-primary'>Ver más...</a>
        </div>
      </div>
    )
}
