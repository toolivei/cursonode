const { writeFile } = require('fs')

writeFile("arquivo.txt", 'Criando Arquivo de Texto com WriteFile', err => {
    if(err) throw err
    console.log('Arquivo criado com sucesso!')
})