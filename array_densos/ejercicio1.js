let vector1 = new Array(10); 
let vector2 = [];
let vector3 = [];
let mensaje1 = "Vector 1: ";
let mensaje2 = "Vector 2: ";
let mensaje3 = "Vector 3: ";

for (let i = 0; i < vector1.length; i++) {
    let number = (Math.random() * 500) + 1;
	number = Math.floor(number)
    vector1[i] = number;
    mensaje1 += vector1[i] + " ";
}

for (let i = 0; i < vector1.length; i++) {
    let elemento = vector1[i];
    if (elemento < 250) {
        vector2.push(elemento);
        mensaje2 += vector2[vector2.length - 1] + " "; 
    } else {
        vector3.push(elemento);
        mensaje3 += vector3[vector3.length - 1] + " ";
    }
}

let parrafo1 = document.createElement("p");
parrafo1.textContent = mensaje1;

let parrafo2 = document.createElement("p");
parrafo2.textContent = mensaje2;

let parrafo3 = document.createElement("p");
parrafo3.textContent = mensaje3;

document.body.appendChild(parrafo1);
document.body.appendChild(parrafo2);
document.body.appendChild(parrafo3);

