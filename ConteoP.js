function crearConteo(num){
    let contador = num;   //variable privada
    function contar(){
        contador += 2;
        console.log(contador);
        return contador;
    }
    return contar;
}
const miConteo = crearConteo(5);   //Instanciar
miConteo();