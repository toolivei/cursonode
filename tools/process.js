require('./sub/sub.js')
console.log('------------------------------------')
console.log(`Nome do arquivo: `, __filename)
console.log(`Diretório do arquivo: `, __dirname)
console.log(`Parâmetros de execução: `, process.argv)
// console.log(`Variavel de ambiente: `, process.env)

switch(process.argv[2]){

    case 'a' : 
        console.log('Executando rotina principal')
        break

        case '-i' : 
        console.log('Executando Instalação')
        break

        case '-q' : 
        console.log('Encerrando Aplicação')
        process.exit() // Interrompe imediatamente o codigo
        break
    
        default :
            console.log('Parametro invalido')   

}


console.log(`Ambiente do Servidor: `, process.platform)

