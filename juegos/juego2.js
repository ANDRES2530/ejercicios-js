let contador = 0;

let boton = document.getElementById("btnClick");

boton.onclick = function() {

    contador = contador + 1;

    document.getElementById("contador").textContent = contador;

    if (contador >= 10) {

        document.getElementById("contador").style.color = "red";
    }
}