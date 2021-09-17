const fs = require('fs');
const logic = require('./tareas');
const db = require('./tareas.json');

let opciones = process.argv[2];

function elegirOpcion () {
    switch(opciones) {
        case 'listar':
            logic.mostrarTarea();
            console.log('Terminado');
            break;
        case 'crear':
            let nuevaTarea = logic.leerJson(process.argv[3], 'pendiente');
            logic.guardarTarea(nuevaTarea, logic.escribirJson);
            console.log('Tarea creada');
            break;
        case 'registrar':
            let tarea = logic.leerJson(process.argv[3], process.argv[4]);
            logic.guardarTarea(tarea, logic.escribirJson);
            console.log('Guardado');
            break;
        case 'estado':
            logic.leerPorEstado(process.argv[3]);
            break;
        case undefined:
            console.log('Debes ingresar una opcion');
            break;
        default:
            console.log('No entiendo lo que quieres hacer');
    }
}

module.exports = {elegirOpcion};