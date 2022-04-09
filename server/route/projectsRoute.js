const express = require('express')
const routerProjects = express.Router()

// const projectsService = require('../service/projectsService');
const ProjectController = require('../controllers/project.js')

routerProjects.get('/projects', ProjectController.all)


module.exports = routerProjects