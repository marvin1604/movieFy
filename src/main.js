console.log("a codear");

console.log('API URL = https: jhdjsk.com/hdhjs?api_key=' + API_KEY)

const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

//cuando click en punto

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