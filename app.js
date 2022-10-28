import colors from 'colors';

import { inquirerMenu, pausar, leerInput, listaBorrar, confirmar, mostrarChecklist } from './helpers/inquirer.js';
import { guardarDB, leerDB } from './helpers/manejarDB.js';
import Tareas from './models/tareas.js';


const main = async () => {
    
    const tareas = new Tareas();
    const tareasDB = leerDB();
    let opt = '';

    if (tareasDB) {
        tareas.crearTareasDesdeDB(tareasDB);
    }

    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const descripcion = await leerInput('Descripción:');
                tareas.crearTarea(descripcion);
                break;
            
            case '2':
                tareas.verListado();
                break;

            case '3':
                tareas.filtrarPorCompletada();
                break;

            case '4':
                tareas.filtrarPorCompletada(false);
                break;

            case '5':
                const ids = await mostrarChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;

            case '6':
                const id = await listaBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('¿Seguro que desea borrar la tarea seleccionada?');
                    
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('\nTarea borrada');
                    }
                }
                break;
        
            default:
                console.log('Algún error no previsto ha ocurrido');
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== '0') {
            await pausar();
        }

    } while (opt !== '0');
}

main();