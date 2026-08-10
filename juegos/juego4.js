let boton = document.getElementById("agregar");

boton.onclick = function() {

    let texto = document.getElementById("texto").value;

    let elemento = document.createElement("li");

    elemento.textContent = texto;

    document.getElementById("lista").appendChild(elemento);

    document.getElementById("texto").value = "";
}