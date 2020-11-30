const path = require('path')

console.log('basename',path.basename('~/Cursos/Node/cursonode/fs/texto.txt'))
console.log('normalizae',path.normalize('~/Cursos/Node\cursonode\/fs/texto.txt'))
console.log('join path', path.join('/teste','teste2','teste3/teste4','dir2','.'))
console.log('resolve', path.resolve('path.js'))
console.log('extension', path.extname('path.js'))