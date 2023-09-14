let numero = [];
let acum = 0.0;
let acumProducto = 0.0;
let bodyHTML = document.getElementsByTagName("body");

for (let i = 0; i < 4; i++) {
  const elemento = parseFloat(prompt("Ingrese el numero " + (i + 1)));
  numero.push(elemento);
  acum += elemento;
  if (i === 0) {
    acumProducto = elemento;  
  }
  acumProducto *= elemento;
}

for (let i = 0; i < numero.length; i++) {
  const pTag = document.createElement("p");
  pTag.innerHTML = "Nota " + (i + 1) + " = " + numero[i];
  bodyHTML[0].appendChild(pTag);
}

let productoHTML = document.createElement("p");
let sumaHTML = document.createElement("p");
sumaHTML.innerHTML = "La suma de los numeros es " + acum;
productoHTML.innerHTML = "El producto es " + acumProducto;
bodyHTML[0].appendChild(sumaHTML);
bodyHTML[0].appendChild(productoHTML);
