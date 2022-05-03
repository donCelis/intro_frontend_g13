const getArtist = async (id = '112024') => {
  try {
    const req = await window.fetch(`https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`)
    const res = await req.json()

    document.querySelector('#cards-container').innerHTML += `
    <div class="col-12 mb-3 mb-xs-0 col-sm-6 col-lg-3">
      <article class="card text-light shadow">
        <div class="card-body text-center">
          <img class="img-fluid rounded-3" src="${res.artists[0].strArtistWideThumb}" alt="Example photo">
          <h6 class="card-subtitle mt-3">${res.artists[0].strArtist}</h6>
          <p class="card-text">${res.artists[0].strCountry}</p>
        </div>
      </article>
    </div>
    `
  } catch (error) {
    console.log(error)
  }
}

export default getArtist
