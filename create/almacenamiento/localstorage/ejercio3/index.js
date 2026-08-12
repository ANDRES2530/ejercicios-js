let productos=[];
let guardar=()=>{
    let nombre=document.getElementById("name")
    let tipo=document.getElementById("type")
    let precio=document.getElementById("price")
    let prod={
        nombre:nombre.value,
        tipo:tipo.value,
        precio:precio.value
    }
    productos.push(prod)
    console.log(productos)
    localStorage.setItem("productos",JSON.stringify(productos))
    nombre.value=""
    tipo.value=""
}

let verDatos=()=>{
    tabla.textContent=""
    let datos=JSON.parse(localStorage.getItem("productos"))
   /*  alert(datos)
    let tabla=document.createElement("table") */
    
    for(let i=0;i<=datos.length;i=i+1){
            let fila=document.createElement("tr")
            let celdaNombre=document.createElement("td")
            celdaNombre.textContent=datos[0].nombre
            fila.appendChild(celdaNombre)
            let celdaTipo=document.createElement("td")
            celdaTipo.textContent=datos[0].tipo
            fila.appendChild(celdaTipo)
            let celdaPrecio=document.createElement("td")
            celdaPrecio.textContent=datos[0].precio
            fila.appendChild(celdaPrecio)
            tabla.appendChild(fila)
    }
    
    let div=document.getElementById("tabla")
    div.appendChild(tabla)
}

