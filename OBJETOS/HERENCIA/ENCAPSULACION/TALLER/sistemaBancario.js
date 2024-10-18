class CuentaBancaria {
    constructor(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } 
        else {
            console.log('Fondos insuficientes');
        }
    }
}

        class CuentaAhorros extends CuentaBancaria {
            aplicarIntereses() {
                this.saldo += this.saldo * 0.05; // 5% de interés
            }
        }

        class CuentaCorriente extends CuentaBancaria {
            // Métodos específicos para CuentaCorriente si es necesario
        }

        const cuentas = [
            new CuentaAhorros('001', 1000),
            new CuentaCorriente('002', 2000),
            new CuentaAhorros('003', 1500),
            new CuentaCorriente('004', 2500)
        ];

        // Aplicar intereses a las cuentas de ahorro
        cuentas.forEach(cuenta => {
            if (cuenta instanceof CuentaAhorros) {
                cuenta.aplicarIntereses();
            }
        });

        // Mostrar cuentas en la tabla
        const cuentasTable = document.getElementById('cuentasTable');

        cuentas.forEach(cuenta => {
            const row = cuentasTable.insertRow();
            const cellNumeroCuenta = row.insertCell(0);
            const cellSaldo = row.insertCell(1);
            const cellTipo = row.insertCell(2);

            cellNumeroCuenta.textContent = cuenta.numeroCuenta;
            cellSaldo.textContent = cuenta.saldo.toFixed(2);
            cellTipo.textContent = cuenta instanceof CuentaAhorros ? 'Ahorros' : 'Corriente';
        });