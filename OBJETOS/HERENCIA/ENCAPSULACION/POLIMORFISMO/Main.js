//Llamar para crear las instancias
import Circulo from "./Circulo.js";
import Rectangulo from "./Rectangulo.js";

let miRectangulo = new Rectangulo(5,10);
//Hallar el area y el perimetro del rectangulo
console.log(miRectangulo.calcularArea());
console.log(miRectangulo.calcularPerimetro());

let miCirculo = new Circulo(4);
console.log(miCirculo.calcularArea());
console.log(miCirculo.calcularPerimetro());