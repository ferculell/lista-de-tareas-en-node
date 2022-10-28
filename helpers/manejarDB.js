import fs from 'fs';


const archivo = './db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if (fs.existsSync(archivo)) {

        const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
        const data = JSON.parse(info);
        console.log(data);

        return null;

    } else {

        return null;
        
    }
}

export { guardarDB, leerDB };