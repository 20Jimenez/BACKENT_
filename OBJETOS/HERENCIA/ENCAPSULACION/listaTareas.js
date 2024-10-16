class ListaTareas{
    constructor(){
        this.tarea = [];
    }
    agregarTarea(tarea){
        this.tarea.push(tarea);
        console.log("tarea: ",tarea);
    }
    listarTareas(){
        for(let i = 0; i < this.tarea.length; i++){
            console.log(this.tarea[i]);
        }
    }
    buscarTarea(palabraBuscar){
        for(let i = 0; i < this.tarea.length; i++){
            if(this.tarea[i] == palabraBuscar){
                console.log("Tarea encontrada");
            }
            else{
                console.log("Tarea no encontrada");
            }
        }
    }
    eliminarTarea(palabraBuscar){
        for(let i = 0; i < this.tarea.length; i++){
            if(this.tarea[i] == palabraBuscar){
                let tareaEliminada = this.tarea.splice(i,1);
                console.log("Tarea eliminada", tareaEliminada);
                break;
            }
            else{
                console.log("Tarea no encontrada");
            }
        }
    }
}
let tareasH = new ListaTareas();
tareasH.agregarTarea("Comprar leche");
tareasH.agregarTarea("Estudiar js");
tareasH.agregarTarea("Lavar ropa");
tareasH.agregarTarea("Arreglar el cuarto");
tareasH.listarTareas();
tareasH.buscarTarea("Comprar leche");
tareasH.eliminarTarea("Comprar leche");
tareasH.listarTareas();