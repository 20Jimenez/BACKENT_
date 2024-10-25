class Curso{
    constructor(nombreCurso){
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }
    agragarEstudiantes(estudiante){
        this.estudiantes.push(estudiante);
    }
    calcularPromedioCurso(){
        let suma = 0;
        for(let i = 0; i < this.estudiantes.length; i++){
            for(let j = 0;  j < this.estudiantes[i].calificaciones.length; j++){
                suma +=  this.estudiantes(i).calificaciones(j);
                total = total + 1;
            }
        }
        return suma / total;
    }
}

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return `
            Hola, persona: ${this.nombre}, tu edad es: ${this.edad}
        `;
    }
}

class Estudiante extends Persona {
    calificaciones;
    constructor(nombre, edad){
        super(nombre, edad);
        this.calificaciones = [];
    }
    agregarCalificacion(calificacion){ //calificacion debe ser un valor numerico
        if(calificacion){
            this.calificaciones.push( parseFloat(calificacion) )
        }else{
            return "Debes ingresar un valor valido";
        }
    }
    calcularPromedio(){
        if( this.calificaciones.length >= 2 ){
            let resultado = 0;
            this.calificaciones.map(calificacion => {
                resultado += calificacion
            })

            return resultado / this.calificaciones.length;
        }
        
    }
}

const perso1 = new Persona("Ramon Valdez", 58);
console.log(perso1.saludar());

const estu1 = new Estudiante("Sebastian Rengifo", 25);
const estu2 = new Estudiante("Camilo Perez", 25);
console.log( estu1.saludar() );
estu1.agregarCalificacion(30);
estu2.agregarCalificacion(80);
let prog = new Curso("Programacion");

//console.log( estu1.calcularPromedio() )
prog.agragarEstudiantes(estu1);
prog.agragarEstudiantes(estu2);
console.log( prog.calcularPromedioCurso());