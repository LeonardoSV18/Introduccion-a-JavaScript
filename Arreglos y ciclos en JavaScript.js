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
    

