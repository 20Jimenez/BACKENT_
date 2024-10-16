//ningun tipo de convencion _ o # =>encapsulacion
class Persona{
    nombre;
    edad;
    constructor(nombre1, edad1){
        this.nombre = nombre1;
        this.edad = edad1;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombreN){
        this.nombre = nombreN;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edadN){
        this.edad = edadN;
    }
    mostrarInformacion(){
        console.log(this.nombre, this.edad)
    }
}

let mauricio = new Persona ("Mauricio Perez", "32");
console.log(mauricio);
mauricio.edad = "20";   //Publico
mauricio.mostrarInformacion();
console.log(mauricio.getEdad(26));
mauricio.getEdad();  //Sirve para ver la informacion
mauricio.mostrarInformacion();   //Sirve para vcer Informacion