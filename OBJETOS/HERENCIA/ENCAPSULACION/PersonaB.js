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
    }

    mostrarNotas() {
        console.log(`Notas del estudiante ${this.nombre} ${this.apellido}:`, this.#notas);
    }

    // Método para obtener el promedio de las notas
    obtenerPromedio() {
        if (this.#notas.length === 0) return 0; // Evita división por cero
        const suma = this.#notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this.#notas.length;
    }
}

// Ejemplo de uso
const estudiante1 = new Estudiante("Juan", "Pérez", "Calle Falsa 123", 20, "E001");
estudiante1.agregarNota(5.0);
estudiante1.agregarNota(4.9);
estudiante1.agregarNota(4.5);

estudiante1.mostrarInformacion();
estudiante1.mostrarNotas();
console.log(`Promedio: ${estudiante1.obtenerPromedio()}`);