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
        console.log("Cancion" + this.titulo + this.artista +  this.duracion);
    }
}