let nombreUsuario = document.getElementById("nombreUsuario");
let emailUsuario = document.getElementById("emailUsuario");
let nombreInput = document.getElementById("nombreInput");
let emailInput = document.getElementById("emailInput");
let botonInput = document.getElementById("botonInput");

botonInput.addEventListener("click", () => {
    nombreUsuario.innerHTML = nombreInput.innerHTML;
    emailUsuario.innerHTML = emailInput.innerHTML;
});