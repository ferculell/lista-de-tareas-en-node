// Este código no se está utilizando en la aplicación
// Está reemplazado por inquirer.js

import colors from 'colors';

const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();
        console.log('==========================='.green);
        console.log('   Seleccione una opción   '.green);
        console.log('===========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Opción seleccionada: ', (opt) => {
            readline.close();
            resolve(opt);
        });
    });

}

const pausar = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        });
    });

}

export {
    mostrarMenu,
    pausar
}