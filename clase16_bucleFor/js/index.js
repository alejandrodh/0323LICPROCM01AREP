

    // Precalentando a
    for (let i = 0; i < 5; i++) {
      console.log("Practicando con el bucle for");
    }

    // Precalentando b Imprimir 10 veces con template literals
    for (let i = 0; i < 10; i++) {
      console.log(`La variable i tiene el valor ${i}`);
    }

    // Precalentando c Imprimir 10 múltiplos de 2
    for (let i = 0; i < 10; i += 2) {
      console.log(i);
    }

    // Imprimir 50 múltiplos de 5
    for (let i = 0; i < 50; i += 5) {
      console.log(i);
    }

    // Precalentando d Imprimir números del 100 al 0
    for (let i = 100; i >= 0; i--) {
      console.log(i);
    }

    // Tablas de multiplicar
    let base = 3;
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
      resultados.push(base * i);
    }
    console.log(resultados);

    // Obtener el total
    let ganancias = [10, -5, 8, -3, 12, -7, 6, -1, 15, -2];
    let total = 0;
    for (let i = 0; i < ganancias.length; i++) {
      total += ganancias[i];
    }
    console.log("Total de ganancias:", total);

    // Recorrer array de temas
    let healingIsDifficult = [
      'Fear',
      'Drink to Get Drunk',
      'Taken for Granted',
      'Blow It All Away',
      'Get Me',
      'Im Not Important to You',
      'Sober and Unkissed',
      'Healing Is Difficult',
      'Judge Me',
      'Little Man',
      'Insidiously'
    ];
    for (let i = 0; i < healingIsDifficult.length; i++) {
      console.log(healingIsDifficult[i]);
    }

    // Recorrer array de temas con número de orden
    for (let i = 0; i < healingIsDifficult.length; i++) {
      console.log(`${i + 1} ${healingIsDifficult[i]}`);
    }

    // Recorrer array de objetos literales
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
    ];
    for (let i = 0; i < got.length; i++) {
        console.log(`Hola ${got[i].nombre} ${got[i].apellido} criatura viajera!`);
        if (got[i].ciudad) {
          console.log(`Soy ${got[i].nombre} ${got[i].apellido} de la ciudad ${got[i].ciudad}`);
        }
      }