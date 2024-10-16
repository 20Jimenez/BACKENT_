class Autos{
    marca
    modelo
    año
    color
    constructor(marca,modelo,año,color){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    setMarca(){}
    getMarca(){}

    informacion(){
        console.log("Datos carro: "+this.marca+ " " +this.modelo+ " " +this.año+ " " +this.color)
    }
}
let carrito = new Autos("Honda","Civic","2015","Gris")
carrito.informacion();