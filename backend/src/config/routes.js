const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// Team ROUTES
	const teamService = require('../api/team/teamService')
	teamService.register(router, '/teams')

}
