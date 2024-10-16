class Cancion{
    titulo;
    artista;
    duracion;
    constructor(titulo, artista, duracion){
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }
    mostrarInformacion(){
        console.log("Cancion: " + this.titulo + this.artista +  this.duracion);
    }
}
class playList{
    #canciones;
    nombre;
    genero;
    constructor(nombre, genero){ 
        this.#canciones = [];   //Arreglo
        this.nombre = nombre;
        this.genero = genero;
    }
    agregarCanciones(cancion){
        if(cancion instanceof Cancion){
            this.#canciones.push(cancion);   //Llega los objetos
            console.log("La cancion ha sido agregada")
        }
        else{
            console.log("Solo se pueden agregar instancias de la class Cancion.")
        }
    }
    buscarCanciones(titulo) {
        const resultados = this.#canciones.filter(cancion => cancion.titulo.toLowerCase() === titulo.toLowerCase());  //Filter busquedas; se usa para crear nuevos arreglos basados en una condición
        return resultados;
    }
    
    listarCanciones() {
        this.#canciones.forEach(cancion /*No deben de ir con "s"*/ => {   //forEach es solo y esclusivamente para arreglos; se usa para realizar acciones con cada elemento de un arreglo existente sin crear uno nuevo.
            cancion.mostrarInformacion();
        });
    }
}

/*//Quemar datos
let cancion1 = new Cancion("Bohemia Rhapsody", "Queen", 254);
let cancion2 = new Cancion("Amarte mas no pude", "Diomedez Diaz", 520);
let cancion3 = new Cancion("Hotel California", "Eagles", 391);
let cancion4 = new Cancion("El Reo Ausente", "Pastor Lopez", 480);
let cancion5 = new Cancion("Imagine", "Jhon Lennon", 183);
let playListVariado = new playList("Variado", "Favoritas");
playListVariado.agregarCanciones(cancion1);
playListVariado.agregarCanciones(cancion2);
playListVariado.agregarCanciones(cancion3);
playListVariado.agregarCanciones(cancion4);
playListVariado.agregarCanciones(cancion5);
playListVariado.listarCanciones();
/console.log(playListVariado.buscarCanciones("Bohemia Rhapsody"));*/
let salsaPlayList = new playList("Salsa", "Salsa pesada");
document.querySelector("#playlistnombre").textContent = salsaPlayList.nombre;
document.querySelector("#playlistgenero").textContent = salsaPlayList.genero;
document.querySelector("#ok").addEventListener("click", function (){
    //alert("Estoy en la acción del boton");
    let tituloInput= document.querySelector("#titulo");
    let artistaInput= document.querySelector("#artista");
    let duracionInput= document.querySelector("#duracion");
    let titulovalue = tituloInput.value;
    let artistavalue = artistaInput.value;
    let duracionvalue = duracionInput.value;
    /*alert(titulovalue);
    alert(artistavalue);
    alert(duracionvalue);*/
    let cancioncita = new Cancion(titulovalue, artistavalue, duracionvalue);
    salsaPlayList.agregarCanciones(cancioncita);
    tituloInput.value = "";
    artistaInput.value = "";
    duracionInput.value = "";
});
document.querySelector("#mostrar").addEventListener("click", function (){
    alert("Estas en el boton mostrar");
    let salsa = salsaPlayList.listarCanciones();
    for (let i = 0; i < cancionesSalsa.length; i++){
        let lista = document.createElement("li"); //Crear elementos HTML <li>
        lista.textContent = `${salsa.titulo}- ${salsa.artista}- ${salsa.duracion}`;
        let listaC = document.querySelector("#lista-canciones");  //Se captura el elemento
        listaC.appendChild(lista);
    }
});