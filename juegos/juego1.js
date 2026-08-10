let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let boton = document.getElementById("btnAdivinar");

boton.onclick = function() {

    let numero = document.getElementById("numero").value;

    if (numero == numeroAleatorio) {

        document.getElementById("resultado").textContent =
        "¡Correcto! Adivinaste el número.";

    } else {

        document.getElementById("resultado").textContent =
        "Incorrecto. El número era " + numeroAleatorio;
    }
}