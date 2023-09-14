let ancho = prompt('Ingrese el ancho');
let altura = prompt('Ingrese la altura');
let area = parseFloat(ancho) * parseFloat(altura);

document.getElementById("ancho").innerHTML = "La ancho del rectangulo es: " + ancho;
document.getElementById("altura").innerHTML = "La altura del rectangulo es: " + altura;
document.getElementById("area").innerHTML = "La area del rectangulo es: " + area;