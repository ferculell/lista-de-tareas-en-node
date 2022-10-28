import colors from 'colors';
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

    crearTareasDesdeDB(datosDB) {
        datosDB.forEach((item) => {
            const tarea = new Tarea(item.desc, item.id, item.completadoEn);
            this._listado[tarea.id] = tarea;
        });
    }

    verListado() {
        this.listadoArr.forEach((tarea, i) => {
            const num = `${i + 1}.`;
            console.log(`${num.green} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}`);
        });
    }
}