let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let pTags = document.getElementsByTagName("p");

for (let i = 0; i < pTags.length; i++) {
    const element = pTags[i];
    const brAfterP = document.createElement("br");
    element.after(brAfterP);
}

nombre.innerHTML = "Martin";
apellido.innerHTML = "Trochez";
edad.innerHTML = "29";
