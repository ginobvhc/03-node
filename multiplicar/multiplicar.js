const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  if (!Number(base) | !Number(limite)) {
    console.log(`Base ${base} or Limite ${ limite }, must be Numbers`).red;
  } else {
    console.log('======================================'.green);
    console.log(`====     tabla de ${ base }     ====`.green);
    console.log('======================================'.green);
    for (let i = 0; i <= limite; ++i) {
      console.log(`${ base } * ${ i } = ${ base * i }`);
    }
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`base: ${ base } no es un numero `);
      return;
    };

    let data = '';

    for (let i = 1; i <= limite; i++) {
      // console.log(`${ base } * ${ i } = ${ base * i}`);
      data += (`${ base } * ${ i } = ${ base * i} \n`);
    }

    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${ base }.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
