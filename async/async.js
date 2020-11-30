function sum(x){

    return new Promise((resolve, reject)=>{

        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject(`Entrada invalida: ${x}`)
        }

        return setTimeout(()=>{
            resolve(x + 5000)
        },3000)     

    })

}


async function main(){
    try {
        const resultado = await sum(3)
        console.log(`Resultado: ${resultado}`)
        const resultado2 = await sum(5)
        console.log(`Resultado2: ${resultado2}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
    }
    
}

main()
console.log('Função assincrona executada !')



//escreve()

