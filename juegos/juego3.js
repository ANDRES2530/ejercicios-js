let botonAgregar = document.getElementById("btnAgregar");

botonAgregar.onclick = function() {

    let palabra = document.getElementById("palabra").textContent;

    let texto = document.getElementById("texto").value;

    if (texto == palabra) {

        document.getElementById("mensaje").textContent =
        "Correcto";

        let elemento = document.createElement("li");

        elemento.textContent = texto;

        document.getElementById("lista").appendChild(elemento);

    } else {

        document.getElementById("mensaje").textContent =
        "Incorrecto, intenta nuevamente.";
    }
}