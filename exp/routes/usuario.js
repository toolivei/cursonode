const express = require('express')
const router = express.Router()

function logReq(req, res, next){
    console.log('Executando a Função Middleware para a rota usuários')
    return next()
}


router.get('/usuario', logReq, (req, res)=>{
    res.send('Listando os usuarios')
})



router.get('/usuario/:id',(req, res)=>{
    res.send(`Acessando usuario com o id: ${req.params.id}`)
})


module.exports = router