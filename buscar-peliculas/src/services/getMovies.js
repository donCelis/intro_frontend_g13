import axios from 'axios'

const { VITE_API_KEY } = import.meta.env

export const getMovies = async ({ query }) => {
  const req = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${VITE_API_KEY}`)
  return req.data
}
