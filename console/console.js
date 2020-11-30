console.log('Exibindo uma mensagem no conosole')


//
console.error(new Error('Exibindo mensagem de erro, temos problemas!!!'))


const carros = ['GM', 'FIAT', 'FORD', 'VM', 'Renault', 'Honda', 'Hyundai']

console.table(carros)

const dados = {name: 'Glaucio Daniel', empresa: 'Hcode'}

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')
console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    //xxxx
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')


console.assert(false, 'Erro identificado: %s', 'Não funcionou')

//console.clear; // limpa todos os dados do console