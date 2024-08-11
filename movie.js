const id = localStorage.getItem("imdbID")
const movieDeetsEl = document.querySelector('.movie__deets--wrapper')

async function movieInfo() {
    const moviesInfo = await fetch(
      `https://www.omdbapi.com/?apikey=e2cbd42e&i=${id}`)
    let moviesInfoData = await moviesInfo.json()
    if (!Array.isArray(moviesInfoData)) {
        moviesInfoData = [moviesInfoData];
    }

    movieDeetsEl.innerHTML = moviesInfoData.map((movie) => movieInfoHTML(movie))
    console.log(moviesInfoData)
}

movieInfo()

function movieInfoHTML (movie) {
    return `  <figure class="movie__poster--wrapper">
                <img src="${movie.Poster}" alt="" />
              </figure>
          <div class="movie__info__wrapper">
            <h1 class="movie__title">${movie.Title}</h1>
            <h3 class="detail-list"><span class="text-purple">Release Date:</span>${movie.Released}</h3>
            <h3 class="detail-list"><span class="text-purple">Genre:</span>${movie.Genre}</h3>
            <h3 class="detail-list"><span class="text-purple">Language:</span>${movie.Language}</h3>
            <h3 class="detail-list"><span class="text-purple">Actors</span>${movie.Actors}</h3>
            <h3 class="detail-list"><span class="text-purple">Director:</span>${movie.Director}</h3>
            <h3 class="detail-list"><span class="text-purple">Writer:</span>${movie.Writer}</h3>
            <h3 class="detail-list"><span class="text-purple">Plot:</span>${movie.Plot}</h3>
          </div>`
}
