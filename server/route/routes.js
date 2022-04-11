const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/projectController.js')
const SocialNetworkController = require('../controllers/socialNetworkController.js')

router.get('/projects', ProjectController.all)
router.get('/social-networks', SocialNetworkController.all)



module.exports = router