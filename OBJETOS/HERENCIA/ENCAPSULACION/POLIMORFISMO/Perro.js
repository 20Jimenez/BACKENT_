// El polimorfismo es crear un objeto y luego llamar diferentes tipos de propiedades
class Perro {    
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido(tipoSonido = "ladrar") {
        if (tipoSonido === "ladrar") {
            console.log(`${this.nombre} dice: Guau guau`);
        } else if (tipoSonido === "gruñir") {
            console.log(`${this.nombre} dice: Grrrr`);
        } else if (tipoSonido === "llorar") {
            console.log(`${this.nombre} dice: Auuu`);
        } else {
            console.log(`${this.nombre} hace un sonido desconocido`);
        }
    }
}

// Crear una instancia de la clase Perro
const miPerro1 = new Perro("Max");
const miPerro2 = new Perro("Roa")
const miPerro3 = new Perro("Lola")

// Usar los métodos con diferentes parámetros
miPerro1.hacerSonido();          // Ladrar por defecto
miPerro2.hacerSonido("gruñir");
miPerro3.hacerSonido("llorar");
