function crearCuenta(valorInicial){
    let saldo = valorInicial;
    return{
        depositar:function(cantidad){
            saldo += cantidad;
            console.log("depositar" + saldo);
        },

        retirar:function(cantidad){
            saldo -= cantidad;
            console.log("retirar" + saldo);
        },

        verSaldo:function(){
            console.log("saldo" + saldo);
        }
    }
}
const cuenta= crearCuenta(10);
cuenta.depositar(5);
cuenta.retirar(10);
cuenta.verSaldo();

const cuenta1= crearCuenta(100);
cuenta1.depositar(25);
cuenta1.retirar(100);
cuenta1.verSaldo();