console.log('hola');
//Pedir al usuario que cargue su nombre en un promt y guardarlo en localStorage

let nombre = prompt('¿Cuál es tu nombre?');
let alumnos = ['Ale', 'María', 'Nico', 'Sebastián'];

//Guardarlo en localStorage
localStorage.setItem("username", nombre);

let alumnosToString = JSON.stringify(alumnos);
localStorage.setItem("alumnos", alumnosToString)

console.log(localStorage);

