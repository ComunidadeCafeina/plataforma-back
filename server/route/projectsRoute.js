const express = require('express')
const router = express.Router()

// const projectsService = require('../service/projectsService');
const ProjectController = require('../controllers/project.js')

router.get('/projects', ProjectController.all)


module.exports = router