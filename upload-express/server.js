const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))


const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, 'uploads/')

    },
    filename: (req, file, callback)=>{
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({storage})


app.get('/', (req, res)=>{
    // res.json({message: 'Bem vindo!'})
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file
    if(!file){
        const err = new Error('Por favor selecione um arquivo')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(file)

})


app.listen(3000, '127.0.0.1', ()=>{
  console.log(`Server Running on por 3000`)  
})