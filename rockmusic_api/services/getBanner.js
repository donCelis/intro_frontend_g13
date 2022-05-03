const getBanner = async (id = '112024') => {
  try {
    const req = await window.fetch(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`)
    const res = await req.json()

    document.querySelector('#col-imagen').innerHTML += `
    <div class="d-flex align-items-center h-100">
      <img src="${res.artists[0].strArtistWideThumb}" alt="" class="img-fluid">
    </div>
    `
  } catch (error) {
    console.log(error)
  }
}

export default getBanner
