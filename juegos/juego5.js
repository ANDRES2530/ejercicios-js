let boton = document.getElementById("boton");

let contador = 0;

boton.onclick = function() {

    contador = contador + 1;

    document.getElementById("contador").textContent = contador;

    let posicionX = Math.floor(Math.random() * 400);

    let posicionY = Math.floor(Math.random() * 200);

    boton.style.left = posicionX + "px";

    boton.style.top = posicionY + "px";
}