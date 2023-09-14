let abonar = 0;
let cantidad = 0;
let precio = 0;
let bodyHTML = document.getElementsByTagName("body");

precio = parseInt(prompt('Ingrese el precio del producto'));
cantidad = parseInt(prompt('Ingrese la cantidad del producto'));
abonar = precio * cantidad;

let abonarHTML = document.createElement("p");
let cantidadHTML = document.createElement("p");
let precioHTML = document.createElement("p");

precioHTML.innerHTML = "El precio del producto es: " + precio;
cantidadHTML.innerHTML = "La cantidad de articuloes pedidos es: " + cantidad;
abonarHTML.innerHTML = "La cantidad a abonar es: " + abonar;

bodyHTML[0].appendChild(precioHTML);
bodyHTML[0].appendChild(cantidadHTML);
bodyHTML[0].appendChild(abonarHTML);