import Vehiculo from"./Vehiculo.js"

class Avion extends Vehiculo{
    mover(distancia, velocidad){
        console.log(`Avion: ${distancia} ${velocidad}`)
    }
}
export default Avion;