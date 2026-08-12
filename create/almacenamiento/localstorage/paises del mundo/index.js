let paises=[]

let guardar=()=>{
    let nombre=document.getElementById("nombre")
    let capital=document.getElementById("capital")
    let continente=document.getElementById("continente")
    let idioma=document.getElementById("idioma")
    let bandera=document.getElementById("bandera")
    
    let pais={
        nombre:nombre.value,
        capital:capital.value,
        continente:continente.value,
        idioma:idioma.value,
        bandera:bandera.value
    }
    paises.push(pais)
    console.log(paises)
    localStorage.setItem("paises",JSON.stringify(paises))
}

let ver=()=>{
    let datos=JSON.parse(localStorage.getItem("paises"))
    let tarjeta=document.getElementById("tarjeta")
    
    for(let i=0;i<=datos.length;i=i+1){
            let tarjeta=document.createElement("div")

            let titulo=document.createElement("h2")
            titulo.textContent=datos[i].nombre

            let capital=document.createElement("p")
            capital.textContent="capital:" +datos[i].capital
            

    }
}

