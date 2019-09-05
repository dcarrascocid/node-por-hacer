const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente'


};


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actulaiza una tarea por hacer', {
        descripcion,
        completado

    })
    .command('borrar', 'Borrar un registro', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}