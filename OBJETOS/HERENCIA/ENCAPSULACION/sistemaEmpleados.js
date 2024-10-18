class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    calcularSueldoTotal() {
        return this.sueldo;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularSueldoTotal(horasTrabajadas) {
        return this.sueldo * horasTrabajadas;
    }
}

class EmpleadoMedioTiempo extends Empleado {
    calcularSueldoTotal(horasTrabajadas) {
        return (this.sueldo * horasTrabajadas) / 2;
    }
}

const empleados = [
    new EmpleadoTiempoCompleto("Juan", 20),
    new EmpleadoMedioTiempo("Ana", 15),
    new EmpleadoTiempoCompleto("Luis", 25),
    new EmpleadoMedioTiempo("Maria", 18)
];

const empleadosTable = document.getElementById('empleadosTable');

empleados.forEach(empleado => {
    const sueldoTotal = empleado instanceof EmpleadoTiempoCompleto
        ? empleado.calcularSueldoTotal(40)
        : empleado.calcularSueldoTotal(20);

    const row = empleadosTable.insertRow();
    const cellNombre = row.insertCell(0);
    const cellSueldo = row.insertCell(1);

    cellNombre.textContent = empleado.nombre;
    cellSueldo.textContent = sueldoTotal;
});