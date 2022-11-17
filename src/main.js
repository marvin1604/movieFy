console.log("a codear");

const baseURL= "https://api.themoviedb.org/3"

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
const containerImagenes = document.querySelector(".container-imagenes");
const anterior = document.querySelector(".anterior")
const siguiente = document.querySelector(".siguiente");
const listaCategories= document.querySelector(".lista");

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
async function getCategory(){
    const res = await fetch(`${baseURL}/genre/movie/list?api_key=` + API_KEY)
    const data = await res.json();
    const categories = data.genres;
    categories.forEach(category =>{
        console.log(category.name);
        const button = document.createElement("button");
        button.innerText = category.name;
        listaCategories.appendChild(button);

    })
}

getTendenciaMoviesPreview();
getTendencyCarruselPreview();
// getCategory();

//carrusel inicio
punto.forEach((cadapunto, i) =>{
    punto[i].addEventListener("click", () =>{
        let posicion = i;
        let operacion = (posicion * -25)+35;

        grande.style.transform = `translateX(${operacion}%)`
        punto.forEach((cadapunto, i) =>{
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
    })
})

//carrusel tendencias
siguiente.addEventListener("click", showDerecha);
var inicio = 0;
function showDerecha(){
    inicio = ((inicio -50));
    if (inicio > -400){
        containerImagenes.style.transform = `translateX(${inicio}%)`
    }else{
        inicio=-400;
    }
}

anterior.addEventListener("click", showIzquierda);
function showIzquierda(){
    inicio = ((inicio +50));
    if(inicio <= 0){
        containerImagenes.style.transform = `translateX(${inicio}%)`
    }else{
        inicio=0;
    }
}
