class Persona{
    //el constructor es un metodo para darle valores a las clases sus atributos los cuales llegan como parametros
    nombre
    apellido
    direccion
    telefono
    constructor(nombre,apellido,direccion,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
    } 
    setNombre(nuevoNombre){    //Set Almacenan o cambian los datos
        this.nombre = nuevoNombre;
    } 
    setApellido(){}
    setDireccon(){}
    setTelefono(){}
    getNombre(){    //Get extraer  o sacar los datos
        return this.nombre;
    } 
    getApellido(){}
    getDireccon(){}
    getTelefono(){}

    informacion(){
        console.log("Datos persona: "+this.nombre+ " " +this.apellido+ " " +this.direccion+ " " +this.telefono)
    }
}
let personita = new Persona("Pedro","Gonzales","123","000000"); //new es la instancia la cual llama a persona pero primero lllama a la funcin constructor lo cual posee nombre, apellido, direccion, telefono
personita.informacion();
let maria = new Persona("Maria","Sanchez","456","11111");
maria.informacion();
personita.nombre ="Raul";
personita.setNombre("Pedro");
console.log(personita.getNombre());
personita.informacion();