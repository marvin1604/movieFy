console.log("navegando")
window.addEventListener("load", navigation, false);
window.addEventListener("hashchange", navigation, false);

function navigation(){
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trend();
    }else if(location.hash.startsWith('#search=')){
        console.log("search");
    }else if(location.hash.startsWith('#movie=')){
        movie();
    }else if(location.hash.startsWith('#category=')){
        category();
    }else{
        homePage();
    }
    location.hash
}
navigation();

function homePage(){
    console.log('Home');
    header.classList.remove("inactive");
    showCarrusel.classList.remove("inactive");
    search.classList.remove("inactive");
    listaCategorias.classList.remove("inactive");
    tendenciasMovies.classList.remove("inactive");
    tendenciasTv.classList.remove("inactive");
    pageMovie.classList.add("inactive")
    getTendenciaMoviesPreview();
    getTendencyCarruselPreview();
    getCategory();
    getTendenciaTvPreview()
}

function trend(){    
    console.log("trends");
    bars.classList.add("inactive");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
    

}

function category(){
    console.log("Category");
    bars.classList.add("inactive");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
}

function movie(){
    console.log("Movie");
    const imagen = document.createElement("img");
    imagen.src = "https://es.web.img2.acsta.net/pictures/16/01/12/13/40/312222.jpg";
    imagen.style="width:250px";
    pageMovie.appendChild(imagen);
    pageMovie.classList.remove("inactive");
    bars.classList.add("inactive");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
}

