export const getData = async (name = 'colombia') => {
  const baseUrl = `https://restcountries.com/v3.1/name/${name}`

  const req = await window.fetch(baseUrl)
  const res = await req.json()
  return res
}
