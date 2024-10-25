class Producto{
    constructor(nombre, precio, cantidadEnStock){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadEnStock = cantidadEnStock;
    }
}
class Electrodomestico extends Producto{
    constructor(nombre, precio, cantidadEnStock, marca){
        super(nombre, precio, cantidadEnStock);
        this.marca = marca;
    }
}
//Arreglo
let laptop = new Electrodomestico("Laptop", 300, 2, "HP");
let lavadora = new Electrodomestico("Lavadora", 500, 1, "SAMSUNG");
let microondas = new Electrodomestico("Microondas", 800, 5, "IG");
let productos = [laptop, lavadora, microondas];  // Es un arreglo de electrodomesticos llamado producto

let listar = (productos) => {
    let resultado = productos.filter(producto => producto.cantidadEnStock < 10);
    return resultado;
}
console.log(listar(productos));