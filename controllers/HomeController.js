class HomeController {
    static index(req, res)
    {
        res.json({
        nome: "Robson C",
        sobrenome: "Costa"

        })

    }
}

module.exports = HomeController;