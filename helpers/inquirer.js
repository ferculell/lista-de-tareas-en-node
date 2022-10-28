import inquirer from 'inquirer';
import colors from 'colors';


const inquirerMenu = async () => {

    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: '¿Qué desea hacer?',
            loop: false,
            choices: [
                {
                    value: '1',
                    name: `${'1.'.green} Crear tarea`
                },
                {
                    value: '2',
                    name: `${'2.'.green} Listar tareas`
                },
                {
                    value: '3',
                    name: `${'3.'.green} Listar tareas completas`
                },
                {
                    value: '4',
                    name: `${'4.'.green} Listar tareas pendientes`
                },
                {
                    value: '5',
                    name: `${'5.'.green} Completar tarea(s)`
                },
                {
                    value: '6',
                    name: `${'6.'.green} Borrar tarea`
                },
                {
                    value: '0',
                    name: `${'0.'.green} Salir \n`
                },
            ]
        }
    ];

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.green);
    console.log('===========================\n'.green);
    
    const { opcion } = await inquirer.prompt(preguntas);
    
    return opcion;
}

const pausar = async () => {
    const question = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc; 
}

const listaBorrar = async (tareas) => {
    const choices = tareas.map( (tarea, i) => {
        const num = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${num} ${tarea.desc}`
        }
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            loop: false,
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    
    return id;
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    
    return ok;
}

export { inquirerMenu, pausar, leerInput, listaBorrar, confirmar };