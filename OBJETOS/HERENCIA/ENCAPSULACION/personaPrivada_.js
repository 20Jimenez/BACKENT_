//Convension (_)
class Persona{
    nombre; 
    apellido;
    _edad;  //El guin(_) para que sea privada
    constructor( nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this._edad = edad;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombreN){
        this.nombre = nombreN;
    }
    getApellido(){
        return this.apellido;
    }
    setApellido(apellidoN){
        this.nombre = apellidoN;
    }
    getEdad(){
        return this._edad;
    }
    setEdad(edadN){
        this.nombre = edadN;
    }
    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this._edad}`)
    }
}
let pedro = new Persona("Pedro", "Ramirez", "50");
pedro.mostrarInformacion();
pedro._edad = "30";
pedro.mostrarInformacion();