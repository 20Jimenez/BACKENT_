class cuentaBancaria{
    constructor(numeroCuenta,titular,saldoInicial=0){
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this._saldoInicial = saldoInicial; //Esta propiedad es privada esta protegida
    }
    set saldoInicial(valor){
        if(valor>0 && typeof valor==='number'){
            this._saldoInicial = valor;
        }
    }
    get saldoInicial(){
        return this._saldoInicial;
    }
    rertirar(cantidad){
        if(cantidad>0 && typeof cantidad==='number'){
            if(cantidad<=this.saldoInicial){
                this._saldoInicial -= cantidad;
            }
        }
    }
    depositar(cantidad){
        if(cantidad>0 && typeof cantidad==='number'){
                this._saldoInicial += cantidad;
        }
    }
    mostrarInformacion(){
        console.log(`Numero de cuenta: ${this.numeroCuenta} y el numero de cuenta pertenece a: ${this.titular} su saldo inicial es: ${this._saldoInicial}`)
    }
}
let Alvaro=new cuentaBancaria("12345","Alvaro Nuñez",1000);
Alvaro.mostrarInformacion();
Alvaro.depositar(100);
Alvaro.mostrarInformacion();
Alvaro.rertirar(50);
Alvaro.mostrarInformacion();