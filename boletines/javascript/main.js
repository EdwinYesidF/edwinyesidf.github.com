//console.log("Hola Mundo desde java script")

//DOM
//let container = document.querySelector(".container");

//console.log(container)

//let table = document.querySelector(".table");

//console.log(table)
/*
let links = document.querySelectorAll("a");

links.forEach(function(links){
    console.log(links)
})

console.log(links)

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
});



//Obtener los elementos de la clase .close

let cierre = document.querySelectorAll(".close");

//Recorrer los elementos
 cierre.forEach(function(cierre) {
//agregar el evnto click
cierre.addEventListener('click',function(ev){
    ev.preventDefault();
    return false;
})

 });
 

 let iconos = document.querySelectorAll("i");

 iconos.forEach(function(iconos){
    iconos.classList.remove("fa-star")
    iconos.classList.add("fa-star")
 })
*/
let cierre = document.querySelectorAll(".close");

//Recorrer los elementos
cierre.forEach(function (cierre) {
    //agregar el evnto click
    cierre.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');

        //quitarle las classes de animacion que tienen
        content.classList.remove("animate__fadeInUp");
        content.classList.remove("animate__animated");

        //Agregar classes para animar la salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        //Agregar un tiempo de espera
        setTimeout(function () {
            location.href = "/boletines";
        }, 1000);

        return false;
    })

});