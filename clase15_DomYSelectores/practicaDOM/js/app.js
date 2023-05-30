console.log("hola");

alert("Bienvenidos a mi sitio.");
let continuar = confirm("¿Está seguro de querer avanzar?");
let h2 = document.querySelector("h2");

if(continuar == true){
    h2.innerText = "Qué alegría que quieras continuar tu visita";

    let nombre = prompt("tu nombre");




} else {
    h2.innerText = "Lamentamos que no quieras continuar tu visita";
}