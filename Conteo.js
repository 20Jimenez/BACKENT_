function crearConteo(){
    let conteo = 0;
    function conteoI(){
        conteo = conteo + 1;
        console.log("este es mi contador" + conteo)
        return conteo;
    }
    return conteoI;
}
const ejemplo = crearConteo();
ejemplo();