let form = document.querySelector('form');
let inputDeBusqueda = document.querySelector('input');

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(inputDeBusqueda.value.length < 4){
        alert('El campo es obligatorio')

        //Desafío 1: reemplazar el alert por un mensaje en el html
    } else {
        this.submit()
    }
})