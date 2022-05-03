import getArtist from './getArtist'

const createData = async () => {
  const limit = []

  for (let index = 112024; index <= 112036; index++) {
    if (index === 112032) { continue }
    limit.push(`${index}`)
  }

  const arrayArtits = []

  for (let index = 0; index < limit.length; index++) {
    arrayArtits.push(await getArtist(limit[index]))
  }

  return arrayArtits
}

export default createData
