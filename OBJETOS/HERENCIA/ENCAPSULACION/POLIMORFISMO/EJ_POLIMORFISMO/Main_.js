import Coche from "./Coche.js"
import Avion from "./Avion.js";

function mover(hijas){
    hijas.mover(5,4);  //Cochesito.mpver
}
let cochesito = new Coche();
let avioncito = new Avion();
mover(cochesito);
mover(avioncito);