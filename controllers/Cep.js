class Cep {
    static index(req, res)
    {
     res.json(
     {
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
    }
}
module.exports = Cep