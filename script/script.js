const API_URL = 'https://rickandmortyapi.com/api/character/?name=rick&morty'
const IMG_PATH = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
//const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.querySelector("#main")

const getMovies = async(url) =>{//con este método se debe especificar que es asincrónico 
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);//función de llamado 

}
getMovies(API_URL)//obtengo la funciónde arriba

const showMovies = (movies) => {
    main.innerHTML = ''
    movies.forEach(movie => {
        const { image, name, species, status } = movie
        const movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
        movieDiv.innerHTML = `
        <img src="${image }" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">${status}</span>
        </div>
        <div class="overview">
        <h3>Especie</h3>
            <h3>${species}</h3>
        </div>
        `
        main.appendChild(movieDiv)
    });


    console.log(movies);
}
/*form.addEventListener('submit', e => {
    e.preventDefault()

    const searchTerm = search.value.toLocaleLowerCase()
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm, searchTerm)
        search.value = ''
    } else {
        swal.fire({//para lanzar alerta
            title: 'Error!',
            text: 'Debe escribir algo en la barra de busqueda',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
})*/