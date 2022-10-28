import { v4 } from 'uuid';

export default class Tarea {
    constructor (desc, id = null, completadoEn = null) {
        this.desc = desc;
        this.id = id || v4();
        this.completadoEn = completadoEn;
    }
}