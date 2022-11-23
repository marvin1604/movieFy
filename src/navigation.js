// console.log("navegando");
let vista
let busqueda
/* Llamando a Page Movies*/
mastendencias.addEventListener("click", ()=> {
    vista = "movie";
    location.hash = "#trends";
})
btnMovie.addEventListener("click", ()=> {
    vista = "movie";
    location.hash = "#trends";
})

/* Llamando a Page tv*/

mastendenciasTv.addEventListener("click", ()=> {
    vista = "tv";
    location.hash = "#trends";
})

btnTv.addEventListener("click", ()=> {
    location.hash = "#trends";
    vista = "tv"
})

/* pagina buscar*/
buttonSearch.addEventListener("click", ()=> {
    busqueda = inputText.value;
    location.hash =`#search=${busqueda}`;
    inputText.value="";
})

/*boton retroceder a Home*/
back.addEventListener("click", ()=> {
    history.back();
    // location.hash = "#home";
})


window.addEventListener("load", navigation, false);
window.addEventListener("hashchange", navigation, false);

function navigation(){
    // console.log({location});
    if(location.hash.startsWith('#trends')){
        trend();
    }else if(location.hash.startsWith('#search=')){
        searchView();
    }else if(location.hash.startsWith('#movie=')){
        movie();
    }else if(location.hash.startsWith('#category=')){
        category();
    }else{
        homePage();
    }
    window.scrollTo({ top: 0 });
}
// navigation();

function homePage(){
    console.log('Home');
    header.classList.remove("inactive");
    showCarrusel.classList.remove("inactive");
    search.classList.remove("inactive");
    listaCategorias.classList.remove("inactive");
    tendenciasMovies.classList.remove("inactive");
    tendenciasTv.classList.remove("inactive");
    pageMovie.classList.add("inactive")
    pageCategory.classList.add("inactive");
    pageTrends.classList.add("inactive");
    back.classList.add("inactive")
    pageSearch.classList.add("inactive")
    getTendenciaMoviesPreview();
    getTendencyCarruselPreview();
    getCategory();
    getTendenciaTvPreview()
}

function trend(){
    console.log("trends");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
    pageCategory.classList.add("inactive");
    pageMovie.classList.add("inactive");
    pageTrends.classList.remove("inactive");
    pageSearch.classList.add("inactive");
    moviesShow(vista);
}

function category(){
    console.log("Category");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
    pageMovie.classList.add("inactive");
    pageCategory.classList.remove("inactive");
    pageTrends.classList.add("inactive");
    pageSearch.classList.add("inactive");
    const [_, categoryData] = location.hash.split("=");
    const [categoriaID,nameCategoria] = categoryData.split("-")
    console.log(categoriaID);
    getMoviesByCategory(categoriaID,nameCategoria);

}

function movie(){
    console.log("Movie");
    pageMovie.classList.remove("inactive");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.add("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
    pageCategory.classList.add("inactive");
    pageTrends.classList.add("inactive");
    pageSearch.classList.add("inactive");

    const [_,id]=location.hash.split('=');
    getMovieId(id);
}

function searchView(){
    console.log("search");
    back.classList.remove("inactive");
    showCarrusel.classList.add("inactive");
    search.classList.remove("inactive");
    listaCategorias.classList.add("inactive");
    tendenciasMovies.classList.add("inactive");
    tendenciasTv.classList.add("inactive");
    pageMovie.classList.add("inactive");
    pageCategory.classList.add("inactive");
    pageTrends.classList.add("inactive");
    pageCategory.classList.add("inactive");
    pageSearch.classList.remove("inactive")
    getMovieBySearch(busqueda);
}
