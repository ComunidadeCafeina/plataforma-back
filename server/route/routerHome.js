
const express = require('express')
const routerHome = express.Router()

routerHome.get('/home', function (req, res) {
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

module.exports = routerHome