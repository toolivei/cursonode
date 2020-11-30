const express = require('express')
const router = express.Router()

router.get('/admin',(req, res)=>{
    res.send('Acessando administração')
})

router.get('/admin/:id',(req, res)=>{
    res.send(`Acessando administração com o id: ${req.params.id}`)
})


router.post('/admin',(req, res)=>{
    const corpo = `Login: ${req.body.login}\n Senha: ${req.body.senha}`
    res.send('Acessando administração via post ' + corpo)
})


router.patch('/admin/:id',(req, res)=>{
    res.send('Acessando administração via PATCH')
})

router.put('/admin/:id',(req, res)=>{
    res.send('Acessando administração via PUT')
})

router.delete('/admin/:id',(req, res)=>{
    res.send('Acessando administração via DELETE')
})

module.exports = router
