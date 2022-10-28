import Tarea from "./tarea.js";

export default class Tareas {
    constructor () {
        this._listado = {};
    }

    get listadoArr() {
        const listado =[];
        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]));
        return listado;
    }

    crearTarea(desc) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}