let innerT=()=>{
    let textov=document.getElementById("textov")
    let textoO=document.getElementById("textoO")
    let contenedor=document.getElementById("contenedor")
    alert(textov.innerText)
    alert(contenedor.innerText)
    console.log(textoO.innerText)
}
//innertext no permite leer etiquetas de contenido de texto
//que no esten visibles display:none

let textC=()=>{
    let textov=document.getElementById("textov")
    let textoO=document.getElementById("textoO")
    let contenedor=document.getElementById("contenedor")
    alert(textov.textContent)
    alert(contenedor.textContent)
    console.log(textoO.textContent)
}
//textcontent permite leer cualquier contenido 