let agregar=()=>{
    let contenedor=document.getElementById("contenedor");
    let tabla=document.createElement("table");
    tabla.style.border="2px solido red";
    
    //crea filas
    let fila1=document.createElement("tr");
    let fila2=document.createElement("tr");
    let fila3=document.createElement("tr");
    let fila4=document.createElement("tr");
    let fila5=document.createElement("tr");
    
    //crea celdas de la fila 1
    let celda1_1=document.createElement("td");
    let celda2_1=document.createElement("td");
    let celda3_1=document.createElement("td");
    let celda4_1=document.createElement("td");
    let celda5_1=document.createElement("td");
    
    //crea celdas de la fila 2
    let celda1_2=document.createElement("td");
    let celda2_2=document.createElement("td");
    let celda3_2=document.createElement("td");
    let celda4_2=document.createElement("td");
    let celda5_2=document.createElement("td");

    //crea celdas de la fila 2
    let celda1_3=document.createElement("td");
    let celda2_3=document.createElement("td");
    let celda3_3=document.createElement("td");
    let celda4_3=document.createElement("td");
    let celda5_3=document.createElement("td");

    //crea celdas de la fila 2
    let celda1_4=document.createElement("td");
    let celda2_4=document.createElement("td");
    let celda3_4=document.createElement("td");
    let celda4_4=document.createElement("td");
    let celda5_4=document.createElement("td");

    //crea celdas de la fila 2
    let celda1_5=document.createElement("td");
    let celda2_5=document.createElement("td");
    let celda3_5=document.createElement("td");
    let celda4_5=document.createElement("td");
    let celda5_5=document.createElement("td");

    //crea contenido para las celdas
    celda1_1.textContent="celda 1_1";
    celda2_1.textContent="celda 2_1";
    celda3_1.textContent="celda 3_1";
    celda4_1.textContent="celda 4_1";
    celda5_1.textContent="celda 5_1";

    celda1_2.textContent="celda 1_2";
    celda2_2.textContent="celda 2_2";
    celda3_2.textContent="celda 3_2";
    celda4_2.textContent="celda 4_2";
    celda5_2.textContent="celda 5_2";

    celda1_3.textContent="celda 1_3";
    celda2_3.textContent="celda 2_3";
    celda3_3.textContent="celda 3_3";
    celda4_3.textContent="celda 4_3";
    celda5_3.textContent="celda 5_3";

    celda1_4.textContent="celda 1_4";
    celda2_4.textContent="celda 2_4";
    celda3_4.textContent="celda 3_4";
    celda4_4.textContent="celda 4_4";
    celda5_4.textContent="celda 5_4";

    celda1_5.textContent="celda 1_5";
    celda2_5.textContent="celda 2_5";
    celda3_5.textContent="celda 3_5";
    celda4_5.textContent="celda 4_5";
    celda5_5.textContent="celda 5_5";

    tabla.appendChild(celda1_1);
    tabla.appendChild(fila1);
    tabla.appendChild(celda2_1);
    tabla.appendChild(fila1);
    tabla.appendChild(celda3_1);
    tabla.appendChild(fila1);
    tabla.appendChild(celda4_1);
    tabla.appendChild(fila1);
    tabla.appendChild(celda5_1);
    tabla.appendChild(fila1);

    tabla.appendChild(celda1_2);
    tabla.appendChild(fila2);
    tabla.appendChild(celda2_2);
    tabla.appendChild(fila2);
    tabla.appendChild(celda3_2);
    tabla.appendChild(fila2);
    tabla.appendChild(celda4_2);
    tabla.appendChild(fila2);
    tabla.appendChild(celda5_2);
    tabla.appendChild(fila2);

    tabla.appendChild(celda1_3);
    tabla.appendChild(fila3);
    tabla.appendChild(celda2_3);
    tabla.appendChild(fila3);
    tabla.appendChild(celda3_3);
    tabla.appendChild(fila3);
    tabla.appendChild(celda4_3);
    tabla.appendChild(fila3);
    tabla.appendChild(celda5_3);
    tabla.appendChild(fila3);

    tabla.appendChild(celda1_4);
    tabla.appendChild(fila4);
    tabla.appendChild(celda2_4);
    tabla.appendChild(fila4);
    tabla.appendChild(celda3_4);
    tabla.appendChild(fila4);
    tabla.appendChild(celda4_4);
    tabla.appendChild(fila4);
    tabla.appendChild(celda5_4);
    tabla.appendChild(fila4);

    tabla.appendChild(celda1_5);
    tabla.appendChild(fila5);
    tabla.appendChild(celda2_5);
    tabla.appendChild(fila5);
    tabla.appendChild(celda3_5);
    tabla.appendChild(fila5);
    tabla.appendChild(celda4_5);
    tabla.appendChild(fila5);
    tabla.appendChild(celda5_5);
    tabla.appendChild(fila5);
    contenedor.appendChild(tabla)
}