const fs = require('fs');
const db = require('./tareas.json');

let nuevaTarea = '';
let titulo = '';
let estado = '';

function tareas(titulo, estado) {
    let tarea = {
        titulo: this.titulo = titulo,
        estado: this.estado = estado,
    }
};

function leerJson(titulo, estado) {
    nuevaTarea = new tareas(titulo, estado)
    return nuevaTarea;
}

function escribirJson(arrayTareas) {
    const tareaJson = JSON.stringify(arrayTareas, null, 4);
    fs.writeFileSync('./tareas.json', tareaJson);
};

function guardarTarea(objetoTarea, callback) {
    db.push(objetoTarea);
    callback(db);
};

function mostrarTarea(){
    db.forEach(function(tarea){
        console.log(tarea);
    });
}

function leerPorEstado(tarea) {
    let listaTareas = db.filter(function(lista) {
        return lista.estado == tarea;
    });
    console.log(listaTareas);
};

module.exports = {tareas, mostrarTarea, leerJson, guardarTarea, escribirJson, leerPorEstado}