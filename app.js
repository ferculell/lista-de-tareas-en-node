import colors from 'colors';

import { inquirerMenu, pausar, leerInput } from './helpers/inquirer.js';
import { guardarDB, leerDB } from './helpers/manejarDB.js';
import Tareas from './models/tareas.js';


const main = async () => {
    
    const tareas = new Tareas();
    const tareasDB = leerDB();
    let opt = '';

    //await pausar();

    if (tareasDB) {
        // TO DO
    }
    
    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const descripcion = await leerInput('Descripción:');
                tareas.crearTarea(descripcion);
                break;
            
            case '2':
                console.log(tareas.listadoArr);
                break;

            case '3':
                
                break;

            case '4':
                
                break;

            case '5':
                
                break;

            case '6':
                
                break;
        
            default:
                break;
        }

        //guardarDB(tareas.listadoArr);

        if (opt !== '0') {
            await pausar();
        }

    } while (opt !== '0');
}

main();