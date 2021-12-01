const express = require('express')
const routerSocialNetworks = express.Router()
const socialNetworksService = require('../service/socialNetworksService');

routerSocialNetworks.get('/social-networks', async function (req, res) {
	const socialNetworks = await socialNetworksService.getSocialNetworks();
	res.json(socialNetworks);
})


module.exports = routerSocialNetworks