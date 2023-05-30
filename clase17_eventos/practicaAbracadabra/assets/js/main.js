console.log("ho");
//Punto
let boton = document.querySelector("#abracadabra");
boton.addEventListener("click", function(){
    let nombre = prompt("Decime cual cual cual es tu nombre");
    let titular = document.querySelector("#titular");
    titular.innerText = "HI I´m " + nombre
})

//Definir una función colorAlAzar. Esta función debe contener un array con 5 colores. Luego, sortear al azar un número entre 0 y 4 y retornar el color correspondiente del array. Para tomar un indice del array al azar te dejamos una combinación de funciones de javascript que te pueden ayudar: Math.floor(Math.random()*5)
//Math.random(): retorna un número random entre 0 y 1.
//Math.floor(): retorna la parte entera de un número con decimales.
//La multiplicación final *5 está buscando obtener un número entre 0 y 5.
//Te sugerimos que guardes en una variable el resultado de ejecutar de la función para luego utilizarlo.

/* function colorAlAzar(){
    let colores =["red", "blue", "yellow", "black", "violet"];
    let randomNumber = Math.floor(Math.random()*4);
    return colores[randomNumber]
} */

function colorAlAzar(arrayColores){
    let randomNumber = Math.floor(Math.random()*arrayColores.length-1);
    return arrayColores[randomNumber]
}

console.log( colorAlAzar(["red", "blue", "yellow", "black", "violet", "orange"]) );

let botonColores = document.querySelector("#botonColores");
botonColores.addEventListener("dblclick", function(){
    let color = colorAlAzar(["red", "blue", "yellow", "black", "violet", "orange"])
    alert(color);
})