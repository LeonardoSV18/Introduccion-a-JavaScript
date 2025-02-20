
/* Reto */ 
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    mostrarInfo: function() {
      console.log(`Auto: ${this.marca} Modelo: ${this.modelo}, Año: ${this.año}`);
    }
};
  
auto.mostrarInfo();


const libro = {
    titulo : "La Metamorphosis",
    autor : "Kafka",
    anio : "1915",
    describirLibro : function() {
        console.log( `Libro Titulado: ${this.titulo} escrito por ${this.autor} en el anio de ${this.anio}` ) ;
    }

}

libro.describirLibro();


/* Ejercicios de clase : 

const persona = {
    nombre: "Diego",
    edad: 21,
    ciudad: "CDMX",
    mayorEdad: true,
    pasatiempos: ["videojuegos", "gym", "guitarra"],
    mascota: {
        nombre: "Firulais",
        edad: 2,
        raza: "Gato"
    },
    saludar: function () {
        console.log("Hola soy" - this.nombre);
    },
    presentarse: function () {
        console.log(`Hola me llamo ${this.nombre} tengo ${this.edad} años y mi mascota se llama ${this.mascota.nombre}`);
    },
}

console.log(persona.nombre);
console.log(persona.edad);


for (let i = 0; i < persona.pasatiempos.length; i++) {
    const element = persona.pasatiempos[i];
    console.log(element);
}


console.log(persona.mascota.nombre);

console.log(persona["nombre"]);

persona.saludar();

let { nombre, edad, ciudad } = persona;
console.log(nombre);


console.log("Hola me llamo " + persona.nombre + ", mis pasatiempos son ir al " + persona.pasatiempos[1] + ", jugar " + persona.pasatiempos[0] + ", mi mascota es" + persona.mascota.nombre + " y es un " + persona.mascota.raza);

persona.presentarse();

const albums = [
    {
        nombre: "Album 1",
        canciones: ["cancion 1", "cancion 2", "cancion 3"],

    },
    {
        nombre: "Album 2",
        canciones: ["cancion 3"],

    },

    {
        nombre: "Album 1",
        canciones: ["cancion 1", "cancion 2"],

    },

]


for (let i = 0; i < albums.length; i++) {
    console.log(albums[i].nombre);
    for (let j = 0; j < albums[i].canciones.length; j++) {
        console.log(albums[i].canciones[j]);
    }

}

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} anios`);

    }

    cumplirAnios() {
        this.edad++; 
    }


}


const persona3 = new Persona("Diego", 21, "Masculino");
const persona4 = new Persona("Ana", 23, "Femenino");

console.log(persona3);
console.log(persona4);

persona3.saludar();
persona4.saludar(); 

persona3.cumplirAnios();



class Estudiante extends Persona {
    constructor(nombre, edad, genero, carrera){
        super(nombre, edad, genero);
        this.carrera = carrera; 

    }

    estudiar(){
        console.log(`Estoy estudiando ${this.carrera}`); 

    }

}

const estudiante = new Estudiante("Diego", 21, "Masculino", "Ing. en Computacion");
console.log(estudiante);

estudiante.saludar(); 


*/ 