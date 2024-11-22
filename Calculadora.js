// Función para realizar las operaciones
function calculadora() {
    let resultado = 0; // Variable para almacenar el resultado

    // Función para realizar la suma
    function suma(num1, num2) {
        resultado = num1 + num2;
        console.log("El resultado de la suma de " + num1 + " y " + num2 + " es: " + resultado);
    }

    // Función para realizar la resta
    function resta(num1, num2) {
        resultado = num1 - num2;
        console.log("El resultado de la resta de " + num1 + " y " + num2 + " es: " + resultado);
    }

    // Función para realizar la multiplicación
    function multiplicacion(num1, num2) {
        resultado = num1 * num2;
        console.log("El resultado de la multiplicación de " + num1 + " y " + num2 + " es: " + resultado);
    }

    // Función para realizar la división
    function division(num1, num2) {
        if (num2 !== 0) { // Verificación para evitar división por cero
            resultado = num1 / num2;
            console.log("El resultado de la división de " + num1 + " entre " + num2 + " es: " + resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
    }

    // Retornamos un objeto con las funciones disponibles
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division
    };
}

// Creamos una instancia de la calculadora
const miCalculadora = calculadora();

// Ejemplos de uso:
miCalculadora.suma(10, 3);          // Suma
miCalculadora.resta(10, 3);         // Resta
miCalculadora.multiplicacion(10, 3); // Multiplicación
miCalculadora.division(100, 5);      // División
miCalculadora.division(10, 0);      // División por numero cero