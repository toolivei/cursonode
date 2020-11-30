const { EventEmitter } = require("events")

class Evento extends EventEmitter {}
const meuEvento = new Evento()

// subscriber - assinante
meuEvento.on('seguranca', (x, y)=>{
    console.log(`Executando o envento 'seguranca': ${x} ${y}`)
})

// publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario')


meuEvento.on('encerrar', dados=>{
    console.log('Assinante: ' + dados)
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados')