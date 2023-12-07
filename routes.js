const router = require ('express').Router();
const path = require('path')

const HomeController = require('./controllers/HomeController');
const SobreController = require('./controllers/SobreController');
const Cep = require('./controllers/Cep');
const Imagens = require('./controllers/Imagens');
const LivroController = require('./controllers/LivroController');




router.get('/',(req,res) => {
    res.json({
        nome:"Robson C.",
        sobrenome: "Santos"
    
    }
    )
})

router.get('/sobre', SobreController.index)

router.get('/',HomeController.index)


router.get('/ws/69099173/json', Cep.index)
 

router.get('/imagens', Imagens.index)

router.get('/livros', LivroController.index)
router.get('/livros/:id',LivroController.show)
router.post('/livros', LivroController.store)
router.put('/livros/:id', LivroController.update)
router.delete('/livros/:id', LivroController.delete)



router.get('/sobre',(req, res) => {
 res.sendFile(path.resolve('sobre.html'))

})

router.get('/perguntasfrequentes', (req, res) => {
    res.sendFile(path.resolve('perguntasfrequentes.html'))
})

module.exports = router;