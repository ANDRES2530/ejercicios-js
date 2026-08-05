let agregar=()=>{
    let titulo=document.getElementById("titulo")
    titulo.innerText="innertext"
}
let agreagarHTML=()=>{
    let titulo2=document.getElementById("titulo")
    titulo2.innerText="<strong>mensaje innerHTML</strong>"

}
function leer(){
    let titulo2=document.getElementById("titulo")
    alert(titulo2.innerText)
}