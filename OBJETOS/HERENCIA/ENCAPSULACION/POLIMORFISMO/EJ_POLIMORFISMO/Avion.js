import Vehiculo from"./Vehiculo.js"

class Avion extends Vehiculo{
    mover(distancia, velocidad){
        console.log(`${distancia} ${velocidad}`)
    }
}
export default Avion;