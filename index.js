/* http://www.omdbapi.com/?i=tt3896198&apikey=e2cbd42e */
const movieListEl = document.querySelector('.movies__wrapper');

async function onSearchChange(event){
    const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=e2cbd42e`).json()
    console.log(movies)
}

async function test() {
    console.log(await(await fetch('http://www.omdbapi.com/?apikey=e2cbd42e&s')).json())
}

test()