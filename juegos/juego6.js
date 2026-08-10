let cuadro = document.getElementById("cuadro");

let moviendo = false;

cuadro.onmousedown = function() {

    moviendo = true;
}

document.onmousemove = function(evento) {

    if (moviendo == true) {

        cuadro.style.left = evento.clientX + "px";

        cuadro.style.top = evento.clientY + "px";
    }
}

document.onmouseup = function() {

    moviendo = false;
}