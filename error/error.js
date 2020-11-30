// throw new Error('Ah não, deu erro!!!')

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Ah não, deu erro!!!')
}

function init(){
    try {
        execute()
        
    } catch (error) {
        console.log(`Temos um problema!!!! -> ${error.message}`)
    }
}

init()
console.log('Depois do erro')
