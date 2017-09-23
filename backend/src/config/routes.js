const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// Team ROUTES
	const teamService = require('../api/team/teamService')
	teamService.register(router, '/teams')

	// ShirtYear ROUTES
	const yearService = require('../api/shirtYear/shirtYearService')
	yearService.register(router, '/shirtyears')

}
