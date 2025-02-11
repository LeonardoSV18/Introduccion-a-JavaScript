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