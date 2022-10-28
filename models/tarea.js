import { v4 } from 'uuid';

export default class Tarea {
    constructor (desc) {
        this.id = v4();
        this.desc = desc;
        this.completadoEn = null;
    }
}