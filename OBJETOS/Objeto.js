let deportes = {
    conBalon:["futbol","basketball","futbol Americano"],
    sinBalon:["natacion","atletismo","tejo"]
};
let persona ={
    nombre:"Lucas",
    edad:20,
    estudios:{
        nombreCarrera:"arquitectura",
        semestre:"4",
    }
}
console.log("deportes: " +deportes.conBalon[1]); 
console.log("sinBalon: " +deportes.sinBalon);
console.log("persona: " +persona.nombre+" "+persona.edad);
persona.nombre = "Martin" //Asignar cambiar el nombre
console.log("persona: " +persona.nombre+" "+persona.edad);
console.log("persona: " +persona.estudios.nombreCarrera+ " " +persona.estudios.semestre);
persona.estudios.nombreCarrera = "ADSO"  //Cambiar la carrera
console.log("persona: " +persona.estudios.nombreCarrera+ " " +persona.estudios.semestre);

// Definición del objeto marcasAutos
var marcasAutos = {};  //se crea un objeto vacio
marcasAutos.marca = ["honda", "fort"];
console.log("Antes de eliminar:", marcasAutos);

// Eliminar la propiedad 'marca'
delete marcasAutos.marca;

// Comprobar el objeto después de eliminar la propiedad
console.log("Después de eliminar:", marcasAutos);

var mascota = {
    nombre:"Akira",
    raza:"Criollo",
    edad:"5",
    informacion:function(){
        console.log("mascotas: "+this.nombre+ " " +this.raza)
    }
}
mascota.informacion();