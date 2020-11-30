function soma(x){

    return new Promise((resolve, reject)=>{

        return setTimeout(()=>{
            resolve(x + 5000)
        },3000)     

    })

}


soma(555)
    .then((resultado)=>{
        console.log(`Resolvido: ${resultado}`)
    })

//escreve()

