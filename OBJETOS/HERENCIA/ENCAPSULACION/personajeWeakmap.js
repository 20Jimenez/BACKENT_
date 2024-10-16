const datosPrivados = new WeakMap();   //weakMap propiedades de manera privada 
class Persona{
    constructor(nombre, edad){
        datosPrivados.set(this,{nombre, edad});
    }
    getNombre(){
        return datosPrivados.get(this).nombre;
    }
    setNombre(nombreN){
        let datos = datosPrivados.get(this);
        datos.nombre = nombreN;
        datosPrivados.set(this,datos);
    }
    getEdad(){
        return datosPrivados.get(this).edad;
    }
    setEdad(edadN){
        let datos = datosPrivados.get(this);
        datos.edad = edadN;
        datosPrivados.set(this,datos);
    }
}

let carlos = new Persona("Carlos", "35");
console.log(carlos);
console.log(carlos.getNombre());  //output:carlos
carlos.setNombre("Julian")
console.log(carlos.getNombre());  ////output:julian
carlos.nombre;    //undefined