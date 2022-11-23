console.log("a codear");

const baseURL= "https://api.themoviedb.org/3";
let imagenUrl= "https://image.tmdb.org/t/p/w300/";
/* Utils */

function createMovies(movies, container){
    container.innerHTML="";
    movies.forEach(movie =>{
        const imagenUrl= "https://image.tmdb.org/t/p/w300/";
        const imagen = document.createElement("img");
        imagen.src=  imagenUrl+movie.poster_path;
        container.appendChild(imagen);
        imagen.addEventListener("click", ()=>{
            location.hash = "#movie="+ movie.id;
            getMovieId(movie.id)
        })
    })
}

function createcategories(movies, container, name){
    const containerCategory = document.createElement("div");
    const titulocategory= document.createElement("h2");
    titulocategory.innerText = name;
    titulocategory.style = "margin-left:8%"
    container.innerHTML="";
    container.appendChild(titulocategory);
    movies.forEach(movie =>{
        const imagenUrl= "https://image.tmdb.org/t/p/w300/";
        const imagen = document.createElement("img");
        imagen.src=  imagenUrl+movie.poster_path;
        imagen.style="width:150px; margin:10px; border-radius: 12px; box-shadow: 2px 2px 2px rgb(255,255,255)"
        containerCategory.className = "ordenar";
        containerCategory.appendChild(imagen);
        container.appendChild(containerCategory);
        imagen.addEventListener("click", ()=>{
            location.hash = "#movie="+ movie.id;
            getMovieId(movie.id)
        })
    })
}

function createcategoriesButtons(categories,container){
    container.innerHTML="";
    categories.forEach(category =>{
        // console.log(category.name);
        const button = document.createElement("button");
        button.innerText = category.name;
        container.appendChild(button);
        pageCategory.innerHTML= "";
        button.addEventListener("click", ()=> {
            location.hash = `#category=${category.id}-${category.name}`;
            getMoviesByCategory(category.id, category.name);
        })
    })
}

/* traemos las primeras 3 peliculas en tendencia de la semana para carrusel*/
async function getTendencyCarruselPreview(){
    const res = await fetch(`${baseURL}/trending/movie/week?api_key=` + API_KEY)
    const data = await res.json();
    const movies = data.results;
    grande.innerHTML="";
    for(let item =5;  item< 10; item++){
        // console.log(movies[item].poster_path)
        const imagen = document.createElement("img");
        imagen.className= "img"
        imagen.src=  "https://image.tmdb.org/t/p/w300/"+ movies[item].poster_path;
        grande.appendChild(imagen);
        imagen.addEventListener("click", ()=>{
            location.hash = "#movie="+ movies[item].id;
            getMovieId(movies[item].id)
        })
    }
}

/* traemos la peliculas en tendencia*/
async function getTendenciaMoviesPreview(){
    const res = await fetch(`${baseURL}/trending/movie/day?api_key=` + API_KEY);
    const data = await res.json();
    const movies = data.results;
    createMovies(movies, containerImagenes);
}
/* traemos las tv en tendencia*/
async function getTendenciaTvPreview(){
    const res = await fetch(`${baseURL}/trending/tv/day?api_key=` + API_KEY);
    const data = await res.json();
    const tvs = data.results;
    createMovies(tvs, containerImagenesTv);
}

/* traemos peliculas para trend*/
async function moviesShow(vista){
    const res = await fetch(`${baseURL}/trending/${vista}/day?api_key=` + API_KEY);
    const data = await res.json();
    const movies = data.results;
    createcategories(movies, pageTrends, vista);
}

/* Trayendo peliculas por categorias*/
async function getMoviesByCategory(id, name){
    const res = await fetch(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
    const data = await res.json();
    const movies = data.results;
    createcategories(movies, pageCategory, name);
}

/* Trayendo pelicula por busqueda */
async function getMovieBySearch(busqueda){
    const res = await fetch(`${baseURL}/search/movie?api_key=${API_KEY}&query=${busqueda}`);
    const data = await res.json();
    const movies = data.results;
    console.log(movies);
    createcategories(movies, pageSearch, busqueda)
}

/* trayendo pelicula por id */
async function getMovieId(id){
    const res = await fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    backgroud.setAttribute("src", `${imagenUrl}${data.poster_path}`);
    tituloMovie.textContent = data.title;
    descripcion.textContent = data.overview;
    average.textContent = data.vote_average.toFixed(2);
    /*trayendo generos por pelicula */
    createcategoriesButtons(data.genres, tiposCategorias);
    getMovieRelation(id);
}

/* peliculas relacionada por pelicula*/
async function getMovieRelation(id){
    const res = await fetch(`${baseURL}/movie/${id}/recommendations?api_key=${API_KEY}`);
    const data = await res.json();
    const results = data.results;
    createMovies(results,peliculasSimilares)
}


/* traemos las categorias */
async function getCategory(){
    const res = await fetch(`${baseURL}/genre/movie/list?api_key=` + API_KEY)
    const data = await res.json();
    const categories = data.genres;
    categorias.innerHTML = "";
    createcategoriesButtons(categories,categorias);
}

/*Desactivamos las categorias */
mascategories.addEventListener("click", desactivarCategories);
function desactivarCategories(){
    if (categorias.classList.contains("inactive")){
        categorias.classList.toggle("inactive");
        mascategories.innerText= "menos categorias"
    }else{
        categorias.classList.add("inactive");
        mascategories.innerText= "más categorias"
    }
}

//carrusel inicio
// punto.forEach((cadapunto, i) =>{
//     punto[i].addEventListener("click", () =>{
//         let posicion = i;
//         let operacion = (posicion * -25)+38;

//         grande.style.transform = `translateX(${operacion}%)`
//         punto.forEach((cadapunto, i) =>{
//             punto[i].classList.remove("activo");
//         })
//         punto[i].classList.add("activo");
//     })
// })
