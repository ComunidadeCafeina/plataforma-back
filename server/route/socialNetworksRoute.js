const express = require('express')
const routerSocialNetworks = express.Router()

// const projectsService = require('../service/projectsService');
const SocialNetworkController = require('../controllers/socialnetwork.js')

routerSocialNetworks.get('/social-networks', SocialNetworkController.all)


module.exports = routerSocialNetworks