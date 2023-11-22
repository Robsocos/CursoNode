console.log('funcionou!')
const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send("Olá WORLD")
})

app.get('/imagens',(req,res) =>{
    res.send('Olá Imagens')
} )

app.listen(3000, () => {
console.log('Servidor iniciado com sucesso')

})

