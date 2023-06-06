let url = "https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=g"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)

        let tituloGif = document.querySelector(".tituloGif")
        if(data.data.title == ""){
            tituloGif.innerText= "Este gif no tiene título"    
        } else {
            tituloGif.innerText=data.data.title
        }

        let gif = document.querySelector(".gif")
        gif.src=data.data.images.original.url

    })
    .catch(function(error){
        console.log(error)
    })

    //Crear la funcionalidad para pedir un nuevo gif
    let nuevoGif = document.querySelector(".nuevoGif");

    nuevoGif.addEventListener("click", function(event){
    event.preventDefault();
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data)

                let tituloGif = document.querySelector(".tituloGif")
                if(data.data.title == ""){
                    tituloGif.innerText= "Este gif no tiene título"    
                } else {
                    tituloGif.innerText=data.data.title
                }

                let gif = document.querySelector(".gif")
                gif.src=data.data.images.original.url

            })
            .catch(function(error){
                console.log(error)
            })


    })

    //Tarea: hacer una funcion pedir nuevo gif.



let urlProvincias = "https://apis.datos.gob.ar/georef/api/provincias"

fetch(urlProvincias)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let arrayProvincias = data.provincias;
        let provinciasContainer = document.querySelector('.provincias');
        //Variable para conter a los elemento de la lista que arma el for
        let provincias = ""

        for (let i=0; i<arrayProvincias.length;i++){

            //cada vuelta del for tiene que armar un elemento de la lista.
           provincias += "<li>"+ arrayProvincias[i].nombre +"</li>"
           //provincias += <li>arrayProvincias[i].nombre</li>
        }

        //Pasar la info de las provincias al html
        provinciasContainer.innerHTML = provincias


    })
    .catch(function(error){
        console.log(error)
    })

    