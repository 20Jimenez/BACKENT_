class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}
class LibroDigital extends Libro{
    //Tamaño
    constructor(titulo, autor, tamaño){
        super(titulo, autor);
        this.tamaño = tamaño;
    }
}
class LibroFisico extends Libro{
    //Numero de paginas
    constructor(titulo, autor, numeroPaginas){
        super(titulo, autor);
        this.numeroPaginas = numeroPaginas;
    }
}
let libros = [new LibroFisico ("Cronicas de una muerte anunciada", "ggm", 200), new LibroDigital("Cien años de soledad", "ggm", "20")];

let listarLibros = (libros, autor) => {
    return libros.filter(libro => libro.autor == autor)
}
console.log(listarLibros(libros, "ggm"));