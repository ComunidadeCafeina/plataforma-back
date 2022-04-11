const express = require('express')
const router = express.Router()

const ProjectController = require('../controllers/projectController.js')
const SocialNetworkController = require('../controllers/socialNetworkController.js')

router.get('/projects', projectController.all)
router.get('/social-networks', socialNetworkController.all)

router.post('/projects', projectController.create);
router.post('/social-networks', socialNetworkController.create);


module.exports = router