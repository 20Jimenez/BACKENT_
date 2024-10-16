function crearCuenta(saldoDisponible){
    let saldo = saldoDisponible;
    function depositar(cantidad){
        if(cantidad > 0){
            saldo += cantidad;
            console.log("deposito" +saldo);
        }
        else{
            console.log("cantidad debe ser mayor a cero")
        }
    }
    function retirar(cantidad){
        if(cantidad > 0 && cantidad <= saldo){
            saldo -= cantidad;
            console.log("retiro" +saldo)
        }
    }
    function verSaldo(){
        console.log("saldo actual" +saldo);
        return saldo;
    }
    return {depositar, retirar, verSaldo};
}
const miCuenta = crearCuenta(100);  // inatancia
miCuenta.depositar(50);
miCuenta.retirar(20);
miCuenta.verSaldo();








































/*function crearCuenta(saldoDisponible) {
    
    let saldo = saldoDisponible;

    function depositar(cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
            console.log(`Se depositaron ${cantidad}. Saldo actual: ${saldo}`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que 0.");
        }
    }

    function retirar(cantidad) {
        if (cantidad <= saldo) {
            saldo -= cantidad;
            console.log(`Se retiraron ${cantidad}. Saldo actual: ${saldo}`);
        } else {
            console.log("La cantidad a retirar no puede ser mayor que el saldo disponible.");
        }
    }

    // Retornamos las funciones para que puedan ser utilizadas desde afuera
    return {
        depositar,
        retirar,
        obtenerSaldo: () => saldo
    };
}

// Ejemplo de uso
const cuenta = crearCuenta(1000);
cuenta.depositar(200);  // Se depositaron 200. Saldo actual: 1200
cuenta.retirar(500);    // Se retiraron 500. Saldo actual: 700
cuenta.retirar(800);    // La cantidad a retirar no puede ser mayor que el saldo disponible.*/
