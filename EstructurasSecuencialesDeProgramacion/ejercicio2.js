let numero = [];
let acum = 0.0;
let bodyHTML = document.getElementsByTagName("body");

for (let i = 0; i < 4; i++) {
  const elemento = parseFloat(prompt("Ingrese la nota " + (i + 1))); 
  numero.push(elemento);
  acum += elemento;
}

for (let i = 0; i < numero.length; i++) {
    const pTag = document.createElement("p");
    pTag.innerHTML = "Nota " + (i + 1) + " = " + numero[i];
    bodyHTML[0].appendChild(pTag);
}

let promedioHTML = document.createElement("p");
promedioHTML.innerHTML = "El promedio es " + acum / numero.length;
bodyHTML[0].appendChild(promedioHTML);