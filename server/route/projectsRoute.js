const express = require('express')
const routerProjects = express.Router()
const projectsService = require('../service/projectsService');

routerProjects.get('/projects', async function (req, res) {
	const projects = await projectsService.getProjects();
	res.json(projects);
})

// router.get('/:id')
// router.post('/')
// router.put('/:id')
// router.delete('/:id')


module.exports = routerProjects