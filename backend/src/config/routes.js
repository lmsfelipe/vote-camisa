const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// Teams ROUTES
	const teamService = require('../api/team/teamService')
	teamService.register(router, '/teams')

	// ShirtYears ROUTES
	const shirtYearService = require('../api/shirtYear/shirtYearService')
	shirtYearService.register(router, '/shirtyears')

	// Shirts ROUTES
	const shirtService = require('../api/shirt/shirtService')
	shirtService.register(router, '/shirts')

}
