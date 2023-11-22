console.log('funcionou!')
const express = require('express')
const app = express()
const path = require ('path')

app.get('/',(req,res) => {
    res.json({
        nome:"Robson",
        sobrenome:"Costa"

    })
})

app.get('/ws/69099173/json',(req,res) => {
    res.json({
        Cep:"69099173",
        logradouro:"Tv mossoró",
        complemento:"lado ímpar",
        bairro:"Braga Mendes",
        Localidade:"Manaus",
        uf:"AM",
        ibge:"3550308",
        gia:"1004",
        ddd:"92",
        siafi:"7107",

        })
   })  

app.get('/imagens',(req,res) =>{
    res.send('Olá Imagens')
} )

app.get('/sobre',(req, res) => {
 res.sendFile(path.resolve('sobre.html'))

})

app.get('/perguntasfrequentes', (req, res) => {
    res.sendFile(path.resolve('perguntasfrequentes.html'))
})

app.listen(3000, () => {
console.log('Servidor iniciado com sucesso')

})

