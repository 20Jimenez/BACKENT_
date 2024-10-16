class Juego{
    #personaje;
    #puntaje;
    #nivel;
    constructor(personaje, puntaje, nivel){
        this.#personaje = personaje;
        this.#puntaje = puntaje;
        this.#nivel = nivel;
    }
    getPersonaje(){
        return this.#personaje;
    }
    setPersonaje(alias){
        this.#personaje = alias;
    }
    getPuntaje(){
        return this.#puntaje;
    }
    setPuntaje(puntos){
        this.#puntaje = puntos;
    }
    getNivel(){
        return this.#nivel;
    }
    setNivel(nivel){
        this.#nivel = nivel;
    }
    mostrarInformacion(){
        console.log(this.#personaje, this.#puntaje, this.#nivel)
    }
}

let amongus = new Juego("Santi", "20", "1");
amongus.mostrarInformacion();
amongus.setPersonaje("Martin"); 
amongus.mostrarInformacion();
//amongus.#personaje = "martin";