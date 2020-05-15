// const fs = require('fs');
const argv = require('./config/yargs.js').argv;
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors');

const comando = argv._[0];
switch (comando) {
  case 'listar':
    // console.log(argv.limite);
    listarTabla(argv.base, argv.limite);
    // console.log('Listar');
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
        .then((archivo) => console.log(`Archivo creado: `+`${archivo}`.green))
        .catch((e) => console.log(e));
    // console.log('Crear');
    break;

  default:
    console.log('Comando no reconocido');
}

