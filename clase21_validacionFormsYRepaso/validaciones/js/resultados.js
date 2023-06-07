let qs = location.search //qs en formato texto.
let qsToObject = new URLSearchParams(qs);
let datoABuscar = qsToObject.get("buscar") //Necisto lo que el usuario escribió en el campo input.

let endpointBusqueda = `https://api.giphy.com/v1/gifs/search?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&q=${datoABuscar}&limit=10&offset=0&rating=g&lang=en`;


fetch(endpointBusqueda)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        //Mostrar resultados de búsqueda en la pantalla.

        // Mostrar un aviso en caso de que la busqueda no obtenga resultados.

    })
    .catch( function(e){
        console.log(e);
    })