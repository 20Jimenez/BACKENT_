class Estudiante {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
}

class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    calcularPromedio() {
        const totalCalificaciones = this.estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
        return this.estudiantes.length ? totalCalificaciones / this.estudiantes.length : 0;
    }
}

class CursoOnline extends Curso {
    // Métodos específicos para CursoOnline si es necesario
}

class CursoPresencial extends Curso {
    // Métodos específicos para CursoPresencial si es necesario
}

const cursos = [
    new CursoOnline('Matemáticas Online'),
    new CursoPresencial('Ciencias Presencial'),
];

cursos[0].agregarEstudiante(new Estudiante('Juan', 85));
cursos[0].agregarEstudiante(new Estudiante('Ana', 90));
cursos[1].agregarEstudiante(new Estudiante('Luis', 78));
cursos[1].agregarEstudiante(new Estudiante('Maria', 82));

const cursosTable = document.getElementById('cursosTable');

cursos.forEach(curso => {
    const row = cursosTable.insertRow();
    const cellNombreCurso = row.insertCell(0);
    const cellPromedio = row.insertCell(1);
    const cellTipo = row.insertCell(2);

    cellNombreCurso.textContent = curso.nombreCurso;
    cellPromedio.textContent = curso.calcularPromedio().toFixed(2);
    cellTipo.textContent = curso instanceof CursoOnline ? 'Online' : 'Presencial';
});