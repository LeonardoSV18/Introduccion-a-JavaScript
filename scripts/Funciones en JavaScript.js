
let LibrosLeidos = ['Libro1', 'Libro2', 'Libro3'];

let NuevoLibro = 'Libro4' ;

function agregarLibro(titulo){

    LibrosLeidos.push(titulo);


}

function mostrarLibrosLeidos(){

    for( let i = 0; i < LibrosLeidos.length; i++) {
        console.log(LibrosLeidos[i]);
    }
}

agregarLibro(NuevoLibro);
mostrarLibrosLeidos();


/* Ejercicios de clase 

function anosParaElRetiro(edad){
    console.log(65 - edad);
}

anosParaElRetiro(21); 


function EsTarde(hora) {

    if (hora>12 ) {
        return "Es Tarde";
    }

    else {
        return "Es Temprano"; 
    }
}


    console.log(EsTarde(13));


function Hola(nombre){
    console.log("Hola,",nombre);
}

Hola("Leonardo")


function factorial(num){ 
    if(num <= 1) {
        return 1; 
    }
    else {
        return num * factorial (num-1); 
    }

}

console.log(factorial(5));


function BubbleSort(arr){
    let n = arr.length;
    for(let i=0; i < n; i++)
        for(let j=0; j < n - i - 1; j++){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j]; 
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
            
        return arr;
}

console.log(BubbleSort([5, 3, 8, 1, 2, 7, 4, 6 ])); 

*/ 

