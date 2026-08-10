/* localstorage es una herramienta de javascript que permite 
guardar informacion en el navegador ,datos permanecen guardadas
aunque actualices la pagina o la cierres
metodos=>
setItem=>crear(clave,valor)
getItem=>traer=>clave */

let guardar=()=>{
    let name=document.getElementById("nombre").value
    localStorage.setItem("nombre",name)
}
let ver=()=>{
    let n=localStorage.getItem("nombre")
    alert(n)

}