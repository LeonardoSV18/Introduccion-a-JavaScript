
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