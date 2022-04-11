const express = require('express')
const router = express.Router()

const projectController = require('../controllers/projectController.js')
const socialNetworkController = require('../controllers/socialNetworkController.js')

router.get('/projects', projectController.all)
router.get('/social-networks', socialNetworkController.all)

router.post('/projects', projectController.create);
router.post('/social-networks', socialNetworkController.create);


module.exports = router