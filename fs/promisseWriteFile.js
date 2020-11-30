const { writeFile, promises } = require('fs')



function criaArquivo(name, content){
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })

    })
}


criaArquivo('promisseArquivo.txt', 'Criando um arquivo utilizando promisses')
    .then(()=>{
        console.log('Arquivo promiseArquivo.txt criado com sucesso')

    }).catch((err)=>{
        console.log(`Erro: ${err}`)

    })


