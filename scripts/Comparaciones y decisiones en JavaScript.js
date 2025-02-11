// let nota = 76
// let nota = 45
// let nota = 60
let nota = 75
//let nota = 0

if(nota>0) {
    if (nota>=90) { console.log("Excelente"); }

    else if (nota>=75 && nota <= 89) { console.log("Bien"); }

    else if (nota>=60 && nota <= 74) {console.log("Suficiente"); }

    else console.log("No Aprueba");
}
    



/* Tipo de datos necesarios de conocer
en Javascript - Ejercicios en clase*/

console.log(true);
console.log(typeof true);

console.log(5 + "5");

let nombre = "Diego";

console.log("Hola " + nombre + " Como estas?");

let numeroEspecial=5;

let numeroEspecial2 = "5";

console.log(numeroEspecial + parseInt(numeroEspecial2));

let numero = 5;

console.log(numero);

console.log(numero + 5);

console.log(numero);

numero = numero + 5; 

console.log(numero); 

numero = numero + 15;

console.log(numero);

let nombre2 = "Juan";

console.log(nombre2);

nombre2 = "Leonardo";

console.log(nombre2);

const nombre3 = "Pedro";

console.log(nombre3);

console.log(5 / 10);

console.log(10 % 5);

console.log(10 == 9);




let numeroAleatorio = 4;

if (numeroAleatorio > 4) {
    console.log("El numero es mayor a 4 ");
} else if (numeroAleatorio < 4) {
    console.log("El numero es menor a 4");
}    else {
     console.log("El numero es igual a 4");
}


console.log("Aqui termina el programa");


let membresia = true;

let conexionAInternet = true;

if(membresia && conexionAInternet){
    console.log("Puedes ver la pelicula")
} else {
    console.log("No puedes ver la pelicula");
}

let Nacionalidad = "Argentino"; 

let naturalizado = true; 

if(Nacionalidad === " Mexichango " || naturalizado){
    console.log("Puedes conseguir el pasaporte");
}
else{
    console.log("No puedes sacar el pasaporte");
}

if(!false){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

console.log(true == 1);

console.log(false == 0);