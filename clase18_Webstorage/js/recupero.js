//Recupero storage

let userName = localStorage.getItem('username');

let recuperoStorage = localStorage.getItem('alumnos')
let alumnosToArray = JSON.parse(recuperoStorage)

console.log(userName);
console.log(alumnosToArray);

//Mostrar en pantalle el nombre del usuario.
//Capturo elemento del DOM
let usuario = document.querySelector('p');
usuario.innerText = userName;
// usuario.innerText = usuario.innerText + userName;