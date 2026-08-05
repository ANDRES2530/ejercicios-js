function leerTexto(){
    let parrafo=document.getElementById("parrafo")
    let texto=parrafo.innerHTML
    console.log("el texto es:" + texto)
}

let cambiarTitulo=()=>{
    let titulo=document.getElementById("titulo")
    titulo.innerHTML="TITULO INNER HTML"
}

function cambiarParrafo(){
    let parrafo=document.getElementById("parrafo")
    parrafo.innerHTML="parrafo innerHTML"
}
function mostrarHTML(){
    let contenedor=document.getElementById("contenedor")
    contenedor.innerHTML="<h3>esto es una prueba de codigo HTML</h3>"
}