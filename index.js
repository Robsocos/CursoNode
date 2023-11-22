console.log('funcionou!')
const express = require('express')
const app = express()
const path = require ('path')

app.get('/',(req,res) => {
    res.send("Olá WORLD")
})

app.get('/imagens',(req,res) =>{
    res.send('Olá Imagens')
} )

app.get('/sobre',(req, res) => {
 res.sendFile(path.resolve('sobre.html'))

})

app.listen(3000, () => {
console.log('Servidor iniciado com sucesso')

})

