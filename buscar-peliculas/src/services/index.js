import axios from 'axios'

const { APP_API_KEY } = import.meta.env

export const getMovies = async ({ query = '' }) => {
  const req = await axios.get(
    `https://www.omdbapi.com/?apikey=${APP_API_KEY}&s=${query}`
  )
  const res =
    req.data.Response === 'True'
      ? req.data.Search
      : { sms: 'No hay resultados', data: [] }
  return res
}
export const getMoviesDetails = async ({ id = '' }) => {
  const req = await axios.get(
    `https://www.omdbapi.com/?apikey=${APP_API_KEY}&i=${id}`
  )
  const res = req.data.Response === 'True' ? req.data : {}
  return res
}
