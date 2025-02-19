/*

let contador = 0;

while (contador <= 10) {

    if (contador % 2 == 0) {
        console.log(contador);
    }

    contador++;
}


let suma = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        suma += i;
    }

}

console.log(suma);



let colores = ['rojo', 'verde', 'azul', 'amarillo'];
colores.shift();
console.log(colores);

*/

let frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana", "manzana", "naranja", "uva", "pera"];
let contadorFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    }
    else {
        contadorFrutas[fruta] = 1;

    }


}

console.log("Cantidad de cada tipo de fruta:");
for (let fruta in contadorFrutas) {
    console.log(`${fruta}: ${contadorFrutas[fruta]}`);
}
    

/*

Ejercicios hechos en clase 

let contador = 0; 

while (contador < 10 ){
    console.log(contador);
    contador++;

}


let mensaje = prompt ("Ingrese un mensaje"); 

while (mensaje) {

    console.log(mensaje);
    mensaje = prompt ("Ingrese un mensaje");
}




for (let i=0; i<10; i+=2) {

    console.log(i)

}

console.log("Fin del ciclo"); 



let vidas = 3; 

let numeroAleatorio = Math.floor(Math.random()*10) + 1;  
let numeroUsuario = parseInt(prompt("Adivina el numero del 1 al 10"));

while(numeroUsuario !== numeroAleatorio && vidas > 0 ) {
    vidas--;
    console.log ( "Te quedan " + vidas + " vidas ");
    numeroUsuario = parseInt(prompt("Adivina el numero del 1 al 10"));
}

if(vidas>0){
    console.log("Ganaste");
} else{
    console.log("El numero era " + numeroAleatorio); 

}




let nombres = ["Juan", "Pedro", "Pepe", "Lucho"];



for(let i = 0; i < nombres.length; i++) {

    console.log(nombres[i]); 
    console.log(i); 
}


 

let numeros = [1,2,3,4,5];
let suma=0; 

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
    
}

console.log(suma);

*/


let frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana", "manzana", "naranja", "uva", "pera"];
let contadorFrutas = {};
let i = 0;

while (i < frutas.length) {

    let fruta = frutas[i];
    
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    }
    else {
        contadorFrutas[fruta] = 1;

    }

 i++; 
}



console.log("Cantidad de cada tipo de fruta:");
for (let fruta in contadorFrutas) {
    console.log(`${fruta}: ${contadorFrutas[fruta]}`);
}
    