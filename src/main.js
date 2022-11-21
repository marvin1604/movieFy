console.log("a codear");

const baseURL= "https://api.themoviedb.org/3"


/* traemos las primeras 3 peliculas en tendencia de la semana para carrusel*/
async function getTendencyCarruselPreview(){
    const res = await fetch(`${baseURL}/trending/movie/week?api_key=` + API_KEY)
    const data = await res.json();
    const movies = data.results;
    for(let item =0;  item< 3; item++){
        // console.log(movies[item].poster_path)
        const imagen = document.createElement("img");
        imagen.className= "img"
        imagen.src=  "https://image.tmdb.org/t/p/w300/"+ movies[item].poster_path;
        grande.appendChild(imagen);
    }
}


/* traemos la peliculas en tendencia*/
async function getTendenciaMoviesPreview(){
    const res = await fetch(`${baseURL}/trending/movie/day?api_key=` + API_KEY);
    const data = await res.json();
    const movies = data.results;
    movies.forEach(movie =>{
        const imagenUrl= "https://image.tmdb.org/t/p/w300/";
        // console.log(movie.poster_path);
        const imagen = document.createElement("img");
        imagen.src=  imagenUrl+movie.poster_path;
        containerImagenes.appendChild(imagen);
    })
}
/* traemos las tv en tendencia*/
async function getTendenciaTvPreview(){
    const res = await fetch(`${baseURL}/trending/tv/day?api_key=` + API_KEY);
    const data = await res.json();
    const tvs = data.results;
    // console.log(tvs);
    tvs.forEach(movie =>{
        const imagenUrl= "https://image.tmdb.org/t/p/w300/";
        // console.log(movie.poster_path);
        const imagen = document.createElement("img");
        imagen.src=  imagenUrl+movie.poster_path;
        containerImagenesTv.appendChild(imagen);
    })
}


mascategories.addEventListener("click", desactivarCategories);
/* traemos las categorias */
async function getCategory(){
    const res = await fetch(`${baseURL}/genre/movie/list?api_key=` + API_KEY)
    const data = await res.json();
    const categories = data.genres;
    categories.forEach(category =>{
        // console.log(category.name);
        const button = document.createElement("button");
        button.innerText = category.name;
        categorias.appendChild(button);
    })
}

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
punto.forEach((cadapunto, i) =>{
    punto[i].addEventListener("click", () =>{
        let posicion = i;
        let operacion = (posicion * -25)+38;

        grande.style.transform = `translateX(${operacion}%)`
        punto.forEach((cadapunto, i) =>{
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
    })
})

//carrusel tendencias Movies
siguiente.addEventListener("click", showDerecha);
var inicioMovies = 0;
function showDerecha(){
    inicioMovies = ((inicioMovies -50));
    if (inicioMovies > -400){
        containerImagenes.style.transform = `translateX(${inicioMovies}%)`
    }else{
        inicioMovies=-400;
    }
}

anterior.addEventListener("click", showIzquierda);
function showIzquierda(){
    inicioMovies = ((inicioMovies +50));
    if(inicioMovies <= 0){
        containerImagenes.style.transform = `translateX(${inicioMovies}%)`
    }else{
        inicioMovies=0;
    }
}

/*carrusel tendencias Tv*/
siguienteTv.addEventListener("click", showDerechaTv);
var inicio = 0;
function showDerechaTv(){
    console.log("derecha");
    inicio = ((inicio -50));
    if (inicio > -400){
        containerImagenesTv.style.transform = `translateX(${inicio}%)`
    }else{
        inicio=-400;
    }
}
anteriorTv.addEventListener("click", showIzquierdaTv);
function showIzquierdaTv(){
    inicio = ((inicio +50));
    if(inicio <= 0){
        containerImagenesTv.style.transform = `translateX(${inicio}%)`
    }else{
        inicio=0;
    }
}