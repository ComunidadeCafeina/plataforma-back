const express = require('express')
const router = express.Router()

const projectController = require('../controllers/projectController.js')
const socialNetworkController = require('../controllers/socialNetworkController.js')

router.get('/', function (req, res) {
    res.status(200).send({
      "title": "Plataforma Compiladoras - Ambiente DEV",
      "version": "1.0.0",
      "repository": "https://github.com/marianavns/plataforma-back/tree/develop",
      "endpoints": {
          "/projects + método GET": "Visualize todos os projetos.",
          "/social-networks + método GET": "Visualize todas as redes sociais.",
          "/projects + método POST": "Crie um cadastro de projeto no banco de dados",
          "/projects + método POST": "Crie um cadastro de rede social no banco de dados.",     
      },
      "Mais Informações": "mariana.vns@gmail.com"
    })
  })

router.get('/projects', projectController.all)
router.get('/social-networks', socialNetworkController.all)

router.post('/projects', projectController.create);
router.post('/social-networks', socialNetworkController.create);


module.exports = router