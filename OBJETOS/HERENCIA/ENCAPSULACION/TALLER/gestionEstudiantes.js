class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    setNombre(valor){
        this.nombre = valor;
    }
    getNombre(){
        return this.nombre;
    }

    setEdad(valor){
        this.edad = valor;
    }
    getEdad(){
        return this.edad;
    }

    saludar(){
        return `Hola, persona: ${this.nombre}, tu edad es: ${this.edad}`
    }
}

class Estudiante extends Persona {
    #calificaciones;
    constructor(nombre, edad){
        super(nombre, edad);
        this.#calificaciones = [];
    }

    agregarCalificacion(calificacion){ //Calificacion debe ser un valor numerico
        if(calificacion){
            this.#calificaciones.push( parseFloat(calificacion))
        }
        else{
            return "Debes ingresar un valor valido";
        }
    }
    
    calcularPromedio(){
        if(this.#calificaciones.legth >= 2){
            let resultado = 0;

            this.#calificaciones.map(calificacion => {
                resultado += calificacion
            })
            return resultado / this.#calificaciones.length;
        }
    }
}

const perso1 = new Persona("Ramon", 58);
console.log(perso1.saludar());