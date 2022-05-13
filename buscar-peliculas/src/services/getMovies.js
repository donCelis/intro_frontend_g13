import axios from 'axios'

const { VITE_API_KEY } = import.meta.env

export const getMovies = async ({ query = '' }) => {
  const req = await axios.get(`https://www.omdbapi.com/?apikey=${VITE_API_KEY}&s=${query}`)
  const res = req.data.Response === 'True' ? req.data.Search : []
  return res
}
