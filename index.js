/* http://www.omdbapi.com/?i=tt3896198&apikey=e2cbd42e */
const movieListEl = document.querySelector('.movies__wrapper');



function showMovieInfo(imdbID) {
    localStorage.setItem("imdbID", imdbID);
    window.location.href = `/movie.html`;
}

function movieHtml(movie) {
    return `<div class = "movie">
    <div class="movie__img--wrapper">
        <img src="${movie.Poster}" alt="" class="movie__img">
        <a class="movie__content" onclick="showMovieInfo('${movie.imdbID}')">
            <h1>${movie.Title}</h1>
            <h1>${movie.Year}</h1>
        </a>
    </div>
</div>`
}


async function onSearchChange(event){
    const searchTerm = event.target.value;
    const movies = await fetch(`http://www.omdbapi.com/?apikey=e2cbd42e&s=${searchTerm}`)
    const moviesData = await movies.json();
    console.log(moviesData)
    movieListEl.innerHTML = moviesData.Search.map(movie => movieHtml(movie)).join('');
}



