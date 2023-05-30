console.log("hola");

//window.addEventListener("click", function(milanesa){
//    console.log(milanesa);
//})

//Capturar
let link = document.querySelector("a");

//Definir addEvnetListener
link.addEventListener("click", function(e){
    e.preventDefault(); //compartamiento default del HTML. Lo tenemos que frenar
    this.style.color = "red";
})