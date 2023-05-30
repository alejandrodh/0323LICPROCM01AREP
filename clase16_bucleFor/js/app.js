// Bucle for
// Su sintaxis se compone de tres partes:
// Inicio; condicion de paso ;modificacion

// Imprimí por consola 5 veces la frase: “Practicando con el bucle for”.

// for(let i = 0; i < 135; i++){
//     console.log('Practicando con el bucle for');
// }

// Imprimí por consola:
// 10 múltiplos de 2 ¿Qué parte del bucle for modificarías para que i varíe de 2 en 2.

// for(let i = 0; i < 10; i++){
//     console.log(i*2);
// }

// Creá un bucle for que imprima por consola los números desde el 100 al 0. 



// Tablas de multiplicar
// Utilizando un bucle for deberás generar un array con los resultados.


// Creá la variable base que contendrá un número. Definí también una variable resultados que sea un array vacío.
// let base = 15;
// let resultados=[];

// Crea un for que recorra desde el 1 al 10.
// En cada iteración deberás multiplicar el número base por cada valor de la iteración y guardar el resultado dentro del array. Para ello necesitarás usar uno de los métodos de arrays que te permite agregar elementos.

// for(let i = 1;i <= 10; i++){
    
//     resultados.push(base * i);
// }
// console.log(resultados);


// El array resultados debe contener la tabla de multiplicar del número base. Por ejemplo, si base es 2, resultados debe ser [2,4,6,8,10,12,14,16,18,20]
// Imprimir el array resultados en consola.

// Prueba el código con distintos números base para asegurar que funciona correctamente.



// Recorriendo arrays de objetos literales
// 	Dada la siguiente variable:
// Recorré el array de personas para:

// Imprimir por consola la frase: “Hola NOMBRE APELLIDO criatura viajera!”
// Imprimir por consola la frase: “Soy NOMBRE APELLIDO de la ciudad CIUDAD”
// 	No olvides usar también el método .length para que el bucle for pueda funcionar sin inconvenientes por más que cambié el contenido del array.


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
// Imprimir por consola la frase: “Hola NOMBRE APELLIDO criatura viajera!”
for(let i = 0; i < got.length; i++){
    console.log('Hola ' + got[i].nombre + ' ' + got[i].apellido + ' criatura viajera!');
}





























// for(let i = 0; i < 5; i++){
//     console.log('Primer for: ' + i);
// }

// for(let i = 5; i > 0; i--){
//   console.log('Segundo for: ' + i);
// }

// let nombres = ['Lua', 'Martin', 'Lorenzo', 'Martina']

// for(let i = 0; i < nombres.length; i++){
//     console.log('El nombre es: ' + nombres[i] + ' y su posición en el array es: ' + i);
// }

