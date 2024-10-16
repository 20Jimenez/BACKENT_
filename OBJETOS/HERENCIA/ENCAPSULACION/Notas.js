/*class Persona {
    constructor(nombre, apellido, direccion, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Estudiante extends Persona {
    #notas; // Propiedad privada

    constructor(nombre, apellido, direccion, edad, id) {
        super(nombre, apellido, direccion, edad);
        this.id = id;
        this.#notas = []; // Inicializa las notas como un array vacío
    }
    agregarNota(nota) {
        this.#notas.push(nota);
        console.log("Estudiante ", this.nombre, "Notas", nota)
    }
    listarNotas(){
        for(let i=0; i < this.#notas.length;i++){
            console.log("notas", this.#notas(i));
        }
    }
    promedio(){
        let resultado = 0;
        let resultadoP = 0;
        for(let i=0; i < this.#notas.length;i++){
            resultado = this.#notas[i] + resultado;
        }
        resultadoP = resultado / this.#notas.length
        console.log("Promedio de notas" + resultadoP);
    }
}
let estudiante1 = new Estudiante("Camilo", "Martinez", "123", 15, "A01");
estudiante1.mostrarInformacion();  //Carlos Martinez 123 15
estudiante1.agregarNota(2);
estudiante1.agregarNota(3);
estudiante1.agregarNota(1);
estudiante1.agregarNota(5);
estudiante1.listarNotas();  //Obtiene todo el listado de notas de el estudiante
estudiante1.promedio();*/

class Persona {
    constructor(nombre, apellido, direccion, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.edad = edad;
    }

    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Edad: ${this.edad}`);
    }
}

class Estudiante extends Persona {
    #notas; // Propiedad privada

    constructor(nombre, apellido, direccion, edad, id) {
        super(nombre, apellido, direccion, edad);
        this.id = id;
        this.#notas = []; // Inicializa las notas como un array vacío
    }

    agregarNota(nota) {
        this.#notas.push(nota);
        console.log("Estudiante ", this.nombre, "Nota agregada:", nota);
    }

    listarNotas() {
        console.log(`Notas de ${this.nombre} ${this.apellido}:`);
        for (let i = 0; i < this.#notas.length; i++) {
            console.log(`Nota ${i + 1}: ${this.#notas[i]}`); // Cambiado de (i) a [i]
        }
    }

    promedio() {
        if (this.#notas.length === 0) {
            console.log("No hay notas para calcular el promedio.");
            return;
        }

        let total = 0;
        for (let i = 0; i < this.#notas.length; i++) {
            total += this.#notas[i];
        }
        
        let resultadoP = total / this.#notas.length;
        console.log("Promedio de notas:", resultadoP);
    }
}

let estudiante1 = new Estudiante("Camilo", "Martinez", "123", 15, "A01");
estudiante1.mostrarInformacion(); // Muestra la información del estudiante
estudiante1.agregarNota(2);
estudiante1.agregarNota(3);
estudiante1.agregarNota(1);
estudiante1.agregarNota(5);
estudiante1.listarNotas(); // Muestra el listado de notas del estudiante
estudiante1.promedio(); // Calcula y muestra el promedio